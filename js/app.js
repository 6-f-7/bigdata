/* ============================================================
   DS4511 Big Data Test Bank — application logic
   ============================================================ */
(function () {
  "use strict";

  const LECTURES = window.LECTURES;
  const QUESTIONS = window.QUESTIONS;
  const LETTERS = ["A", "B", "C", "D"];

  // ---------- session state ----------
  const state = {
    mode: "training",          // "training" | "test"
    scope: "all",              // "all" | "random25" | "random50" | "lecs"
    selectedLecs: new Set(),   // chosen lecture numbers when scope === "lecs"
    shuffleQuestions: false,
    shuffleOptions: false,
    deck: [],                  // active question objects (with possibly remapped options)
    index: 0,
    answers: [],               // chosen option index per deck position (null = unanswered)
  };

  // ---------- element helpers ----------
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  // ---------- navigation ----------
  function show(screenId) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $(screenId).classList.add("active");
    // Compact, footer-less layout while taking the quiz so it fits without scrolling
    document.body.classList.toggle("in-quiz", screenId === "quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- theme ----------
  function initTheme() {
    const saved = localStorage.getItem("ds4511-theme");
    if (saved) document.body.dataset.theme = saved;
    updateThemeIcon();
    $("themeToggle").addEventListener("click", () => {
      document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("ds4511-theme", document.body.dataset.theme);
      updateThemeIcon();
    });
  }
  function updateThemeIcon() {
    $("themeToggle").textContent = document.body.dataset.theme === "dark" ? "🌙" : "☀️";
  }

  // ---------- HOME rendering ----------
  function renderLectures() {
    const grid = $("lecturesGrid");
    grid.innerHTML = "";
    Object.keys(LECTURES).forEach((num) => {
      const meta = LECTURES[num];
      const count = QUESTIONS.filter((q) => q.lec === Number(num)).length;
      const card = el("button", "lec-card");
      card.dataset.lec = num;
      card.innerHTML = `
        <div class="lec-top">
          <span class="lec-ico">${meta.icon}</span>
          <span class="lec-count">${count} Q</span>
        </div>
        <span class="lec-num">Lecture ${num}</span>
        <span class="lec-title">${meta.title}</span>`;
      card.addEventListener("click", () => toggleLecture(num, card));
      grid.appendChild(card);
    });
  }

  // Chips are single-select shortcuts: "all" / "random25" / "random50".
  // Picking one clears any selected lectures.
  function selectChipScope(scope, clickedEl) {
    state.scope = scope;
    state.selectedLecs.clear();
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    document.querySelectorAll(".lec-card").forEach((c) => c.classList.remove("active"));
    if (clickedEl) clickedEl.classList.add("active");
    else {
      const chip = document.querySelector(`.chip[data-scope="${scope}"]`);
      if (chip) chip.classList.add("active");
    }
    updateStartSummary();
  }

  // Lecture cards are multi-select: tap to add/remove. Any selection switches
  // scope to "lecs"; clearing the last one falls back to "All lectures".
  function toggleLecture(num, cardEl) {
    num = Number(num);
    if (state.selectedLecs.has(num)) state.selectedLecs.delete(num);
    else state.selectedLecs.add(num);

    if (state.selectedLecs.size === 0) {
      selectChipScope("all");
      return;
    }
    state.scope = "lecs";
    cardEl.classList.toggle("active", state.selectedLecs.has(num));
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    updateStartSummary();
  }

  function selectMode(mode) {
    state.mode = mode;
    document.querySelectorAll(".mode-card").forEach((c) => c.classList.remove("selected"));
    $(mode === "training" ? "modeTraining" : "modeTest").classList.add("selected");
    $("selectedModeText").textContent = mode === "training" ? "Training" : "Test";
    updateStartSummary();
  }

  function scopeLabel() {
    if (state.scope === "all") return "All lectures";
    if (state.scope === "random25") return "Quick 25 (random)";
    if (state.scope === "random50") return "Quick 50 (random)";
    if (state.scope === "lecs") {
      const nums = [...state.selectedLecs].sort((a, b) => a - b);
      if (nums.length === 1) return `Lecture ${nums[0]} · ${LECTURES[nums[0]].title}`;
      if (nums.length <= 4) return `Lectures ${nums.join(", ")}`;
      return `${nums.length} lectures selected`;
    }
    return "";
  }

  function scopedCount() {
    return buildDeckSource().length;
  }

  function updateStartSummary() {
    const modeTxt = state.mode === "training" ? "Training mode" : "Test mode";
    $("startSummary").textContent = `${scopeLabel()} · ${modeTxt} · ${scopedCount()} questions`;
  }

  // ---------- deck building ----------
  function buildDeckSource() {
    let pool;
    if (state.scope === "lecs") {
      pool = QUESTIONS.filter((q) => state.selectedLecs.has(q.lec));
    } else if (state.scope === "random25") {
      pool = sample(QUESTIONS, 25);
    } else if (state.scope === "random50") {
      pool = sample(QUESTIONS, 50);
    } else {
      pool = QUESTIONS.slice();
    }
    return pool;
  }

  function sample(arr, n) {
    return shuffle(arr.slice()).slice(0, Math.min(n, arr.length));
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Returns a deck-ready copy of a question, with options possibly shuffled.
  function prepareQuestion(q) {
    const copy = {
      id: q.id, lec: q.lec, clo: q.clo, q: q.q,
      options: q.options.slice(), answer: q.answer, explanation: q.explanation
    };
    if (state.shuffleOptions) {
      const order = shuffle(q.options.map((_, i) => i));
      copy.options = order.map((i) => q.options[i]);
      copy.answer = order.indexOf(q.answer);
    }
    return copy;
  }

  function startSession(customPool) {
    let pool = customPool || buildDeckSource();
    if (!customPool && state.shuffleQuestions) pool = shuffle(pool.slice());
    state.deck = pool.map(prepareQuestion);
    state.answers = new Array(state.deck.length).fill(null);
    state.index = 0;
    if (state.deck.length === 0) return;
    $("quizModeBadge").textContent = state.mode === "training" ? "Training" : "Test";
    buildDots();
    renderQuestion();
    show("quiz");
  }

  // ---------- QUIZ rendering ----------
  function renderQuestion() {
    const q = state.deck[state.index];
    const chosen = state.answers[state.index];

    $("qNumber").textContent = "Q" + q.id;
    $("qText").textContent = q.q;
    $("quizLecBadge").textContent = "Lec " + q.lec;
    $("quizCloBadge").textContent = "CLO " + q.clo;

    // progress
    const pct = ((state.index + 1) / state.deck.length) * 100;
    $("progressFill").style.width = pct + "%";
    $("progressText").textContent = `Question ${state.index + 1} of ${state.deck.length}`;
    $("quizScore").textContent = "Score: " + currentScore();

    // options
    const list = $("optionsList");
    list.innerHTML = "";
    q.options.forEach((opt, i) => {
      const o = el("button", "option");
      o.dataset.i = i;
      o.innerHTML = `<span class="opt-letter">${LETTERS[i]}</span><span class="opt-body">${opt}</span>`;
      const revealed = chosen !== null && state.mode === "training";
      if (chosen === i) o.classList.add("selected");
      if (revealed) {
        o.classList.add("disabled");
        if (i === q.answer) o.classList.add("correct");
        if (i === chosen && chosen !== q.answer) o.classList.add("wrong");
        if (i === q.answer) o.insertAdjacentHTML("beforeend", `<span class="opt-mark">✓</span>`);
        else if (i === chosen) o.insertAdjacentHTML("beforeend", `<span class="opt-mark">✕</span>`);
      } else if (state.mode === "test" && chosen === i) {
        // test mode: just show selection, no reveal
      }
      o.addEventListener("click", () => choose(i));
      list.appendChild(o);
    });

    // feedback (training only, after answering)
    const fb = $("feedback");
    if (state.mode === "training" && chosen !== null) {
      const correct = chosen === q.answer;
      fb.hidden = false;
      fb.className = "feedback " + (correct ? "ok" : "no");
      $("feedbackHead").innerHTML = correct
        ? `✓ Correct!`
        : `✕ Not quite — the answer is ${LETTERS[q.answer]}`;
      $("feedbackBody").innerHTML =
        `<span class="expl-label">Explanation</span>${q.explanation}`;
    } else {
      fb.hidden = true;
    }

    // nav buttons
    $("prevBtn").style.visibility = state.index === 0 ? "hidden" : "visible";
    const isLast = state.index === state.deck.length - 1;
    $("nextBtn").textContent = isLast ? "Finish ✓" : "Next →";

    updateDots();
  }

  function choose(i) {
    const q = state.deck[state.index];
    if (state.mode === "training" && state.answers[state.index] !== null) return; // lock after answer
    state.answers[state.index] = i;
    if (state.mode === "training") {
      renderQuestion(); // reveal feedback
    } else {
      // test mode: update selection visual only
      document.querySelectorAll("#optionsList .option").forEach((o) => o.classList.remove("selected"));
      document.querySelector(`#optionsList .option[data-i="${i}"]`).classList.add("selected");
      updateDots();
    }
    $("quizScore").textContent = "Score: " + currentScore();
  }

  function currentScore() {
    let s = 0;
    state.deck.forEach((q, idx) => { if (state.answers[idx] === q.answer) s++; });
    return s;
  }

  // ---------- dots ----------
  function buildDots() {
    const dots = $("dots");
    dots.innerHTML = "";
    // cap dots for very large decks to keep it tidy
    if (state.deck.length > 60) { dots.style.display = "none"; return; }
    dots.style.display = "flex";
    state.deck.forEach((_, i) => {
      const d = el("span", "dot");
      d.addEventListener("click", () => { state.index = i; renderQuestion(); });
      dots.appendChild(d);
    });
  }
  function updateDots() {
    const dots = $("dots").children;
    if (!dots.length) return;
    state.deck.forEach((q, i) => {
      const d = dots[i];
      if (!d) return;
      d.className = "dot";
      const a = state.answers[i];
      if (a !== null) {
        if (state.mode === "training") d.classList.add(a === q.answer ? "correct" : "wrong");
        else d.classList.add("answered");
      }
      if (i === state.index) d.classList.add("current");
    });
  }

  // ---------- RESULTS ----------
  function finish() {
    const total = state.deck.length;
    const score = currentScore();
    const pct = total ? Math.round((score / total) * 100) : 0;
    const answered = state.answers.filter((a) => a !== null).length;

    // ring
    $("scorePct").textContent = pct + "%";
    $("scoreFrac").textContent = `${score} / ${total}`;
    ensureGradient();
    const circumference = 2 * Math.PI * 52;
    $("ringFg").style.strokeDasharray = circumference;
    requestAnimationFrame(() => {
      $("ringFg").style.strokeDashoffset = circumference * (1 - pct / 100);
    });

    // title
    let title, sub;
    if (pct >= 90) { title = "Outstanding! 🏆"; sub = "You've basically mastered this material."; }
    else if (pct >= 75) { title = "Great job! 🎯"; sub = "Solid understanding — review the misses and you're set."; }
    else if (pct >= 50) { title = "Good start 💪"; sub = "You're getting there. Focus on the weaker lectures below."; }
    else { title = "Keep practising 📚"; sub = "Switch to Training mode to learn the explanations, then retry."; }
    $("resultsTitle").textContent = title;
    $("resultsSub").textContent = sub;

    // stat tiles
    const wrong = answered - score;
    const skipped = total - answered;
    $("resultsStats").innerHTML = `
      <div class="stat-tile good"><div class="stat-val">${score}</div><div class="stat-lbl">Correct</div></div>
      <div class="stat-tile bad"><div class="stat-val">${wrong}</div><div class="stat-lbl">Incorrect</div></div>
      <div class="stat-tile"><div class="stat-val">${skipped}</div><div class="stat-lbl">Skipped</div></div>
      <div class="stat-tile"><div class="stat-val">${pct}%</div><div class="stat-lbl">Accuracy</div></div>`;

    // lecture breakdown
    const byLec = {};
    state.deck.forEach((q, idx) => {
      if (!byLec[q.lec]) byLec[q.lec] = { correct: 0, total: 0 };
      byLec[q.lec].total++;
      if (state.answers[idx] === q.answer) byLec[q.lec].correct++;
    });
    const bd = $("lecBreakdown");
    bd.innerHTML = "";
    Object.keys(byLec).sort((a, b) => a - b).forEach((lec) => {
      const r = byLec[lec];
      const p = Math.round((r.correct / r.total) * 100);
      const color = p >= 75 ? "var(--correct)" : p >= 50 ? "var(--primary)" : "var(--wrong)";
      const row = el("div", "lec-row");
      row.innerHTML = `
        <div class="lec-row-top">
          <span class="lec-row-title">${LECTURES[lec].icon} Lec ${lec} · ${LECTURES[lec].title}</span>
          <span class="lec-row-score">${r.correct}/${r.total} · ${p}%</span>
        </div>
        <div class="lec-row-bar"><div class="lec-row-fill" style="width:0%;background:${color}"></div></div>`;
      bd.appendChild(row);
      requestAnimationFrame(() => { row.querySelector(".lec-row-fill").style.width = p + "%"; });
    });

    $("reviewList").hidden = true;
    $("reviewBtn").textContent = "Review answers";
    show("results");
  }

  function ensureGradient() {
    const svg = document.querySelector("#scoreRing svg");
    if (svg.querySelector("#g")) return;
    const ns = "http://www.w3.org/2000/svg";
    const defs = document.createElementNS(ns, "defs");
    const lg = document.createElementNS(ns, "linearGradient");
    lg.id = "g"; lg.setAttribute("x1", "0"); lg.setAttribute("y1", "0"); lg.setAttribute("x2", "1"); lg.setAttribute("y2", "1");
    const s1 = document.createElementNS(ns, "stop"); s1.setAttribute("offset", "0%"); s1.setAttribute("stop-color", "#6d8bff");
    const s2 = document.createElementNS(ns, "stop"); s2.setAttribute("offset", "100%"); s2.setAttribute("stop-color", "#38e1b0");
    lg.appendChild(s1); lg.appendChild(s2); defs.appendChild(lg); svg.insertBefore(defs, svg.firstChild);
  }

  // ---------- review ----------
  function renderReview() {
    const list = $("reviewList");
    if (!list.hidden) { // toggle off
      list.hidden = true;
      $("reviewBtn").textContent = "Review answers";
      return;
    }
    list.innerHTML = "";
    state.deck.forEach((q, idx) => {
      const chosen = state.answers[idx];
      const correct = chosen === q.answer;
      const item = el("div", "review-item " + (correct ? "ok" : "no"));
      let optsHtml = "";
      q.options.forEach((opt, i) => {
        let cls = "review-opt";
        if (i === q.answer) cls += " correct";
        else if (i === chosen) cls += " chosen-wrong";
        const tag = i === q.answer ? " ✓" : (i === chosen ? " ✕ (your answer)" : "");
        optsHtml += `<div class="${cls}">${LETTERS[i]}. ${opt}${tag}</div>`;
      });
      const status = chosen === null ? "⚠ Skipped" : (correct ? "✓ Correct" : "✕ Incorrect");
      item.innerHTML = `
        <div class="review-q"><span class="rq-num">Q${q.id} · Lec ${q.lec}</span>${q.q}</div>
        ${optsHtml}
        <div class="review-expl"><b>${status} — Explanation:</b> ${q.explanation}</div>`;
      list.appendChild(item);
    });
    list.hidden = false;
    $("reviewBtn").textContent = "Hide review";
    list.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function retryWrong() {
    const wrongQ = [];
    state.deck.forEach((q, idx) => {
      if (state.answers[idx] !== q.answer) {
        // find original (un-shuffled) question to re-prepare cleanly
        wrongQ.push(QUESTIONS.find((o) => o.id === q.id));
      }
    });
    if (wrongQ.length === 0) {
      alert("Nothing to retry — you got everything right! 🎉");
      return;
    }
    const pool = state.shuffleQuestions ? shuffle(wrongQ.slice()) : wrongQ;
    startSession(pool);
  }

  // ---------- wire up events ----------
  function init() {
    initTheme();
    renderLectures();
    selectMode("training");
    selectChipScope("all");

    // mode cards
    document.querySelectorAll(".mode-card").forEach((c) =>
      c.addEventListener("click", () => selectMode(c.dataset.mode)));

    // scope chips (single-select)
    document.querySelectorAll(".chip").forEach((c) =>
      c.addEventListener("click", () => selectChipScope(c.dataset.scope, c)));

    // options toggles
    $("shuffleQuestions").addEventListener("change", (e) => { state.shuffleQuestions = e.target.checked; });
    $("shuffleOptions").addEventListener("change", (e) => { state.shuffleOptions = e.target.checked; });

    // start
    $("startBtn").addEventListener("click", () => startSession());

    // quiz nav
    $("nextBtn").addEventListener("click", () => {
      if (state.index === state.deck.length - 1) finish();
      else { state.index++; renderQuestion(); }
    });
    $("prevBtn").addEventListener("click", () => {
      if (state.index > 0) { state.index--; renderQuestion(); }
    });
    $("quitBtn").addEventListener("click", () => {
      if (confirm("Quit this session? Your progress will be lost.")) show("home");
    });

    // results actions
    $("reviewBtn").addEventListener("click", renderReview);
    $("retryWrongBtn").addEventListener("click", retryWrong);
    $("againBtn").addEventListener("click", () => show("home"));

    // home link
    const goHome = () => { if (confirm("Return to home? Any active session will be lost.")) show("home"); };
    $("homeLink").addEventListener("click", () => {
      if ($("home").classList.contains("active")) return;
      goHome();
    });

    // keyboard shortcuts in quiz
    document.addEventListener("keydown", (e) => {
      if (!$("quiz").classList.contains("active")) return;
      if (["1", "2", "3", "4"].includes(e.key)) {
        const i = Number(e.key) - 1;
        if (i < state.deck[state.index].options.length) choose(i);
      } else if (["a", "b", "c", "d"].includes(e.key.toLowerCase())) {
        choose(LETTERS.indexOf(e.key.toUpperCase()));
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        if (state.index === state.deck.length - 1) finish();
        else { state.index++; renderQuestion(); }
      } else if (e.key === "ArrowLeft") {
        if (state.index > 0) { state.index--; renderQuestion(); }
      }
    });

    updateStartSummary();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

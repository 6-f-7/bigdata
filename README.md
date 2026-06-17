# DS4511 — Big Data Test Bank 🧠

An interactive, single-page web app for studying the **DS4511 Big Data** exam question bank.
All **315 questions (Q87–Q401)** from the exam paper, split by lecture, with two study modes,
scoring, and an explanation for every question.

> No build step, no server, no dependencies. Just open `index.html`.

---

## ✨ Features

- **315 questions across 11 lectures** (Lectures 2–12), each tagged with its CLO.
- **Two modes**
  - 🎓 **Training mode** — after each question you instantly see the correct answer highlighted **and a written explanation** rooted in the course material.
  - 📝 **Test mode** — answer first, get **scored at the end** with a full breakdown and review.
- **Pick your scope** — study one lecture, the whole bank, or a random *Quick 25 / Quick 50*.
- **Results dashboard** — animated score ring, correct / incorrect / skipped tiles, and a **per-lecture accuracy breakdown** so you know what to revise.
- **Review answers** — see every question with the right answer, your answer, and the explanation.
- **Retry wrong only** — re-test just the questions you missed.
- **Options**: shuffle questions and/or shuffle answer choices.
- **Polished UI** — responsive, dark/light theme, keyboard shortcuts, progress bar.

## ⌨️ Keyboard shortcuts (during a quiz)

| Key | Action |
|-----|--------|
| `1`–`4` or `A`–`D` | Select an answer |
| `→` / `Enter` | Next question (or finish) |
| `←` | Previous question |

## 🚀 Running it

Just open the file in a browser:

```bash
# from the repo root
open index.html        # macOS
xdg-open index.html    # Linux
```

…or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Deploy on GitHub Pages
Push to GitHub, then enable **Settings → Pages → Deploy from branch** and pick this branch with the root (`/`) folder. The site is fully static.

## 🗂️ Lectures covered

| Lec | Topic | Questions |
|----:|-------|----------:|
| 2 | Big Data Ecosystem & Hadoop | 12 |
| 3 | Data Ingestion | 15 |
| 4 | Data Mining Fundamentals | 16 |
| 5 | Big Data Frameworks | 9 |
| 6 | Analytics & Visualization | 12 |
| 7 | Association Rule Mining | 32 |
| 8 | Text Mining | 32 |
| 9 | Graph Mining | 31 |
| 10 | Data Streams | 32 |
| 11 | Responsible Data Mining (Ethics & Privacy) | 62 |
| 12 | Advanced Mining (IoT, Edge & AI) | 62 |
| | **Total** | **315** |

> Lectures 11 and 12 contain repeated question sets in the original exam paper; they are
> kept as-is so the bank faithfully matches the source.

## 📁 Project structure

```
.
├── index.html        # markup & screens (home / quiz / results)
├── css/
│   └── styles.css     # all styling + dark & light themes
└── js/
    ├── questions.js   # the 315-question database (text, options, answer, explanation)
    └── app.js         # quiz engine, scoring, review, navigation
```

## ✏️ Editing the questions

Each entry in `js/questions.js` looks like:

```js
{
  id: 87, lec: 2, clo: "1.1",
  q: "Which of the following best describes the role of the Big Data ecosystem?",
  options: ["…", "…", "…", "…"],   // A, B, C, D
  answer: 1,                         // 0-based index of the correct option
  explanation: "…"                   // shown in training mode & review
}
```

Add, edit, or correct questions there — the app picks up changes automatically on reload.

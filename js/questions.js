/*
 * DS4511 — Big Data Test Bank
 * Question database (Questions 87–401), split by lecture.
 *
 * Each question object:
 *   id          : original question number from the exam paper
 *   lec         : lecture number
 *   clo         : Course Learning Outcome tag
 *   q           : question text
 *   options     : array of 4 answer strings (A, B, C, D order)
 *   answer      : 0-based index of the correct option
 *   explanation : why the correct answer is right (course context)
 */

const LECTURES = {
  2:  { title: "Big Data Ecosystem & Hadoop", icon: "🏗️" },
  3:  { title: "Data Ingestion", icon: "📥" },
  4:  { title: "Data Mining Fundamentals", icon: "⛏️" },
  5:  { title: "Big Data Frameworks", icon: "⚙️" },
  6:  { title: "Analytics & Visualization", icon: "📊" },
  7:  { title: "Association Rule Mining", icon: "🛒" },
  8:  { title: "Text Mining", icon: "📝" },
  9:  { title: "Graph Mining", icon: "🕸️" },
  10: { title: "Data Streams", icon: "🌊" },
  11: { title: "Responsible Data Mining", icon: "⚖️" },
  12: { title: "Advanced Mining (IoT, Edge & AI)", icon: "🤖" }
};

const QUESTIONS = [
  /* ===================== LEC 2 — Big Data Ecosystem & Hadoop ===================== */
  {
    id: 87, lec: 2, clo: "1.1",
    q: "Which of the following best describes the role of the Big Data ecosystem?",
    options: [
      "A single tool that handles all big data tasks",
      "A collection of technologies, tools, infrastructure, and processes to handle big data",
      "A database system optimized for storing small datasets",
      "A visualization tool for reporting big data insights"
    ],
    answer: 1,
    explanation: "The Big Data ecosystem is not one product but an integrated set of technologies, tools, infrastructure, and processes that together ingest, store, process, and analyse data at scale."
  },
  {
    id: 88, lec: 2, clo: "1.1",
    q: "What is the primary function of data ingestion in a Big Data ecosystem?",
    options: [
      "Storing large volumes of data across multiple servers",
      "Capturing and moving incoming data reliably into processing pipelines",
      "Visualizing data trends and KPIs in dashboards",
      "Building predictive models from datasets"
    ],
    answer: 1,
    explanation: "Ingestion is the entry point of the pipeline: it captures incoming data from sources and moves it reliably into storage/processing. Storage, visualization and modelling are separate later stages."
  },
  {
    id: 89, lec: 2, clo: "1.1",
    q: "Which component in Hadoop is responsible for storing actual data blocks in the HDFS architecture?",
    options: ["NameNode", "Secondary NameNode", "DataNode", "ResourceManager"],
    answer: 2,
    explanation: "DataNodes store the actual data blocks. The NameNode only holds metadata (the file-to-block map), and ResourceManager belongs to YARN, not storage."
  },
  {
    id: 90, lec: 2, clo: "1.1",
    q: "What is the function of YARN in the Hadoop ecosystem?",
    options: [
      "Distributed storage of data blocks",
      "Resource management and job scheduling in a cluster",
      "Data visualization and reporting",
      "Building machine learning models"
    ],
    answer: 1,
    explanation: "YARN (Yet Another Resource Negotiator) is Hadoop's cluster resource manager and job scheduler. Storage is handled by HDFS, not YARN."
  },
  {
    id: 91, lec: 2, clo: "2.1",
    q: "How does YARN improve scalability compared to the Hadoop 1.0 architecture?",
    options: [
      "By combining resource management and job scheduling in a single JobTracker",
      "By splitting JobTracker responsibilities into ResourceManager and ApplicationMaster components",
      "By removing resource management responsibilities entirely",
      "By using a centralized storage system for all jobs"
    ],
    answer: 1,
    explanation: "Hadoop 1.0's single JobTracker was a bottleneck. YARN splits its duties into a global ResourceManager and a per-application ApplicationMaster, which scales to far more jobs and nodes."
  },
  {
    id: 92, lec: 2, clo: "2.1",
    q: "In the Hadoop Distributed File System, what is the default replication factor and its purpose?",
    options: [
      "1, to reduce storage costs",
      "3, to ensure fault tolerance and data availability",
      "5, to improve read performance",
      "10, to support streaming analytics"
    ],
    answer: 1,
    explanation: "HDFS keeps 3 copies of each block by default so that data survives node/disk failures and remains available — the core mechanism behind HDFS fault tolerance."
  },
  {
    id: 93, lec: 2, clo: "2.1",
    q: "Which of the following best describes the role of the ApplicationMaster in YARN?",
    options: [
      "Manages the cluster's hardware resources globally",
      "Negotiates resource requests and monitors task progress for an individual application",
      "Stores metadata of files and directories in HDFS",
      "Launches containers and monitors node health"
    ],
    answer: 1,
    explanation: "Each application gets its own ApplicationMaster that requests resources from the ResourceManager and tracks that app's tasks. Global resource management is the ResourceManager's job; node health is the NodeManager's."
  },
  {
    id: 94, lec: 2, clo: "2.1",
    q: "What is the primary difference between distributed storage (e.g., HDFS) and processed storage (e.g., HBase) in Big Data architectures?",
    options: [
      "Distributed storage is optimized for small structured data; processed storage is for raw data",
      "Distributed storage holds raw or landing data; processed storage holds cleaned and serving-ready data",
      "Processed storage stores unstructured data only; distributed storage stores structured data",
      "Both are identical and interchangeable"
    ],
    answer: 1,
    explanation: "Distributed storage (HDFS) is the landing zone for raw data, while processed storage (HBase) holds cleaned, query-ready data for serving applications."
  },
  {
    id: 95, lec: 2, clo: "3.1",
    q: "When designing a big data solution aligned with organizational objectives, which role does YARN primarily fulfill to enhance system efficiency?",
    options: [
      "Providing distributed storage for raw data ingestion",
      "Managing and allocating cluster resources to improve utilization and scalability",
      "Visualizing real-time data through dashboards",
      "Orchestrating workflow dependencies and scheduling"
    ],
    answer: 1,
    explanation: "YARN's value to efficiency is in allocating cluster resources across applications so utilization and scalability improve. Storage is HDFS's role."
  },
  {
    id: 96, lec: 2, clo: "3.2",
    q: "What ethical consideration is most critical when implementing Hadoop clusters in multi-user environments?",
    options: [
      "Maximizing cluster utilization without regard for user permissions",
      "Implementing strict authentication and authorization controls to protect sensitive data",
      "Allowing unrestricted data access for faster analytics",
      "Ignoring audit logs to preserve user privacy"
    ],
    answer: 1,
    explanation: "In shared clusters, strong authentication and authorization protect sensitive data and enforce who may access what — the foundation of responsible multi-tenant operation."
  },
  {
    id: 97, lec: 2, clo: "3.1",
    q: "In a scenario where a company needs to process streaming IoT data with minimal latency, which Hadoop ecosystem component should be prioritized to manage cluster resources efficiently?",
    options: [
      "HDFS for distributed storage",
      "YARN for dynamic resource allocation and multi-tenancy",
      "Hive for SQL-based querying",
      "NameNode for metadata management"
    ],
    answer: 1,
    explanation: "Low-latency, multi-tenant streaming workloads need dynamic resource allocation — exactly what YARN provides by scheduling containers on demand."
  },
  {
    id: 98, lec: 2, clo: "3.1",
    q: "An organization wants to improve fault tolerance in their Hadoop cluster. Which architectural feature of HDFS should be configured and monitored to achieve this?",
    options: [
      "Increasing the default block size to 512MB",
      "Adjusting the data replication factor across DataNodes",
      "Disabling the Secondary NameNode checkpointing",
      "Reducing the number of DataNodes to minimize failure points"
    ],
    answer: 1,
    explanation: "Replication is HDFS's fault-tolerance mechanism: tuning and monitoring the replication factor across DataNodes ensures copies survive failures. Block size affects performance, not resilience."
  },

  /* ===================== LEC 3 — Data Ingestion ===================== */
  {
    id: 99, lec: 3, clo: "1.1",
    q: "Which of the following best describes the role of data ingestion in a Big Data ecosystem?",
    options: [
      "It transforms raw data into refined data before storage",
      "It collects and loads data from diverse sources into storage for processing",
      "It combines multiple datasets into a unified format",
      "It visualizes data through dashboards"
    ],
    answer: 1,
    explanation: "Ingestion collects data from many sources and loads it into storage for later processing. Transformation is ETL's job, not ingestion's."
  },
  {
    id: 100, lec: 3, clo: "1.1",
    q: "What is the primary purpose of data ingestion in Big Data architectures?",
    options: [
      "To perform data transformation before storage",
      "To move data into scalable storage or streaming platforms",
      "To unify data from multiple sources",
      "To analyze data using machine learning"
    ],
    answer: 1,
    explanation: "The core purpose of ingestion is moving data into scalable storage or streaming platforms so downstream stages can use it."
  },
  {
    id: 101, lec: 3, clo: "1.1",
    q: "Which ingestion technique is best suited for processing live sensor data that continuously arrives without a known end?",
    options: ["Batch ingestion", "Streaming ingestion", "Micro-batch ingestion", "Manual ingestion"],
    answer: 1,
    explanation: "Continuous, unbounded data with no known end is the definition of a stream, so streaming ingestion is the right fit."
  },
  {
    id: 102, lec: 3, clo: "1.1",
    q: "When dealing with a finite dataset such as a CSV file of sales, which data ingestion type is appropriate?",
    options: [
      "Unbounded streaming ingestion",
      "Micro-batch ingestion",
      "Bounded batch ingestion",
      "Real-time streaming ingestion"
    ],
    answer: 2,
    explanation: "A finite file is a bounded dataset, which is processed with bounded batch ingestion. Streaming is for unbounded data."
  },
  {
    id: 103, lec: 3, clo: "1.1",
    q: "Which of the following tools is specifically designed for bulk transfer of structured data from relational databases into Hadoop?",
    options: ["Apache Flume", "Apache Kafka", "Apache Sqoop", "MongoDB"],
    answer: 2,
    explanation: "Sqoop ('SQL-to-Hadoop') is purpose-built for bulk import/export of structured data between relational databases and Hadoop. Flume targets logs; Kafka targets event streams."
  },
  {
    id: 104, lec: 3, clo: "1.1",
    q: "How does asynchronous ingestion differ from synchronous ingestion in Big Data systems?",
    options: [
      "Asynchronous ingestion waits for confirmation before proceeding, synchronous does not",
      "Synchronous ingestion is decoupled via queues, asynchronous is tightly coupled",
      "Asynchronous ingestion does not wait for confirmation and is more scalable",
      "Synchronous ingestion is always faster than asynchronous"
    ],
    answer: 2,
    explanation: "Asynchronous ingestion decouples producer and consumer — the producer does not block waiting for confirmation — which improves scalability and throughput."
  },
  {
    id: 105, lec: 3, clo: "1.1",
    q: "What is the main difference between ingestion and ETL in Big Data workflows?",
    options: [
      "Ingestion involves unifying data, ETL moves data into platforms",
      "ETL is about data availability, ingestion refines data",
      "Ingestion is about moving data into a platform, ETL transforms data before loading",
      "ETL is the process of collecting data from IoT devices"
    ],
    answer: 2,
    explanation: "Ingestion is about getting data into the platform; ETL adds transformation (cleaning/reshaping) before loading. They are complementary, not the same."
  },
  {
    id: 106, lec: 3, clo: "1.1",
    q: "Which ingestion frequency type offers a balance between speed and throughput by processing data in small batches every few seconds or minutes?",
    options: ["Batch ingestion", "Streaming ingestion", "Micro-batch ingestion", "Real-time ingestion"],
    answer: 2,
    explanation: "Micro-batch sits between batch and pure streaming: it processes small batches on short intervals, balancing latency and throughput."
  },
  {
    id: 107, lec: 3, clo: "1.1",
    q: "Which characteristic is NOT typically a consideration when designing a data ingestion architecture?",
    options: [
      "Latency requirements",
      "Throughput capacity",
      "Color of data visualization",
      "Reliability and fault tolerance"
    ],
    answer: 2,
    explanation: "Latency, throughput and reliability are core ingestion design concerns. Visualization colour is a presentation-layer choice, irrelevant to ingestion design."
  },
  {
    id: 108, lec: 3, clo: "2.1",
    q: "In the context of Apache Kafka, what delivery guarantee ensures that each message is processed exactly once, assuming correct configuration?",
    options: ["At-most-once", "At-least-once", "Exactly-once", "No delivery guarantee"],
    answer: 2,
    explanation: "Exactly-once semantics guarantee each message is processed a single time with no loss or duplication — Kafka supports this with correct configuration (idempotent producers + transactions)."
  },
  {
    id: 109, lec: 3, clo: "2.1",
    q: "When using Apache Flume for log ingestion into Hadoop, which statement about delivery guarantees is accurate?",
    options: [
      "Flume guarantees exactly-once delivery with no duplicates",
      "Flume provides at-least-once delivery but may produce duplicates",
      "Flume does not guarantee any delivery",
      "Flume only supports at-most-once delivery"
    ],
    answer: 1,
    explanation: "Flume provides at-least-once delivery — data is not lost, but the same event can be delivered more than once, so duplicates are possible."
  },
  {
    id: 110, lec: 3, clo: "2.1",
    q: "Which ingestion tool is best suited for unbounded, continuous, high-throughput data streams requiring low latency and horizontal scalability?",
    options: ["Apache Sqoop", "Apache Flume", "Apache Kafka", "MongoDB"],
    answer: 2,
    explanation: "Kafka is a distributed, partitioned log built for high-throughput, low-latency, horizontally scalable event streaming — the standard choice for unbounded streams."
  },
  {
    id: 111, lec: 3, clo: "2.1",
    q: "Consider a scenario where a system must ingest large structured datasets from a legacy relational database into Hadoop on a scheduled basis. Which tool and ingestion type combination is most appropriate?",
    options: [
      "Apache Kafka with streaming ingestion",
      "Apache Sqoop with batch ingestion",
      "Apache Flume with streaming ingestion",
      "MongoDB with real-time ingestion"
    ],
    answer: 1,
    explanation: "Scheduled bulk transfer of structured RDBMS data is exactly Sqoop's purpose, run as a batch job."
  },
  {
    id: 112, lec: 3, clo: "2.2",
    q: "When handling large payloads in a Big Data ingestion pipeline, which approach improves efficiency and system performance?",
    options: [
      "Using uncompressed JSON format only",
      "Chunking and compression of payloads",
      "Sending raw binary data without schema",
      "Ignoring serialization formats"
    ],
    answer: 1,
    explanation: "Breaking large payloads into chunks and compressing them reduces network/storage load and improves throughput, making ingestion more efficient."
  },
  {
    id: 113, lec: 3, clo: "3.2",
    q: "Which of the following is a best practice to uphold ethical standards and privacy during the data ingestion process in Big Data systems?",
    options: [
      "Ingest all available data without validation to maximize data volume",
      "Implement input validation and use dead-letter queues for error handling",
      "Store raw data indefinitely without any access controls",
      "Ignore data profiling and quality metrics"
    ],
    answer: 1,
    explanation: "Validating inputs and routing bad records to a dead-letter queue keeps data quality high and handles errors responsibly, supporting privacy and governance from the entry point."
  },

  /* ===================== LEC 4 — Data Mining Fundamentals ===================== */
  {
    id: 114, lec: 4, clo: "1.1",
    q: "What is the primary difference between traditional data mining and big data mining in terms of data characteristics?",
    options: [
      "Big data mining handles higher data volume, velocity, and variety compared to traditional data mining",
      "Traditional data mining deals only with unstructured data, whereas big data mining handles structured data",
      "Big data mining requires only a single pass over the data while traditional mining requires multiple passes",
      "Traditional data mining uses distributed systems while big data mining relies on centralized databases"
    ],
    answer: 0,
    explanation: "Big data mining is defined by the 3 Vs — much higher volume, velocity, and variety — which is why it needs distributed, scalable methods that traditional mining lacks."
  },
  {
    id: 115, lec: 4, clo: "1.1",
    q: "Which of the following best describes the main goal of data mining?",
    options: [
      "To discover useful patterns and models that support decision making and automation",
      "To store large datasets efficiently in distributed storage systems",
      "To visualize raw data through advanced graphical tools",
      "To manually inspect and clean data before analysis"
    ],
    answer: 0,
    explanation: "Data mining's goal is to discover useful, actionable patterns and models from data to support decisions and automation — not storage, visualization, or cleaning."
  },
  {
    id: 116, lec: 4, clo: "1.1",
    q: "Which task is NOT typically considered a core data mining task?",
    options: ["Clustering", "Classification", "Transaction processing", "Anomaly detection"],
    answer: 2,
    explanation: "Clustering, classification and anomaly detection are core mining tasks. Transaction processing (OLTP) is an operational database function, not data mining."
  },
  {
    id: 117, lec: 4, clo: "1.1",
    q: "What is a major limitation of traditional data mining approaches when applied to big data?",
    options: [
      "They assume data fits in one location and can be scanned multiple times",
      "They use distributed processing frameworks like MapReduce",
      "They support streaming data and real-time processing",
      "They focus on feature engineering for semi-structured data"
    ],
    answer: 0,
    explanation: "Traditional algorithms assume the data fits in memory/one machine and can be re-scanned freely — assumptions that break at big-data scale."
  },
  {
    id: 118, lec: 4, clo: "1.1",
    q: "In the context of big data mining, why is exploratory data analysis (EDA) more critical than in traditional settings?",
    options: [
      "Because errors and biases amplify rapidly at large scale",
      "Because big data mining removes the need for data cleaning",
      "Because EDA replaces the need for predictive modeling",
      "Because visualization tools are more effective on small datasets"
    ],
    answer: 0,
    explanation: "At scale, small errors or biases propagate across enormous datasets, so early EDA to catch them is especially important."
  },
  {
    id: 119, lec: 4, clo: "1.2",
    q: "Which of the following techniques is commonly used to ensure scalable exploratory data analysis on very large datasets?",
    options: [
      "Stratified sampling to preserve class proportions",
      "Full dataset visualization with scatterplots",
      "Manual feature engineering on raw data",
      "Repeated full-table scans for accurate statistics"
    ],
    answer: 0,
    explanation: "Stratified sampling gives a representative subset (preserving class proportions) so EDA scales without scanning the entire dataset."
  },
  {
    id: 120, lec: 4, clo: "1.2",
    q: "In streaming big data scenarios, which EDA method helps monitor evolving data distributions effectively?",
    options: [
      "Sliding window incremental statistics",
      "Single-pass random sampling without replacement",
      "Static histogram calculation on historical data",
      "Manual inspection of raw event logs"
    ],
    answer: 0,
    explanation: "Sliding-window incremental statistics continuously update over recent data, letting you track how distributions change in a live stream."
  },
  {
    id: 121, lec: 4, clo: "2.1",
    q: "When using big data frameworks such as Spark for data mining, what is the primary advantage of distributed aggregation operations during EDA?",
    options: [
      "They parallelize computations to handle large-scale data efficiently",
      "They eliminate the need for data sampling",
      "They guarantee exact results without approximation",
      "They require single-node memory capacity only"
    ],
    answer: 0,
    explanation: "Distributed aggregation splits work across nodes and computes in parallel, which is what makes large-scale EDA feasible in Spark."
  },
  {
    id: 122, lec: 4, clo: "2.1",
    q: "Which of the following best describes reservoir sampling used in big data mining?",
    options: [
      "A technique to maintain a representative sample from a stream without knowing total size in advance",
      "A method to store all data points in memory for full analysis",
      "A clustering algorithm that groups data based on similarity",
      "A sorting algorithm for distributed files"
    ],
    answer: 0,
    explanation: "Reservoir sampling keeps a fixed-size, uniformly representative sample from a stream of unknown/unbounded length — ideal when you can't see all data first."
  },
  {
    id: 123, lec: 4, clo: "2.2",
    q: "In a clickstream big data mining case, which big data challenge primarily motivates the use of windowing and event-time logic?",
    options: [
      "Late or out-of-order event arrivals",
      "Low data volume",
      "Static user sessions with no updates",
      "Centralized data storage"
    ],
    answer: 0,
    explanation: "Clickstream events often arrive late or out of order; windowing with event-time logic groups them correctly despite arrival-time disorder."
  },
  {
    id: 124, lec: 4, clo: "3.1",
    q: "What is a crucial consideration when proposing innovative big data mining solutions aligned with organizational objectives?",
    options: [
      "Balancing scalability, accuracy, and business relevance",
      "Maximizing the use of the latest hardware regardless of cost",
      "Focusing only on predictive accuracy without interpretability",
      "Avoiding any approximation regardless of runtime"
    ],
    answer: 0,
    explanation: "A good solution balances technical scalability, accuracy, and real business value — optimizing any single dimension in isolation tends to fail in practice."
  },
  {
    id: 125, lec: 4, clo: "3.1",
    q: "When designing a distributed big data mining system, which architectural feature best supports fault tolerance?",
    options: [
      "Redundant data storage and task re-execution mechanisms",
      "Single centralized database without backups",
      "Manual checkpointing without automation",
      "Batch processing with no recovery options"
    ],
    answer: 0,
    explanation: "Replicating data and automatically re-executing failed tasks lets the system recover from node failures — the essence of distributed fault tolerance."
  },
  {
    id: 126, lec: 4, clo: "3.2",
    q: "Which ethical concern is most relevant when mining large-scale user clickstream data?",
    options: [
      "Protecting user privacy and handling personally identifiable information responsibly",
      "Maximizing data retention regardless of regulations",
      "Avoiding anonymization to preserve data utility",
      "Publishing all raw data publicly"
    ],
    answer: 0,
    explanation: "Clickstream data is personal behaviour, so protecting privacy and handling PII responsibly is the central ethical concern."
  },
  {
    id: 127, lec: 4, clo: "3.2",
    q: "In a big data mining pipeline, what is an essential practice to uphold privacy while enabling data analysis?",
    options: [
      "Applying data anonymization and access controls before analysis",
      "Sharing raw data with all stakeholders without restrictions",
      "Ignoring data provenance to speed up processing",
      "Collecting data without user consent for completeness"
    ],
    answer: 0,
    explanation: "Anonymizing data and restricting access lets analysts work while limiting exposure of individuals — a baseline privacy practice."
  },
  {
    id: 128, lec: 4, clo: "2.2",
    q: "When developing predictive models on large streaming datasets, which challenge must be addressed to maintain model accuracy over time?",
    options: [
      "Concept drift causing changes in data distribution",
      "Fixed data schema with no updates",
      "Static user behavior with no new patterns",
      "Unlimited memory for storing all past data"
    ],
    answer: 0,
    explanation: "In streams the underlying distribution shifts over time (concept drift), degrading models unless they are monitored and retrained."
  },
  {
    id: 129, lec: 4, clo: "2.1",
    q: "Which approach best addresses the computational challenges in training models on high-dimensional big data?",
    options: [
      "Using dimensionality reduction techniques combined with distributed processing",
      "Training models on raw full-dimensional data on a single node",
      "Ignoring feature selection to preserve all information",
      "Using sequential processing without parallelism"
    ],
    answer: 0,
    explanation: "Reducing dimensions (e.g., PCA/feature selection) plus distributing the computation tackles both the curse of dimensionality and the data volume."
  },

  /* ===================== LEC 5 — Big Data Frameworks ===================== */
  {
    id: 130, lec: 5, clo: "1.1",
    q: "Which of the following is NOT a key reason for the existence of big-data frameworks?",
    options: [
      "Handling storage at scale across multiple machines",
      "Ensuring fault tolerance in distributed systems",
      "Providing a centralized single-node data processing system",
      "Enabling parallel processing of large datasets"
    ],
    answer: 2,
    explanation: "Big-data frameworks exist precisely to move beyond single-node processing. Scale-out storage, fault tolerance, and parallelism are the real motivations."
  },
  {
    id: 131, lec: 5, clo: "1.1",
    q: "What is the primary function of Hadoop's HDFS component?",
    options: [
      "Managing cluster resources and scheduling tasks",
      "Providing a distributed storage layer by splitting files into blocks",
      "Executing batch processing jobs using map and reduce functions",
      "Running machine learning algorithms on big data"
    ],
    answer: 1,
    explanation: "HDFS is the storage layer: it splits files into blocks and distributes them across DataNodes. Scheduling is YARN; processing is MapReduce/Spark."
  },
  {
    id: 132, lec: 5, clo: "1.1",
    q: "Which characteristic of Apache Spark contributes most to its faster performance compared to Hadoop MapReduce?",
    options: [
      "Its use of large file blocks for storage",
      "Its Directed Acyclic Graph (DAG) execution engine and in-memory data processing",
      "Its reliance on YARN for resource management",
      "Its batch-only processing model"
    ],
    answer: 1,
    explanation: "Spark keeps intermediate data in memory and optimizes execution as a DAG, avoiding the disk writes between every stage that slow MapReduce down."
  },
  {
    id: 133, lec: 5, clo: "2.1",
    q: "In a big data scenario where data is continuously generated by IoT sensors, which framework and processing mode would best support low-latency real-time analytics?",
    options: [
      "Hadoop MapReduce with batch processing",
      "Spark Structured Streaming with continuous processing mode",
      "HDFS alone for distributed storage",
      "YARN resource manager for scheduling batch jobs"
    ],
    answer: 1,
    explanation: "Continuous IoT streams needing low latency call for a streaming engine — Spark Structured Streaming — not batch MapReduce or storage alone."
  },
  {
    id: 134, lec: 5, clo: "2.1",
    q: "When comparing batch versus real-time processing, which of the following statements about latency and data type is correct?",
    options: [
      "Batch processing handles unbounded continuous data with milliseconds latency",
      "Real-time processing handles bounded datasets with minutes to hours latency",
      "Batch processing processes bounded datasets with higher latency than real-time",
      "Real-time processing processes bounded datasets with higher latency than batch"
    ],
    answer: 2,
    explanation: "Batch works on bounded datasets and accepts higher latency; real-time/streaming handles unbounded data with low latency."
  },
  {
    id: 135, lec: 5, clo: "2.1",
    q: "Which component of Hadoop is responsible for managing cluster resources and scheduling tasks?",
    options: ["HDFS", "MapReduce", "YARN", "NameNode"],
    answer: 2,
    explanation: "YARN manages cluster resources and schedules tasks. HDFS stores data, MapReduce processes it, and the NameNode tracks HDFS metadata."
  },
  {
    id: 136, lec: 5, clo: "3.1",
    q: "Given an organization requiring both batch ETL and real-time fraud detection, which big data framework design best aligns with their objectives?",
    options: [
      "Deploying Hadoop MapReduce only, as it supports all workloads efficiently",
      "Using Spark as a unified engine for batch, streaming, SQL, and ML workloads",
      "Using HDFS alone for data storage without compute capabilities",
      "Relying solely on micro-batch processing with Hadoop YARN"
    ],
    answer: 1,
    explanation: "Spark unifies batch, streaming, SQL and ML in one engine, so a single platform can serve both the ETL and the real-time fraud needs."
  },
  {
    id: 137, lec: 5, clo: "3.1",
    q: "An enterprise wants to reduce latency for iterative machine learning workflows on big data. Which architectural feature should they prioritize in their framework choice?",
    options: [
      "A map-reduce model with disk-based shuffle between stages",
      "A system that supports in-memory data persistence and DAG execution",
      "A system designed primarily for large batch jobs without in-memory caching",
      "A distributed storage system without compute capability"
    ],
    answer: 1,
    explanation: "Iterative ML reuses data across many passes; in-memory persistence plus DAG execution (Spark) avoids re-reading from disk each iteration."
  },
  {
    id: 138, lec: 5, clo: "3.2",
    q: "When designing a big data solution that processes sensitive user data streams in real-time, which ethical consideration is most critical to uphold?",
    options: [
      "Maximizing data replication for fault tolerance at any cost",
      "Ensuring data locality to minimize data movement and improve efficiency",
      "Implementing privacy controls and data access restrictions throughout processing",
      "Preferring batch processing over streaming to reduce system complexity"
    ],
    answer: 2,
    explanation: "With sensitive data, privacy controls and access restrictions applied throughout the pipeline are the key ethical requirement — performance choices are secondary."
  },

  /* ===================== LEC 6 — Analytics & Visualization ===================== */
  {
    id: 139, lec: 6, clo: "1.1",
    q: "Which of the following best defines Big Data Analytics?",
    options: [
      "The process of simply storing large volumes of data.",
      "Transforming data through mining and analysis to support decision-making and generate insights.",
      "Using data mining alone to identify patterns without further analysis.",
      "Applying basic statistics to small datasets for reporting."
    ],
    answer: 1,
    explanation: "Big Data Analytics turns data into insight through mining and analysis to support decisions — it goes beyond just storing data or finding raw patterns."
  },
  {
    id: 140, lec: 6, clo: "1.1",
    q: "What is the primary difference between data mining and data analytics?",
    options: [
      "Data mining focuses on decision-making, while data analytics focuses on pattern discovery.",
      "Data mining is model-oriented, whereas data analytics is decision-oriented.",
      "Data mining only works on small datasets, data analytics on big datasets.",
      "Data mining uses visualization, data analytics does not."
    ],
    answer: 1,
    explanation: "Mining is model-oriented (discovering patterns/models); analytics is decision-oriented (using those findings to inform decisions)."
  },
  {
    id: 141, lec: 6, clo: "1.1",
    q: "Which characteristic is NOT typically associated with big data environments for analytics?",
    options: [
      "Massive volume of data",
      "Slow velocity of data generation",
      "Variety of data types",
      "Distributed storage and parallel computation"
    ],
    answer: 1,
    explanation: "Big data is high-velocity, not slow. Volume, variety, and distributed/parallel processing are all hallmarks of big data environments."
  },
  {
    id: 142, lec: 6, clo: "1.1",
    q: "Why must analytics in big data environments be system-aware and scalable?",
    options: [
      "Because big data systems have unlimited memory and processing power.",
      "To efficiently process massive, high-velocity, and varied data using distributed systems.",
      "To avoid using distributed storage altogether.",
      "Because traditional analytics algorithms always perform well on big data."
    ],
    answer: 1,
    explanation: "Resources are finite, so analytics must be designed to scale across distributed systems to handle the volume, velocity and variety of big data."
  },
  {
    id: 143, lec: 6, clo: "1.2",
    q: "Which type of analytics answers the question 'Why did it happen?' by analyzing causal factors and relationships?",
    options: ["Descriptive analytics", "Diagnostic analytics", "Predictive analytics", "Prescriptive analytics"],
    answer: 1,
    explanation: "Diagnostic analytics explains causes — the 'why' behind events. Descriptive = what happened, predictive = what will happen, prescriptive = what to do."
  },
  {
    id: 144, lec: 6, clo: "1.2",
    q: "In big data contexts, predictive analytics primarily involves which of the following?",
    options: [
      "Summarizing historical data to understand past trends.",
      "Recommending actions to maximize outcomes based on models.",
      "Building models from historical data to forecast future events with inherent uncertainty.",
      "Identifying causal relationships in data to explain outcomes."
    ],
    answer: 2,
    explanation: "Predictive analytics builds models from history to forecast future outcomes, always with some uncertainty. Recommending actions is prescriptive."
  },
  {
    id: 145, lec: 6, clo: "1.2",
    q: "Which analytics type uses 'what-if' scenarios to recommend decisions aiming to optimize desired outcomes?",
    options: ["Descriptive analytics", "Diagnostic analytics", "Prescriptive analytics", "Predictive analytics"],
    answer: 2,
    explanation: "Prescriptive analytics evaluates what-if scenarios and recommends the best action to optimize an outcome."
  },
  {
    id: 146, lec: 6, clo: "1.2",
    q: "What is the core focus of descriptive analytics in big data environments?",
    options: [
      "Forecasting future trends based on data patterns.",
      "Summarizing historical data to provide clear views of past performance.",
      "Optimizing decisions based on predictive models.",
      "Explaining causal relationships in data."
    ],
    answer: 1,
    explanation: "Descriptive analytics summarizes what already happened, giving a clear view of past performance — the foundation other analytics types build on."
  },
  {
    id: 147, lec: 6, clo: "2.1",
    q: "Which technique is commonly used to address overplotting in large-scale data visualizations?",
    options: [
      "Plotting all raw data points without aggregation",
      "Using aggregation, binning, or sampling to reduce visual clutter",
      "Increasing the number of variables plotted simultaneously",
      "Ignoring dense regions and focusing only on outliers"
    ],
    answer: 1,
    explanation: "Overplotting (too many overlapping points) is reduced by aggregating, binning, or sampling so structure becomes visible."
  },
  {
    id: 148, lec: 6, clo: "2.1",
    q: "What is a key challenge when visualizing high-dimensional big data, and how can it be mitigated?",
    options: [
      "Humans can visualize all variables easily; no mitigation needed.",
      "Visual complexity increases; mitigate by dimensionality reduction preserving structure.",
      "Rendering speed is unaffected by dimensionality; focus on color schemes.",
      "High-dimensional data should be ignored in favor of low-dimensional data."
    ],
    answer: 1,
    explanation: "Humans can't perceive many dimensions at once; techniques like PCA/t-SNE reduce dimensions while preserving structure so the data can be plotted."
  },
  {
    id: 149, lec: 6, clo: "2.1",
    q: "Which scalable visualization strategy involves precomputing summaries to handle large datasets efficiently?",
    options: [
      "Sampling raw data points randomly",
      "Pre-aggregation of data before visualization",
      "Plotting all data points directly",
      "Reducing variables without preserving data structure"
    ],
    answer: 1,
    explanation: "Pre-aggregation computes summaries ahead of time so the visualization renders quickly without touching every raw record at draw time."
  },
  {
    id: 150, lec: 6, clo: "2.1",
    q: "Why is progressive loading important in big data visualization frameworks?",
    options: [
      "It increases cognitive overload by loading all data at once.",
      "It enables interaction by incrementally loading data to improve responsiveness.",
      "It reduces data size by deleting irrelevant data permanently.",
      "It simplifies visuals by removing key insights."
    ],
    answer: 1,
    explanation: "Progressive loading streams data into the view incrementally, keeping the interface responsive instead of freezing while everything loads."
  },

  /* ===================== LEC 7 — Association Rule Mining ===================== */
  {
    id: 151, lec: 7, clo: "1.1",
    q: "Which measure represents the probability that a transaction containing itemset A also contains itemset B?",
    options: ["Support", "Confidence", "Lift", "Frequency count"],
    answer: 1,
    explanation: "Confidence of A → B is the conditional probability P(B|A): given A is in a transaction, how often B is too. Support measures overall frequency; lift measures correlation."
  },
  {
    id: 152, lec: 7, clo: "1.1",
    q: "Which measure is defined as the conditional probability of purchasing Y given that X has already been purchased?",
    options: ["Lift", "Support", "Confidence", "Occurrence count"],
    answer: 2,
    explanation: "Confidence is exactly the conditional probability P(Y|X) — the likelihood of Y given X was bought."
  },
  {
    id: 153, lec: 7, clo: "1.1",
    q: "In association rule mining, what does support measure?",
    options: [
      "The frequency with which all items in a rule appear together in the dataset",
      "The likelihood that a customer will purchase an item in the future",
      "The strength of a conditional relationship between itemsets",
      "The number of rules generated from an itemset"
    ],
    answer: 0,
    explanation: "Support is how frequently the full itemset appears together across all transactions. The conditional strength is confidence, not support."
  },
  {
    id: 154, lec: 7, clo: "1.1",
    q: "What does the support of an association rule primarily indicate?",
    options: [
      "The dependence between two itemsets",
      "The proportion of transactions containing all items involved in the rule",
      "The number of candidate itemsets generated",
      "The probability that an itemset becomes a rule"
    ],
    answer: 1,
    explanation: "Support is the fraction of all transactions that contain every item in the rule — a measure of how common the pattern is."
  },
  {
    id: 155, lec: 7, clo: "1.1",
    q: "What is the first step in the general process of association rule mining?",
    options: ["Generate strong rules", "Calculate lift values", "Find all frequent itemsets", "Partition the data across nodes"],
    answer: 2,
    explanation: "You first find frequent itemsets (those meeting minimum support); strong rules are generated from them afterward."
  },
  {
    id: 156, lec: 7, clo: "1.1",
    q: "Before generating strong association rules, an analyst should first:",
    options: [
      "Build product recommendation models",
      "Identify frequent itemsets using minimum support",
      "Compute network overhead across nodes",
      "Construct a customer segmentation model"
    ],
    answer: 1,
    explanation: "Frequent itemsets (found via the minimum support threshold) are the prerequisite from which strong rules are derived."
  },
  {
    id: 157, lec: 7, clo: "1.2",
    q: "Which algorithm avoids candidate generation by using a compressed tree structure?",
    options: ["Apriori", "SON", "MapReduce Apriori", "FP-Growth"],
    answer: 3,
    explanation: "FP-Growth builds a compressed FP-tree and mines patterns directly from it, avoiding Apriori's expensive candidate-generation step."
  },
  {
    id: 158, lec: 7, clo: "1.2",
    q: "A data scientist wants to reduce the overhead associated with candidate itemset generation. Which algorithm is most appropriate?",
    options: ["FP-Growth", "Apriori", "Distributed Apriori", "MapReduce Apriori"],
    answer: 0,
    explanation: "FP-Growth eliminates candidate generation entirely by using the FP-tree, so it avoids the overhead the Apriori-family algorithms incur."
  },
  {
    id: 159, lec: 7, clo: "1.1",
    q: "In the lecture example, Diaper appears in 4 of 5 transactions, and Beer and Diaper appear together in 3 of 5 transactions. What are the support and confidence of Diaper → Beer?",
    options: [
      "Support = 80%, confidence = 60%",
      "Support = 75%, confidence = 60%",
      "Support = 60%, confidence = 80%",
      "Support = 60%, confidence = 75%"
    ],
    answer: 3,
    explanation: "Support(Diaper→Beer) = transactions with both / total = 3/5 = 60%. Confidence = both / Diaper = 3/4 = 75%."
  },
  {
    id: 160, lec: 7, clo: "1.1",
    q: "In the lecture example, Beer appears in 3 of 5 transactions, and Beer and Diaper appear together in 3 of 5 transactions. What are the support and confidence of Beer → Diaper?",
    options: [
      "Support = 60%, confidence = 100%",
      "Support = 100%, confidence = 60%",
      "Support = 75%, confidence = 80%",
      "Support = 80%, confidence = 75%"
    ],
    answer: 0,
    explanation: "Support = both / total = 3/5 = 60%. Confidence = both / Beer = 3/3 = 100% (every Beer transaction also has Diaper)."
  },
  {
    id: 161, lec: 7, clo: "1.1",
    q: "A retailer has billions of transactions. Why does computing support become expensive in this big data setting?",
    options: [
      "Support can only be computed for one-itemsets",
      "Support removes the need for transaction scans",
      "Support often requires scanning large transaction data",
      "Support depends only on customer demographic data"
    ],
    answer: 2,
    explanation: "Counting support means scanning the (huge) transaction dataset to count co-occurrences — costly when there are billions of transactions."
  },
  {
    id: 162, lec: 7, clo: "1.1",
    q: "A company stores transaction data across several cluster nodes. Which issue becomes especially important when mining association rules?",
    options: [
      "The rules become unrelated to customer behaviour",
      "The minimum support threshold becomes unnecessary",
      "The dataset becomes smaller after distribution",
      "Disk and network overhead can increase processing cost"
    ],
    answer: 3,
    explanation: "Distributing data means counting itemsets requires moving partial counts between nodes, so disk and network overhead become major cost factors."
  },
  {
    id: 163, lec: 7, clo: "1.2",
    q: "Why does Apriori struggle when applied to very large transaction datasets?",
    options: [
      "It stores transactions only as text documents",
      "It generates many candidates and scans the dataset repeatedly",
      "It removes infrequent itemsets before scanning the data",
      "It avoids communication between distributed nodes"
    ],
    answer: 1,
    explanation: "Apriori produces huge numbers of candidate itemsets and re-scans the whole dataset at each level, which does not scale to very large data."
  },
  {
    id: 164, lec: 7, clo: "1.2",
    q: "A team wants to mine frequent patterns from a large dataset while reducing candidate generation. Which choice best fits the lecture content?",
    options: [
      "Use classical Apriori on a single machine",
      "Increase the number of full dataset scans",
      "Use FP-Growth because it avoids candidate generation",
      "Generate all possible itemsets before pruning"
    ],
    answer: 2,
    explanation: "FP-Growth mines patterns from a compact FP-tree without generating candidates, directly addressing the candidate-generation cost."
  },
  {
    id: 165, lec: 7, clo: "2.1",
    q: "In distributed Apriori, what is the main idea behind using local frequent itemsets?",
    options: [
      "Find patterns locally, then combine them globally",
      "Replace support with customer satisfaction scores",
      "Store all transactions on a single worker node",
      "Generate association rules before counting itemsets"
    ],
    answer: 0,
    explanation: "Each node mines frequent itemsets on its local partition, then the local results are merged to obtain globally frequent itemsets — reducing data movement."
  },
  {
    id: 166, lec: 7, clo: "2.1",
    q: "A MapReduce-based Apriori approach partitions the dataset across nodes. What is the main purpose of this design?",
    options: [
      "To remove the need for minimum support",
      "To convert all transactions into sequences",
      "To make lift equal to confidence",
      "To push computation locally and reduce communication"
    ],
    answer: 3,
    explanation: "Partitioning lets each node compute on its local data (data locality), pushing computation to the data and minimizing cross-node communication."
  },
  {
    id: 167, lec: 7, clo: "2.1",
    q: "Which workflow best matches the Spark MLlib practical view for association rule mining?",
    options: [
      "Collect transactions, manually inspect baskets, then draw rules",
      "Load transactions, transform to item lists, run FP-Growth, extract rules",
      "Generate all rules first, then remove transactions with low support",
      "Build a decision tree, compute confidence, then partition the model"
    ],
    answer: 1,
    explanation: "The Spark MLlib flow loads transactions, converts them to item lists, runs the distributed FP-Growth model, then extracts association rules from the frequent itemsets."
  },
  {
    id: 168, lec: 7, clo: "2.1",
    q: "Why is Spark suitable for big data association rule mining according to the lecture?",
    options: [
      "It avoids all forms of data partitioning",
      "It runs only on small in-memory datasets",
      "It supports in-memory processing, parallel computation, and fault tolerance",
      "It replaces frequent itemsets with customer profiles"
    ],
    answer: 2,
    explanation: "Spark's in-memory engine, parallelism, and fault tolerance make it well-suited to the repeated, large-scale counting that association mining requires."
  },
  {
    id: 169, lec: 7, clo: "1.1",
    q: "What does lift help an analyst assess in association rule mining?",
    options: [
      "Whether a rule reflects independence or correlation",
      "Whether the dataset can fit on one machine",
      "Whether an FP-tree can be stored as a table",
      "Whether a transaction contains a repeated item"
    ],
    answer: 0,
    explanation: "Lift compares observed co-occurrence to what independence would predict: lift = 1 means independent, > 1 positive correlation, < 1 negative."
  },
  {
    id: 170, lec: 7, clo: "1.1",
    q: "After finding a high-confidence rule, an analyst also checks lift. What is the purpose of this additional measure?",
    options: [
      "To count how many nodes processed the dataset",
      "To identify the number of scans used by Apriori",
      "To choose the correct minimum support threshold",
      "To examine whether the itemsets are independent or correlated"
    ],
    answer: 3,
    explanation: "High confidence can be misleading if the consequent is just very common; lift reveals whether the items are genuinely correlated or merely independent."
  },
  {
    id: 171, lec: 7, clo: "1.1",
    q: "When is an association rule considered strong in the lecture?",
    options: [
      "When its confidence is high, regardless of support",
      "When it has more items than other generated rules",
      "When it meets both minimum support and minimum confidence",
      "When it is generated from a one-itemset only"
    ],
    answer: 2,
    explanation: "A strong rule must satisfy both thresholds — minimum support (common enough) and minimum confidence (reliable enough)."
  },
  {
    id: 172, lec: 7, clo: "1.1",
    q: "When is an itemset considered frequent?",
    options: [
      "When it appears in exactly one transaction",
      "When its support meets the minimum support threshold",
      "When its confidence is higher than its lift",
      "When it contains more than three items"
    ],
    answer: 1,
    explanation: "An itemset is frequent if its support is at least the minimum support threshold — nothing to do with size or confidence."
  },
  {
    id: 173, lec: 7, clo: "2.2",
    q: "A retailer finds that customers who buy milk often buy bread. Which action best uses this association rule?",
    options: [
      "Place related products strategically or use targeted recommendations",
      "Remove support and confidence from the analysis",
      "Store all transactions as separate databases",
      "Use customer names as items in the transaction set"
    ],
    answer: 0,
    explanation: "Such a rule supports merchandising decisions — co-locating products or recommending one when the other is bought."
  },
  {
    id: 174, lec: 7, clo: "2.2",
    q: "An e-commerce platform discovers that two products frequently appear together in customer baskets. Which business use best matches the lecture?",
    options: [
      "Discard both products from the catalogue",
      "Reduce the dataset to only single-item purchases",
      "Use the pattern for cross-selling or product bundling",
      "Replace association rules with manual shelf counting"
    ],
    answer: 2,
    explanation: "Co-occurring products are ideal candidates for cross-selling and bundling — the classic market-basket application."
  },
  {
    id: 175, lec: 7, clo: "2.1",
    q: "A company needs to mine association rules from one billion transactions stored across a cluster. Which approach best addresses scalability?",
    options: [
      "Use classical Apriori on a single machine",
      "Increase the number of full scans over the dataset",
      "Generate all possible itemsets before distribution",
      "Use distributed FP-Growth through Spark"
    ],
    answer: 3,
    explanation: "At a billion transactions across a cluster, distributed FP-Growth on Spark scales horizontally and avoids Apriori's repeated scans."
  },
  {
    id: 176, lec: 7, clo: "2.1",
    q: "A production pipeline handles millions of sparse transaction records and needs frequent pattern mining. Which option is most suitable?",
    options: [
      "Classical Apriori, because it uses many candidate sets",
      "Spark FP-Growth, because it supports scalable pattern mining",
      "Manual basket inspection, because it avoids cluster overhead",
      "Single-node processing, because distributed storage is unnecessary"
    ],
    answer: 1,
    explanation: "Spark FP-Growth scales to millions of records and handles sparse data efficiently, unlike single-node or manual approaches."
  },
  {
    id: 177, lec: 7, clo: "2.2",
    q: "A distributed Apriori job sends too many candidate itemsets between nodes. Which redesign best follows the lecture's big data version?",
    options: [
      "Partition data, compute local frequent itemsets, then combine results globally",
      "Move all data to one node before mining frequent itemsets",
      "Generate rules first, then estimate support from confidence",
      "Ignore local counts and keep only the longest itemsets"
    ],
    answer: 0,
    explanation: "The scalable design computes local frequent itemsets per partition and merges them globally, drastically cutting cross-node candidate traffic."
  },
  {
    id: 178, lec: 7, clo: "2.2",
    q: "A cluster-based association mining system has high network overhead. Which design choice best reflects the lecture's scalability advice?",
    options: [
      "Increase data movement to centralise all counting",
      "Use more full scans to validate every candidate",
      "Minimise data movement through distributed local computation",
      "Replace transaction data with unrelated summary tables"
    ],
    answer: 2,
    explanation: "Scalability advice is to push computation to the data and minimize movement between nodes, reducing network overhead."
  },
  {
    id: 179, lec: 7, clo: "1.2",
    q: "A data team chooses FP-Growth, but the FP-tree may not fit in memory. Which solution best matches the lecture?",
    options: [
      "Return to manual rule generation",
      "Use Parallel FP-Growth with partitioning and local FP-trees",
      "Remove the minimum support threshold",
      "Use one full FP-tree on a single node"
    ],
    answer: 1,
    explanation: "Parallel FP-Growth (PFP) partitions the problem so each node builds a smaller local FP-tree, solving the memory limit."
  },
  {
    id: 180, lec: 7, clo: "1.2",
    q: "FP-tree construction is difficult to distribute naturally. Which implementation strategy best addresses this issue?",
    options: [
      "Use classical Apriori to avoid all tree structures",
      "Store the FP-tree as customer demographic records",
      "Compute confidence before building frequent patterns",
      "Use PFP or Spark-based FP-Growth with data partitioning"
    ],
    answer: 3,
    explanation: "PFP / Spark FP-Growth partition transactions so independent FP-trees can be built and mined in parallel, making FP-Growth distributable."
  },
  {
    id: 181, lec: 7, clo: "3.1",
    q: "A company wants a recommendation system for a real-time big data environment. Which design best aligns with the lecture discussion?",
    options: [
      "Analyse only a small manual sample and reuse the same rules permanently",
      "Run repeated single-machine Apriori scans on the complete dataset",
      "Use distributed processing to mine frequent patterns and extract association rules",
      "Avoid association rules because they cannot support recommendations"
    ],
    answer: 2,
    explanation: "A real-time recommender at scale should mine patterns with distributed processing and derive association rules to drive recommendations."
  },
  {
    id: 182, lec: 7, clo: "3.1",
    q: "A business wants to scale market basket analysis while keeping processing efficient. Which plan best reflects the lecture's key takeaways?",
    options: [
      "Use distributed algorithms, minimise data movement, and rely on efficient structures",
      "Use more candidate generation, repeated scans, and centralised storage",
      "Ignore support thresholds and generate all possible rules",
      "Focus only on correctness and avoid scalability considerations"
    ],
    answer: 0,
    explanation: "The takeaway is to combine distributed algorithms, minimal data movement, and efficient structures (like FP-trees) for scalable, efficient mining."
  },

  /* ===================== LEC 8 — Text Mining ===================== */
  {
    id: 183, lec: 8, clo: "1.1",
    q: "Text mining integrates which three areas?",
    options: [
      "Databases, visualisation, and simulation",
      "Statistics, optimisation, and networking",
      "Information retrieval, NLP, and data mining",
      "Data warehousing, indexing, and reporting"
    ],
    answer: 2,
    explanation: "Text mining sits at the intersection of information retrieval, natural language processing, and data mining."
  },
  {
    id: 184, lec: 8, clo: "1.1",
    q: "In big data systems, text mining is mainly applied to which type of dataset?",
    options: [
      "Large-scale unstructured datasets",
      "Small relational database tables",
      "Manually labelled spreadsheet files",
      "Fixed-schema numerical records"
    ],
    answer: 0,
    explanation: "Text mining targets large-scale unstructured text (reviews, posts, documents), which is where most big-data text volume lives."
  },
  {
    id: 185, lec: 8, clo: "1.1",
    q: "What is the key challenge when applying data mining to text data?",
    options: [
      "Text data has fewer features than tables",
      "Text data avoids ambiguity during processing",
      "Text data is already stored as numeric features",
      "Text must be converted into structured representation"
    ],
    answer: 3,
    explanation: "Mining algorithms need numeric/structured input, so the core challenge is converting free text into a structured representation (e.g., vectors)."
  },
  {
    id: 186, lec: 8, clo: "1.1",
    q: "How does text data mainly differ from traditional structured data?",
    options: [
      "Text data is numeric, while structured data is free text",
      "Text data is free text, while structured data is tabular",
      "Text data has low ambiguity, while structured data has high ambiguity",
      "Text data is smaller, while structured data is larger"
    ],
    answer: 1,
    explanation: "Text is unstructured free text; structured data is organized in tables with defined schemas."
  },
  {
    id: 187, lec: 8, clo: "1.1",
    q: "What is the main purpose of tokenization?",
    options: [
      "Breaking text into basic units",
      "Removing all rare words from a corpus",
      "Assigning sentiment labels to documents",
      "Representing documents as clusters"
    ],
    answer: 0,
    explanation: "Tokenization splits text into basic units (tokens/words) — the first step that makes text processable."
  },
  {
    id: 188, lec: 8, clo: "1.1",
    q: "Which preprocessing step first converts a sentence into tokens?",
    options: ["TF-IDF weighting", "Stemming", "Tokenization", "Topic modelling"],
    answer: 2,
    explanation: "Tokenization is the entry step that breaks a sentence into tokens; stemming and TF-IDF operate on tokens afterward."
  },
  {
    id: 189, lec: 8, clo: "1.2",
    q: "What is a key limitation of Bag-of-Words representation?",
    options: [
      "It requires every document to have one word only",
      "It removes the document-term matrix",
      "It depends only on named entities",
      "It ignores word order and context"
    ],
    answer: 3,
    explanation: "Bag-of-Words counts words but discards their order and surrounding context, losing meaning that depends on sequence."
  },
  {
    id: 190, lec: 8, clo: "1.2",
    q: "In Bag-of-Words, what does each word usually represent?",
    options: ["A document class", "A feature", "A cluster", "A parsing rule"],
    answer: 1,
    explanation: "In Bag-of-Words each distinct word becomes a feature (dimension), and its count/weight is the feature value."
  },
  {
    id: 191, lec: 8, clo: "1.1",
    q: "A dataset contains user reviews with mixed capitalisation, punctuation, and common words such as “the” and “is”. Which preprocessing step directly addresses these issues?",
    options: [
      "Named entity recognition",
      "Cleaning and normalisation",
      "Text clustering",
      "Vector space modelling"
    ],
    answer: 1,
    explanation: "Cleaning and normalisation handle case-folding, punctuation removal, and stop-word removal — exactly the listed issues."
  },
  {
    id: 192, lec: 8, clo: "1.1",
    q: "A team wants to standardise raw tokens before feature extraction. Which action best supports this objective?",
    options: [
      "Parsing sentences into grammar trees",
      "Keeping punctuation as main features",
      "Replacing all words with document labels",
      "Lowercasing and removing stop words"
    ],
    answer: 3,
    explanation: "Lowercasing and removing stop words standardises tokens so that 'The' and 'the' collapse and uninformative words are dropped before feature extraction."
  },
  {
    id: 193, lec: 8, clo: "1.1",
    q: "Why is stemming used in text preprocessing?",
    options: [
      "To reduce word forms to a common root",
      "To detect organisations and locations",
      "To increase vocabulary size for modelling",
      "To convert text into real-time streams"
    ],
    answer: 0,
    explanation: "Stemming reduces inflected forms (running, runs) to a common root (run), shrinking vocabulary and grouping related words."
  },
  {
    id: 194, lec: 8, clo: "1.1",
    q: "A preprocessing pipeline converts “running” to “run” and “studies” to “study”. What risk should the analyst consider?",
    options: [
      "The text cannot be tokenized later",
      "The document-term matrix becomes impossible",
      "Some meaning may be lost",
      "The corpus becomes fully structured"
    ],
    answer: 2,
    explanation: "Stemming/lemmatization can over-collapse words and strip nuance, so some meaning may be lost."
  },
  {
    id: 195, lec: 8, clo: "1.2",
    q: "A model needs to capture local word order such as “text_mining” or “useful_information”. Which representation best fits this need?",
    options: [
      "Single-word Bag-of-Words",
      "Named entity recognition",
      "Part-of-speech tagging",
      "N-grams"
    ],
    answer: 3,
    explanation: "N-grams capture short sequences of adjacent words, preserving the local order that single-word Bag-of-Words throws away."
  },
  {
    id: 196, lec: 8, clo: "1.2",
    q: "What is a key drawback of using N-grams in text representation?",
    options: [
      "They remove all local dependency",
      "They increase vocabulary size",
      "They prevent document comparison",
      "They eliminate statistical features"
    ],
    answer: 1,
    explanation: "Because every word combination becomes its own feature, N-grams cause the vocabulary (feature space) to grow rapidly."
  },
  {
    id: 197, lec: 8, clo: "1.2",
    q: "In the vector space model, how is a document represented?",
    options: [
      "As a point in a multi-dimensional concept space",
      "As a fixed grammar rule for parsing",
      "As a list of named entities only",
      "As a stream without extracted features"
    ],
    answer: 0,
    explanation: "The vector space model represents each document as a point/vector in a high-dimensional term space, enabling similarity computation."
  },
  {
    id: 198, lec: 8, clo: "1.2",
    q: "Why is representing documents as vectors useful?",
    options: [
      "It removes the need for preprocessing",
      "It guarantees perfect language understanding",
      "It enables similarity analysis and clustering",
      "It prevents vocabulary growth"
    ],
    answer: 2,
    explanation: "Vectors let you measure distance/similarity between documents mathematically, enabling clustering, search, and classification."
  },
  {
    id: 199, lec: 8, clo: "1.2",
    q: "In TF-IDF, what does term frequency indicate?",
    options: [
      "The rarity of a term in the collection",
      "The importance of a term in a document",
      "The number of documents in a cluster",
      "The language used in the corpus"
    ],
    answer: 1,
    explanation: "Term frequency (TF) measures how often a term occurs in a document — its local importance to that document. Rarity across the collection is IDF."
  },
  {
    id: 200, lec: 8, clo: "1.2",
    q: "In TF-IDF, what does inverse document frequency emphasise?",
    options: [
      "Terms that appear in every document",
      "Terms removed during tokenization",
      "Terms with no document occurrence",
      "Terms that are rare in the collection"
    ],
    answer: 3,
    explanation: "IDF up-weights terms that appear in few documents (rare, discriminative) and down-weights ubiquitous terms."
  },
  {
    id: 201, lec: 8, clo: "1.2",
    q: "In the sentence “Google was founded in California”, which NLP task identifies Google as an organisation and California as a location?",
    options: [
      "Named entity recognition",
      "Bag-of-Words counting",
      "Stop-word removal",
      "Text summarisation"
    ],
    answer: 0,
    explanation: "Named Entity Recognition (NER) labels spans of text as entity types like ORG (Google) and LOC (California)."
  },
  {
    id: 202, lec: 8, clo: "1.2",
    q: "Which NLP task extracts structured information such as organisations and locations from text?",
    options: ["Stemming", "TF-IDF weighting", "Named entity recognition", "Document clustering"],
    answer: 2,
    explanation: "NER extracts structured entities (organisations, locations, people) from unstructured text."
  },
  {
    id: 203, lec: 8, clo: "2.1",
    q: "Which pipeline best represents a standard text mining process?",
    options: [
      "Data → clustering → storage → punctuation",
      "Tokens → grammar → manual review → reports",
      "Search → labels → summaries → visualisation",
      "Data → preprocessing → feature extraction → modelling → insights"
    ],
    answer: 3,
    explanation: "The standard flow is raw data → preprocessing → feature extraction → modelling → insights, mirroring the general data-mining pipeline."
  },
  {
    id: 204, lec: 8, clo: "2.1",
    q: "What is the main big data extension to a traditional text mining pipeline?",
    options: [
      "Manual annotation and spreadsheet modelling",
      "Distributed processing and parallel execution",
      "Removing preprocessing from the workflow",
      "Using only small labelled datasets"
    ],
    answer: 1,
    explanation: "At big-data scale, the pipeline is extended with distributed processing and parallel execution to handle huge text corpora."
  },
  {
    id: 205, lec: 8, clo: "2.1",
    q: "Which set includes big data tools for text mining?",
    options: [
      "NLTK, spaCy, Transformers",
      "BoW, N-grams, TF-IDF",
      "Spark MLlib, Spark NLP, Hadoop",
      "Parsing, tagging, clustering"
    ],
    answer: 2,
    explanation: "Spark MLlib, Spark NLP, and Hadoop are distributed big-data tools. NLTK/spaCy are single-machine libraries; the others are techniques, not tools."
  },
  {
    id: 206, lec: 8, clo: "2.2",
    q: "A company wants to analyse whether customer reviews are positive or negative. Which text mining task best fits this goal?",
    options: ["Sentiment analysis", "Named entity parsing", "Vocabulary reduction", "N-gram expansion"],
    answer: 0,
    explanation: "Classifying reviews as positive/negative is sentiment analysis."
  },
  {
    id: 207, lec: 8, clo: "2.2",
    q: "A retailer receives millions of reviews and social media posts each day. Which solution best addresses large-scale text mining challenges?",
    options: [
      "Process a small sample manually each month",
      "Use only Bag-of-Words without preprocessing",
      "Avoid feature extraction because text is ambiguous",
      "Use scalable processing with preprocessing and feature representation"
    ],
    answer: 3,
    explanation: "Millions of daily documents require scalable (distributed) processing with proper preprocessing and feature representation."
  },
  {
    id: 208, lec: 8, clo: "2.2",
    q: "A platform monitors high-velocity social media streams for customer feedback. Which design choice best supports scalable text analysis?",
    options: [
      "Use only single-machine processing",
      "Use distributed processing for scalable text analysis",
      "Store text as raw sentences without features",
      "Remove NLP tasks from the pipeline"
    ],
    answer: 1,
    explanation: "High-velocity streams demand distributed processing to scale; single-machine processing cannot keep up."
  },
  {
    id: 209, lec: 8, clo: "1.2",
    q: "A model must preserve local word order, but the team accepts a larger vocabulary. Which representation is most suitable?",
    options: [
      "Stop-word removal",
      "Single-token Bag-of-Words",
      "N-grams",
      "Named entity recognition"
    ],
    answer: 2,
    explanation: "N-grams preserve local order at the cost of a larger vocabulary — exactly the trade-off described."
  },
  {
    id: 210, lec: 8, clo: "1.2",
    q: "An analyst wants to represent phrases such as “text mining” as connected terms while recognising that the vocabulary will grow. Which method should be selected?",
    options: ["N-grams", "Stemming", "Part-of-speech tagging", "Lowercasing"],
    answer: 0,
    explanation: "N-grams join adjacent words into phrase features (e.g., 'text mining'), accepting vocabulary growth as the trade-off."
  },
  {
    id: 211, lec: 8, clo: "3.1",
    q: "A project team is building a big data NLP pipeline for noisy reviews containing slang and punctuation. Which sequence best supports meaningful analysis?",
    options: [
      "Store raw text, skip tokenization, then cluster documents",
      "Tokenize, clean and normalise, reduce vocabulary, then represent features",
      "Apply clustering before preprocessing and feature extraction",
      "Use only named entity recognition and ignore document representation"
    ],
    answer: 1,
    explanation: "The correct order preprocesses first (tokenize → clean/normalise → reduce vocabulary) before representing features for modelling."
  },
  {
    id: 212, lec: 8, clo: "3.1",
    q: "A data science team needs to compare large numbers of unstructured documents. Which plan best supports document comparison?",
    options: [
      "Keep documents as raw text and compare sentence lengths",
      "Remove feature extraction and rely only on manual labels",
      "Use parsing only, then discard all tokens",
      "Preprocess text and represent documents numerically"
    ],
    answer: 3,
    explanation: "Comparing documents requires numeric representations (vectors), which means preprocessing then feature extraction."
  },
  {
    id: 213, lec: 8, clo: "2.1",
    q: "A team must evaluate tools for large-scale text processing. Which choice best fits a big data setting?",
    options: [
      "Spark NLP or Spark MLlib",
      "A single manual coding sheet",
      "A local text editor only",
      "A non-distributed spreadsheet"
    ],
    answer: 0,
    explanation: "Spark NLP / Spark MLlib are distributed and scale to large corpora; the other options are single-machine and manual."
  },
  {
    id: 214, lec: 8, clo: "2.2",
    q: "A company wants to analyse customer feedback, social media data, and fraud-related text at scale. Which approach best fits this objective?",
    options: [
      "Avoid NLP because text is unstructured",
      "Use only traditional numeric mining methods",
      "Apply scalable text mining to transform and analyse text",
      "Remove all high-volume data before modelling"
    ],
    answer: 2,
    explanation: "Analysing varied text at scale calls for scalable text mining to transform unstructured text into analysable features."
  },

  /* ===================== LEC 9 — Graph Mining ===================== */
  {
    id: 215, lec: 9, clo: "1.1",
    q: "What is graph mining mainly concerned with?",
    options: [
      "Sorting records in relational tables",
      "Cleaning missing values in tabular datasets",
      "Extracting structural patterns from graph data",
      "Converting images into numerical features"
    ],
    answer: 2,
    explanation: "Graph mining discovers structural patterns (subgraphs, communities, motifs) within graph data — relationships, not flat tables."
  },
  {
    id: 216, lec: 9, clo: "1.1",
    q: "Which task is a central focus of graph mining at scale?",
    options: [
      "Frequent subgraph mining",
      "Simple text tokenization",
      "One-dimensional regression",
      "Manual database indexing"
    ],
    answer: 0,
    explanation: "Finding subgraphs that recur frequently (frequent subgraph mining) is a core large-scale graph-mining task."
  },
  {
    id: 217, lec: 9, clo: "1.1",
    q: "Which example best represents a graph in a big data environment?",
    options: [
      "A spreadsheet with a single numeric column",
      "A list of independent survey responses",
      "A folder of unconnected text files",
      "A social network with many connected users"
    ],
    answer: 3,
    explanation: "A social network — users (nodes) connected by relationships (edges) — is the canonical large-scale graph."
  },
  {
    id: 218, lec: 9, clo: "1.1",
    q: "Which characteristic is common in big graph data?",
    options: [
      "Fixed-size records with no relationships",
      "High volume and strong connectivity",
      "Small storage needs and no dynamics",
      "Independent rows without links"
    ],
    answer: 1,
    explanation: "Big graphs are large and densely connected — high volume plus strong connectivity is what makes them hard to process."
  },
  {
    id: 219, lec: 9, clo: "1.1",
    q: "What makes a subgraph frequent?",
    options: [
      "It appears above a minimum support threshold",
      "It contains every node in the graph",
      "It is stored on a single machine",
      "It has no edges between vertices"
    ],
    answer: 0,
    explanation: "Just like itemsets, a subgraph is frequent when its occurrence count meets the minimum support threshold."
  },
  {
    id: 220, lec: 9, clo: "1.1",
    q: "What does support counting require when graphs are distributed across a cluster?",
    options: [
      "Removing all graph partitions",
      "Replacing edges with text tokens",
      "Aggregating counts across partitions",
      "Avoiding minimum support thresholds"
    ],
    answer: 2,
    explanation: "When a graph is partitioned, each partition contributes partial counts that must be aggregated across partitions to get global support."
  },
  {
    id: 221, lec: 9, clo: "1.2",
    q: "Which algorithm uses DFS-based graph encoding and right-most extension?",
    options: ["Apriori", "Spark SQL", "GraphX", "gSpan"],
    answer: 3,
    explanation: "gSpan encodes graphs with DFS codes and grows patterns via right-most extension, avoiding candidate generation."
  },
  {
    id: 222, lec: 9, clo: "1.2",
    q: "Which concept helps gSpan represent graph patterns uniquely?",
    options: ["Minimum DFS code", "Random vertex labels", "Repeated table scans", "Manual edge sorting"],
    answer: 0,
    explanation: "The minimum DFS code gives each subgraph a canonical form, so gSpan can detect and avoid duplicate patterns."
  },
  {
    id: 223, lec: 9, clo: "1.1",
    q: "A company mines a transaction graph with billions of edges. Which challenge is most directly related to the graph size?",
    options: [
      "Low ambiguity in graph labels",
      "Scalability of mining operations",
      "Removal of all communication cost",
      "Absence of structural patterns"
    ],
    answer: 1,
    explanation: "Billions of edges make scalability the dominant challenge — the algorithm must process enormous structure efficiently."
  },
  {
    id: 224, lec: 9, clo: "1.1",
    q: "A large web graph is stored across many machines, and workers frequently exchange intermediate results. Which challenge is being highlighted?",
    options: [
      "Communication overhead",
      "Single-machine storage",
      "Lack of graph connectivity",
      "Manual pattern labelling"
    ],
    answer: 0,
    explanation: "Frequent exchange of intermediate results between workers is communication overhead — a primary cost in distributed graph mining."
  },
  {
    id: 225, lec: 9, clo: "1.1",
    q: "Why does subgraph isomorphism dominate runtime in large-scale graph mining?",
    options: [
      "It removes the need for candidate validation",
      "It converts every graph into a table",
      "It is computationally difficult to verify pattern matches",
      "It requires graphs to have no repeated structures"
    ],
    answer: 2,
    explanation: "Checking whether a pattern occurs in a graph (subgraph isomorphism) is computationally hard, so it dominates runtime."
  },
  {
    id: 226, lec: 9, clo: "1.1",
    q: "Which statement best describes the core computational challenge in frequent subgraph mining?",
    options: [
      "Graph patterns can be counted without validation",
      "Subgraph isomorphism is NP-complete",
      "Support thresholds remove all search cost",
      "Distributed storage eliminates runtime concerns"
    ],
    answer: 1,
    explanation: "Subgraph isomorphism is NP-complete, which is the fundamental reason frequent subgraph mining is expensive."
  },
  {
    id: 227, lec: 9, clo: "1.2",
    q: "What is the purpose of the Apriori principle in graph mining?",
    options: [
      "To increase duplicate pattern generation",
      "To remove the need for support counting",
      "To convert graphs into vertex messages",
      "To prune the candidate search space"
    ],
    answer: 3,
    explanation: "The Apriori (anti-monotone) principle lets you prune: if a subgraph is infrequent, all its supergraphs are too, shrinking the search space."
  },
  {
    id: 228, lec: 9, clo: "1.2",
    q: "Which property supports pruning in an Apriori-based graph mining approach?",
    options: ["Downward closure", "Dataflow transformation", "Power-law skew", "Right-most extension"],
    answer: 0,
    explanation: "Downward closure (anti-monotonicity) — every subset of a frequent pattern is frequent — is what enables Apriori pruning."
  },
  {
    id: 229, lec: 9, clo: "1.2",
    q: "Why does an Apriori-based approach struggle with big graph data?",
    options: [
      "It avoids candidate validation",
      "It generates few patterns in each step",
      "It can cause candidate explosion and repeated scans",
      "It removes duplicate detection overhead"
    ],
    answer: 2,
    explanation: "Apriori on graphs generates an explosion of candidate subgraphs and rescans the data repeatedly, which does not scale."
  },
  {
    id: 230, lec: 9, clo: "1.2",
    q: "A graph mining job creates many candidate subgraphs and repeatedly scans the graph database. Which limitation is most likely?",
    options: ["Poor scalability", "Perfect parallelism", "Reduced memory demand", "Lower validation cost"],
    answer: 0,
    explanation: "Many candidates plus repeated scans lead directly to poor scalability."
  },
  {
    id: 231, lec: 9, clo: "1.2",
    q: "How does a pattern-growth approach differ from an Apriori-based approach?",
    options: [
      "It removes graph structures before mining",
      "It extends existing frequent subgraphs",
      "It scans only relational tables",
      "It avoids support thresholds entirely"
    ],
    answer: 1,
    explanation: "Pattern-growth (e.g., gSpan) grows patterns by extending already-frequent subgraphs, rather than generating-and-testing candidates."
  },
  {
    id: 232, lec: 9, clo: "1.2",
    q: "What is a main advantage of gSpan over Apriori-based graph mining?",
    options: [
      "It replaces graph mining with clustering",
      "It eliminates the need for graph patterns",
      "It avoids duplicate generation and reduces search space",
      "It requires more candidate joins and scans"
    ],
    answer: 2,
    explanation: "gSpan's canonical DFS codes avoid duplicate candidates and shrink the search space compared with Apriori."
  },
  {
    id: 233, lec: 9, clo: "1.2",
    q: "Which strategy does gSpan use to expand frequent subgraphs?",
    options: [
      "Right-most extension",
      "Random graph deletion",
      "Single-machine sorting",
      "Manual duplicate inspection"
    ],
    answer: 0,
    explanation: "gSpan grows subgraphs only along the right-most path (right-most extension), which keeps the search systematic and duplicate-free."
  },
  {
    id: 234, lec: 9, clo: "1.2",
    q: "Why is the minimum DFS code important in gSpan?",
    options: [
      "It increases candidate duplicates",
      "It replaces support counting",
      "It stores graph partitions on disk",
      "It helps ensure uniqueness of graph patterns"
    ],
    answer: 3,
    explanation: "The minimum DFS code is a canonical label, so the same subgraph always maps to one code — guaranteeing pattern uniqueness."
  },
  {
    id: 235, lec: 9, clo: "2.1",
    q: "What is a key requirement for processing large graphs across a cluster?",
    options: [
      "Single-node execution",
      "Partitioned graph storage",
      "Removal of all edges",
      "Manual support counting"
    ],
    answer: 1,
    explanation: "Large graphs must be partitioned across machines so they fit in distributed memory/storage and can be processed in parallel."
  },
  {
    id: 236, lec: 9, clo: "2.1",
    q: "A graph dataset is too large for one machine. Which processing approach best fits this situation?",
    options: [
      "Parallel execution across nodes",
      "Spreadsheet-based graph storage",
      "Sequential validation on one laptop",
      "Manual extraction of all patterns"
    ],
    answer: 0,
    explanation: "When a graph exceeds one machine, parallel execution across cluster nodes is the appropriate approach."
  },
  {
    id: 237, lec: 9, clo: "2.1",
    q: "Which pair correctly matches graph processing systems with their models?",
    options: [
      "GraphX and Pregel are both text preprocessing tools",
      "Spark uses a dataflow model, while Pregel uses a vertex-centric model",
      "Giraph is a single-node relational database engine",
      "Spark and Hadoop are right-most extension algorithms"
    ],
    answer: 1,
    explanation: "Spark follows a dataflow (RDD/DAG) model; Pregel popularised the vertex-centric ('think like a vertex') model for graph computation."
  },
  {
    id: 238, lec: 9, clo: "2.1",
    q: "A team must mine frequent subgraphs from a massive distributed graph and wants to reduce duplicate candidate generation. Which algorithmic direction is most suitable?",
    options: [
      "Use an Apriori-based approach with more candidate joins",
      "Use a pattern-growth approach such as gSpan",
      "Use manual inspection of graph samples",
      "Use repeated full scans without pruning"
    ],
    answer: 1,
    explanation: "Pattern-growth methods like gSpan inherently avoid duplicate candidate generation, which is exactly the stated goal."
  },
  {
    id: 239, lec: 9, clo: "2.1",
    q: "A data science team needs a more scalable alternative to Apriori-style frequent subgraph mining. Which choice best fits the objective?",
    options: [
      "gSpan with DFS-based encoding",
      "A single-machine table scan",
      "Random deletion of graph edges",
      "Manual grouping of connected components"
    ],
    answer: 0,
    explanation: "gSpan's DFS-based encoding scales better than Apriori-style generate-and-test for frequent subgraph mining."
  },
  {
    id: 240, lec: 9, clo: "2.2",
    q: "A distributed graph mining pipeline spends most of its time validating candidate patterns. Which redesign best targets the main bottleneck?",
    options: [
      "Increase repeated database scans",
      "Generate more candidate subgraphs",
      "Reduce expensive isomorphism validations",
      "Move all graph partitions to one node"
    ],
    answer: 2,
    explanation: "Since validation (subgraph isomorphism) dominates, the fix is to reduce those expensive isomorphism checks (e.g., better pruning/canonical forms)."
  },
  {
    id: 241, lec: 9, clo: "2.2",
    q: "A cluster-based frequent subgraph mining job has high communication cost. Which design priority best improves scalability?",
    options: [
      "Increase cross-partition messaging",
      "Centralise all graph data before mining",
      "Ignore partition-level aggregation",
      "Reduce communication across workers"
    ],
    answer: 3,
    explanation: "Communication is the bottleneck, so reducing cross-worker messaging directly improves scalability."
  },
  {
    id: 242, lec: 9, clo: "3.1",
    q: "A team is choosing between vertex-centric and dataflow-based graph processing. Which trade-off should guide the decision?",
    options: [
      "Flexibility versus communication cost",
      "Tokenization versus stemming",
      "Text quality versus punctuation removal",
      "Schema design versus SQL indexing"
    ],
    answer: 0,
    explanation: "Vertex-centric models are flexible for iterative graph algorithms but can incur high messaging cost; dataflow trades some flexibility for efficiency — flexibility vs communication cost."
  },
  {
    id: 243, lec: 9, clo: "3.1",
    q: "A graph application requires many vertex-to-vertex updates across partitions. Which concern should the team evaluate carefully?",
    options: [
      "Stop-word removal",
      "Communication cost",
      "Bag-of-Words weighting",
      "Relational normalisation"
    ],
    answer: 1,
    explanation: "Frequent cross-partition vertex updates generate heavy messaging, so communication cost is the key concern."
  },
  {
    id: 244, lec: 9, clo: "3.1",
    q: "A cybersecurity team needs graph mining for massive threat-detection data. Which strategy best reflects big data graph mining principles?",
    options: [
      "Use only exact single-machine algorithms",
      "Avoid distributed systems to reduce complexity",
      "Use distributed processing and manage accuracy–scalability trade-offs",
      "Discard graph structure and keep only node labels"
    ],
    answer: 2,
    explanation: "Massive graphs require distributed processing while consciously balancing accuracy against scalability — the central big-data graph-mining principle."
  },
  {
    id: 245, lec: 9, clo: "3.1",
    q: "A fraud detection project uses transaction graphs with massive connectivity. Which design direction best aligns with scalable graph mining?",
    options: [
      "Rely on manual pattern validation",
      "Apply only small-graph algorithms without adaptation",
      "Use one central machine for all support counting",
      "Use distributed graph processing while reducing communication"
    ],
    answer: 3,
    explanation: "Highly connected fraud graphs need distributed processing designed to minimise communication overhead."
  },

  /* ===================== LEC 10 — Data Streams ===================== */
  {
    id: 246, lec: 10, clo: "1.1",
    q: "What is a data stream?",
    options: [
      "A fixed dataset processed after collection",
      "An ordered, continuous flow of records or events",
      "A stored table used only for batch queries",
      "A compressed archive of historical records"
    ],
    answer: 1,
    explanation: "A stream is an ordered, continuous, potentially unbounded flow of records/events — the opposite of a fixed stored dataset."
  },
  {
    id: 247, lec: 10, clo: "1.1",
    q: "Which characteristic best describes streaming data?",
    options: [
      "It has no natural end to the dataset",
      "It is processed only after being fully stored",
      "It contains only static historical records",
      "It requires repeated full-dataset scans"
    ],
    answer: 0,
    explanation: "Streaming data is unbounded — there is no natural end — so it must be processed incrementally as it arrives."
  },
  {
    id: 248, lec: 10, clo: "1.1",
    q: "What is the main purpose of event-driven architecture?",
    options: [
      "To make producers store all events locally",
      "To replace real-time processing with batch jobs",
      "To decouple systems through published events",
      "To prevent consumers from reacting independently"
    ],
    answer: 2,
    explanation: "Event-driven architecture decouples producers and consumers via published events, so each side can evolve and scale independently."
  },
  {
    id: 249, lec: 10, clo: "1.1",
    q: "In an event-driven system, which component stores events in topics for later reading?",
    options: ["Dashboard", "Event broker or log", "Model scoring service", "Feature engineering script"],
    answer: 1,
    explanation: "The event broker/log (e.g., Kafka) durably stores events in topics so consumers can read them later or replay them."
  },
  {
    id: 250, lec: 10, clo: "1.2",
    q: "What does a tumbling window do in stream processing?",
    options: [
      "Creates sessions based on inactivity gaps",
      "Processes only events with missing timestamps",
      "Maintains one global counter for the full stream",
      "Groups events into non-overlapping time intervals"
    ],
    answer: 3,
    explanation: "A tumbling window cuts the stream into fixed, non-overlapping intervals; each event belongs to exactly one window."
  },
  {
    id: 251, lec: 10, clo: "1.2",
    q: "Which window type uses overlapping intervals, such as the last 10 minutes updated every minute?",
    options: ["Sliding window", "Session window", "Tumbling window", "Retention window"],
    answer: 0,
    explanation: "A sliding window covers a fixed span (last 10 min) but advances by a smaller step (1 min), so consecutive windows overlap."
  },
  {
    id: 252, lec: 10, clo: "1.2",
    q: "What is an event-time watermark used for?",
    options: [
      "Compressing events before ingestion",
      "Choosing the number of Kafka partitions",
      "Deciding how long to wait for late events",
      "Removing duplicated records from storage"
    ],
    answer: 2,
    explanation: "A watermark tells the system how far event-time has progressed, i.e. how long to wait for late-arriving events before finalizing a window."
  },
  {
    id: 253, lec: 10, clo: "1.2",
    q: "What is the key difference between event time and processing time?",
    options: [
      "Event time is used only in batch systems",
      "Processing time occurs before an event is created",
      "Event time records when the event happened, while processing time records when it is handled",
      "Processing time removes the need for timestamps"
    ],
    answer: 2,
    explanation: "Event time is when the event actually occurred; processing time is when the system handled it. They differ because of network delays and buffering."
  },
  {
    id: 254, lec: 10, clo: "1.1",
    q: "A fraud system must decide whether to approve a payment before the transaction completes. Which processing style best fits this requirement?",
    options: [
      "Offline mining after daily collection",
      "Streaming analytics with low latency",
      "Manual review of stored reports",
      "Periodic archiving of raw records"
    ],
    answer: 1,
    explanation: "Approving a payment in-flight requires a decision within milliseconds — low-latency streaming analytics."
  },
  {
    id: 255, lec: 10, clo: "1.1",
    q: "A dashboard must update during live operations as new sensor readings arrive. Which question best represents the streaming perspective?",
    options: [
      "What happened last semester?",
      "Which records should be archived next month?",
      "What is happening now, and what should the system do next?",
      "Which historical table should be scanned repeatedly?"
    ],
    answer: 2,
    explanation: "Streaming is about the present and immediate future — 'what is happening now and what to do next' — rather than historical questions."
  },
  {
    id: 256, lec: 10, clo: "1.1",
    q: "Why do streaming algorithms often use bounded memory?",
    options: [
      "The stream may be potentially infinite",
      "The dataset is always small enough to scan fully",
      "The system stores all future events in advance",
      "The broker removes the need for state"
    ],
    answer: 0,
    explanation: "Because a stream can be unbounded, you cannot store it all — algorithms must work within bounded memory using summaries/sketches."
  },
  {
    id: 257, lec: 10, clo: "1.1",
    q: "A stream is too large to store first and analyse later. Which design trade-off becomes important?",
    options: [
      "Precision, latency, memory, and throughput",
      "Colour, layout, font, and report size",
      "Primary keys, foreign keys, and normal forms",
      "Column names, file extensions, and page numbers"
    ],
    answer: 0,
    explanation: "Stream processing balances precision (often approximate), latency, memory, and throughput — the core engineering trade-offs."
  },
  {
    id: 258, lec: 10, clo: "2.1",
    q: "Which component is commonly used for high-throughput ingestion, buffering, and replay?",
    options: ["Spark SQL only", "Apache Kafka", "A dashboard widget", "A batch spreadsheet"],
    answer: 1,
    explanation: "Kafka's durable, partitioned log gives high-throughput ingestion, buffering, and the ability to replay events."
  },
  {
    id: 259, lec: 10, clo: "2.1",
    q: "Which Kafka concept allows multiple workers to process a topic in parallel?",
    options: ["Watermark", "Schema", "Consumer group", "Session gap"],
    answer: 2,
    explanation: "A consumer group splits a topic's partitions among its members, letting multiple workers consume in parallel."
  },
  {
    id: 260, lec: 10, clo: "2.1",
    q: "Which Kafka concept represents a named stream of events, such as clicks or transactions?",
    options: ["Topic", "Offset", "Checkpoint", "State store"],
    answer: 0,
    explanation: "A topic is a named stream/category of events in Kafka. Offsets are positions within a partition."
  },
  {
    id: 261, lec: 10, clo: "2.1",
    q: "What does an offset represent in Kafka?",
    options: [
      "A schema for changing event formats",
      "A model score used for fraud detection",
      "The position of an event in a partition",
      "The number of windows in a stream"
    ],
    answer: 2,
    explanation: "An offset is the sequential position of a record within a partition, used to track how far a consumer has read."
  },
  {
    id: 262, lec: 10, clo: "1.2",
    q: "A delivery platform stores the last location of each vehicle to update routes. Which concept does this illustrate?",
    options: [
      "Schema evolution",
      "Stateful stream processing",
      "Offline report generation",
      "Random sampling"
    ],
    answer: 1,
    explanation: "Keeping and updating per-vehicle state (last location) across events is stateful stream processing."
  },
  {
    id: 263, lec: 10, clo: "1.2",
    q: "A security service tracks failed logins per account over time. Which streaming component is required?",
    options: [
      "State store",
      "Static lookup table only",
      "One-time batch export",
      "Manual dashboard refresh"
    ],
    answer: 0,
    explanation: "Counting failed logins per account over time requires maintaining running state, which is held in a state store."
  },
  {
    id: 264, lec: 10, clo: "2.1",
    q: "How does Spark Structured Streaming model a live stream?",
    options: [
      "As a set of unrelated files",
      "As an unbounded table",
      "As a fixed offline dataset",
      "As a manually labelled report"
    ],
    answer: 1,
    explanation: "Spark Structured Streaming treats a stream as an unbounded table that new rows are continuously appended to, so the same DataFrame logic applies."
  },
  {
    id: 265, lec: 10, clo: "2.1",
    q: "Why is Spark Structured Streaming useful for big data mining?",
    options: [
      "It removes the need for incremental execution",
      "It supports only record-at-a-time processing",
      "It applies DataFrame-style logic to streaming data",
      "It stores all events without processing them"
    ],
    answer: 2,
    explanation: "It lets you reuse familiar DataFrame/SQL operations on streaming data, unifying batch and stream programming."
  },
  {
    id: 266, lec: 10, clo: "1.2",
    q: "What is micro-batch processing?",
    options: [
      "Grouping events into small batches for processing",
      "Processing only historical files once per semester",
      "Deleting events after each dashboard update",
      "Handling events only through manual inspection"
    ],
    answer: 0,
    explanation: "Micro-batching collects events into small batches processed at short intervals — the model Spark Structured Streaming uses by default."
  },
  {
    id: 267, lec: 10, clo: "1.2",
    q: "Why might record-at-a-time processing be selected for a streaming application?",
    options: [
      "To increase latency in exchange for simpler reporting",
      "To reduce latency when events arrive",
      "To remove state and checkpointing concerns",
      "To convert the stream into a finite dataset"
    ],
    answer: 1,
    explanation: "Processing each record immediately (rather than batching) minimises latency, which matters for time-critical reactions."
  },
  {
    id: 268, lec: 10, clo: "1.2",
    q: "A system monitors trending search terms without storing every possible counter. Which method best fits this need?",
    options: [
      "Manual full counting",
      "Schema evolution",
      "Approximate frequency monitoring",
      "Static data warehousing"
    ],
    answer: 2,
    explanation: "Tracking 'trending' terms within bounded memory calls for approximate frequency methods (sketches) rather than exact counters for every term."
  },
  {
    id: 269, lec: 10, clo: "1.2",
    q: "Why are sketches and lossy counting useful in streaming systems?",
    options: [
      "They guarantee storage of every raw event",
      "They remove the need for ingestion systems",
      "They replace timestamps with fixed IDs",
      "They provide bounded memory with controlled approximation"
    ],
    answer: 3,
    explanation: "Sketches/lossy counting trade a small, controlled error for bounded memory — essential when you cannot store the full stream."
  },
  {
    id: 270, lec: 10, clo: "2.2",
    q: "A financial institution needs to score card transactions within milliseconds to seconds while managing customer experience. Which design choice is most appropriate?",
    options: [
      "Use streaming fraud analytics with real-time features",
      "Delay scoring until the end of the month",
      "Store authorisations without immediate processing",
      "Disable alerts to reduce operational complexity"
    ],
    answer: 0,
    explanation: "Sub-second transaction scoring requires streaming fraud analytics computing real-time features as events arrive."
  },
  {
    id: 271, lec: 10, clo: "2.2",
    q: "A fraud detection pipeline must balance false positives and false negatives. Which trade-off best captures the design concern?",
    options: [
      "More schemas versus fewer dashboards",
      "Customer experience versus financial loss",
      "File size versus column naming",
      "Offline storage versus report formatting"
    ],
    answer: 1,
    explanation: "False positives annoy legitimate customers (experience) while false negatives let fraud through (financial loss) — that is the central trade-off."
  },
  {
    id: 272, lec: 10, clo: "2.2",
    q: "An IoT system generates high-volume sensor streams, and cloud transmission is expensive. Which approach best addresses this issue?",
    options: [
      "Send every raw reading to long-term storage first",
      "Disable anomaly detection until batch processing",
      "Use edge filtering before stream processing",
      "Remove timestamps from sensor events"
    ],
    answer: 2,
    explanation: "Filtering at the edge sends only useful events, cutting bandwidth and transmission cost before data reaches the cloud."
  },
  {
    id: 273, lec: 10, clo: "2.2",
    q: "A smart-environment pipeline faces missing values, sensor drift, unstable networks, and privacy constraints. Which statement best describes the challenge?",
    options: [
      "The stream has no operational concerns",
      "The data can be treated as a fixed offline table",
      "The broker removes all privacy constraints",
      "The pipeline must handle heterogeneous and unreliable data sources"
    ],
    answer: 3,
    explanation: "These symptoms describe heterogeneous, unreliable sources, so the pipeline must be designed to tolerate noise, gaps, and privacy needs."
  },
  {
    id: 274, lec: 10, clo: "3.1",
    q: "A streaming recommendation system uses recent views, searches, clicks, and purchases to update user profiles. Which design concern should be evaluated?",
    options: [
      "Privacy, transparency, and fairness",
      "Page formatting and slide layout",
      "Manual archiving and printing",
      "Removing behavioural signals entirely"
    ],
    answer: 0,
    explanation: "Profiling users from behaviour raises privacy, transparency, and fairness concerns that must be evaluated."
  },
  {
    id: 275, lec: 10, clo: "3.1",
    q: "A digital platform personalises recommendations using sensitive behavioural signals. Which safeguard is most relevant?",
    options: [
      "Increase raw event retention without review",
      "Consider ethical risks in real-time personalisation",
      "Avoid monitoring model outputs",
      "Remove explainability from the pipeline"
    ],
    answer: 1,
    explanation: "Using sensitive behaviour demands deliberate consideration of the ethical risks of real-time personalisation."
  },
  {
    id: 276, lec: 10, clo: "3.1",
    q: "A stream-processing job becomes unstable because a few hot keys dominate state and partitions. Which mitigation direction best fits the problem?",
    options: [
      "Ignore the skew and increase dashboard refreshes",
      "Use only offline mining after all events are stored",
      "Apply partitioning, monitoring, and approximation where suitable",
      "Remove checkpoints and schemas from the pipeline"
    ],
    answer: 2,
    explanation: "Hot-key skew is addressed by smarter partitioning, monitoring the skew, and using approximation where exactness is not required."
  },
  {
    id: 277, lec: 10, clo: "3.1",
    q: "A streaming system receives late, duplicate, and out-of-order events. Which design combination best supports correctness and recovery?",
    options: [
      "Manual sampling and static reports",
      "One-time batch scans and archived logs",
      "Raw storage without timestamps",
      "Watermarks, checkpoints, careful schemas, and monitoring"
    ],
    answer: 3,
    explanation: "Watermarks handle lateness/out-of-order, checkpoints enable recovery, schemas keep data consistent, and monitoring catches problems — together they ensure correctness."
  },

  /* ===================== LEC 11 — Responsible Data Mining ===================== */
  {
    id: 278, lec: 11, clo: "1",
    q: "Which framing best captures responsible data mining in big data analytics?",
    options: [
      "Maximising prediction accuracy while ignoring governance",
      "Collecting all available data before defining purpose",
      "Balancing value, risk, and governance",
      "Replacing human judgement with automated decisions"
    ],
    answer: 2,
    explanation: "Responsible data mining balances the value created against the risks incurred, under appropriate governance — not accuracy or data volume alone."
  },
  {
    id: 279, lec: 11, clo: "1",
    q: "What should responsible analytics design balance?",
    options: [
      "Useful mining, rights, trust, and accountability",
      "Data volume, file size, dashboards, and reports",
      "Prediction speed, advertising reach, and storage growth",
      "Automation, hidden profiling, and unrestricted reuse"
    ],
    answer: 0,
    explanation: "Good design balances useful analytics with individual rights, user trust, and accountability for outcomes."
  },
  {
    id: 280, lec: 11, clo: "1",
    q: "Which example best illustrates invisible data mining in shopping systems?",
    options: [
      "Changing the font size of a product catalogue",
      "Recommendations, coupons, and market baskets",
      "Scanning paper receipts without storing them",
      "Writing product descriptions manually"
    ],
    answer: 1,
    explanation: "Recommendations, targeted coupons, and market-basket analysis mine customer behaviour behind the scenes — 'invisible' to the shopper."
  },
  {
    id: 281, lec: 11, clo: "1",
    q: "Why is privacy risk amplified when datasets are combined?",
    options: [
      "Combined datasets remove all inference risk",
      "Combined datasets reduce the need for governance",
      "New sensitive information can be inferred through linkage",
      "Records become anonymous once stored in larger databases"
    ],
    answer: 2,
    explanation: "Linking datasets enables inferences neither set revealed alone, so combining data can expose new sensitive information."
  },
  {
    id: 282, lec: 11, clo: "1",
    q: "Which situation best illustrates privacy risk from linkage?",
    options: [
      "Loyalty, location, browsing, and purchase data are connected",
      "A dataset is deleted after its retention period ends",
      "Access is restricted using role-based permissions",
      "A model card documents intended system use"
    ],
    answer: 0,
    explanation: "Joining loyalty, location, browsing, and purchase data builds a detailed profile — the classic linkage privacy risk. The others are safeguards."
  },
  {
    id: 283, lec: 11, clo: "1",
    q: "What does data minimisation require in analytics projects?",
    options: [
      "Keeping all data for future unknown purposes",
      "Collecting extra variables to improve convenience",
      "Sharing raw records with every project team",
      "Collecting only data necessary for the stated purpose"
    ],
    answer: 3,
    explanation: "Data minimisation means collecting and keeping only what the stated purpose actually needs — nothing 'just in case'."
  },
  {
    id: 284, lec: 11, clo: "1",
    q: "What does purpose limitation require before collecting data?",
    options: [
      "Publishing all raw data for reuse",
      "Defining a legitimate and specific purpose",
      "Removing all documentation from the pipeline",
      "Training models before governance review"
    ],
    answer: 1,
    explanation: "Purpose limitation requires defining a legitimate, specific purpose up front, so data is not later repurposed without justification."
  },
  {
    id: 285, lec: 11, clo: "2",
    q: "A recommender system improves personalisation but also narrows user exposure to alternative views. Which ethical risk is most relevant?",
    options: ["Storage limitation", "Data retention", "Filter bubbles", "Encryption overhead"],
    answer: 2,
    explanation: "When personalisation narrows what users see, it creates filter bubbles that limit exposure to diverse perspectives."
  },
  {
    id: 286, lec: 11, clo: "2",
    q: "A fraud model detects risky transactions early but incorrectly blocks some legitimate customers. Which paired value and harm is shown?",
    options: [
      "Early detection and unfair denial of service",
      "Data integration and stronger consent",
      "Model transparency and reduced inference",
      "Access control and lower accountability"
    ],
    answer: 0,
    explanation: "The value is early fraud detection; the harm is false positives that unfairly deny service to legitimate customers."
  },
  {
    id: 287, lec: 11, clo: "2",
    q: "Which lifecycle sequence best represents responsible analytics governance?",
    options: [
      "Model, deploy, advertise, archive, ignore, repeat",
      "Collect, publish, automate, delete, predict, sell",
      "Store, visualise, report, rank, advertise, export",
      "Collect, store, process, model, deploy, share"
    ],
    answer: 3,
    explanation: "A responsible lifecycle proceeds collect → store → process → model → deploy → share, with governance applied at each stage."
  },
  {
    id: 288, lec: 11, clo: "2",
    q: "Which governance issue belongs most directly to the storage stage of an analytics lifecycle?",
    options: ["Sentiment classification", "Security and retention", "Feature ranking", "Dashboard colour coding"],
    answer: 1,
    explanation: "Storage governance concerns how securely data is kept and for how long — security and retention."
  },
  {
    id: 289, lec: 11, clo: "1",
    q: "Which privacy harm belongs to the collection category?",
    options: ["Surveillance", "Disclosure", "Exposure", "Increased accessibility"],
    answer: 0,
    explanation: "In Solove's taxonomy, surveillance is a harm of the data-collection stage. Disclosure, exposure and increased accessibility are dissemination harms."
  },
  {
    id: 290, lec: 11, clo: "1",
    q: "Which privacy harm belongs to the dissemination category?",
    options: ["Interrogation", "Aggregation", "Disclosure", "Identification"],
    answer: 2,
    explanation: "Disclosure (revealing information about a person) is a dissemination harm. Interrogation is collection; aggregation and identification are processing harms."
  },
  {
    id: 291, lec: 11, clo: "2",
    q: "How should privacy-preserving analytics techniques be selected?",
    options: [
      "By choosing the newest tool in the software stack",
      "By applying the same method to every dataset",
      "By maximising data access for all analysts",
      "By matching the technique to the use case and threat model"
    ],
    answer: 3,
    explanation: "The right technique depends on the specific use case and the threats you are defending against — not novelty or uniformity."
  },
  {
    id: 292, lec: 11, clo: "2",
    q: "Which privacy-preserving approach trains models without centralising raw data?",
    options: ["Access control", "Federated learning", "Manual inspection", "Data duplication"],
    answer: 1,
    explanation: "Federated learning trains across decentralised devices/sites and shares only model updates, so raw data never leaves its source."
  },
  {
    id: 293, lec: 11, clo: "2",
    q: "What is the main intuition behind differential privacy?",
    options: [
      "Every individual record is published with stronger labels",
      "Every model decision is reviewed by the data subject",
      "Aggregate results change little when one person is included or excluded",
      "Sensitive attributes are kept only in the original raw dataset"
    ],
    answer: 2,
    explanation: "Differential privacy guarantees that any single person's presence or absence barely changes the output, so individuals cannot be singled out."
  },
  {
    id: 294, lec: 11, clo: "2",
    q: "Which trade-off is central to differential privacy?",
    options: [
      "More privacy with less precision, or more precision with less privacy",
      "More dashboards with fewer models, or more models with fewer dashboards",
      "More labels with less storage, or more storage with fewer labels",
      "More automation with less documentation, or more data with fewer controls"
    ],
    answer: 0,
    explanation: "Adding noise for privacy reduces accuracy; the core tension is privacy versus precision (utility)."
  },
  {
    id: 295, lec: 11, clo: "2",
    q: "A credit model excludes ethnicity but uses postcode, employment history, and transactions. Which risk should be assessed?",
    options: ["Schema evolution", "Data compression", "Storage duplication", "Proxy discrimination"],
    answer: 3,
    explanation: "Features like postcode can correlate with protected attributes, so the model may discriminate via proxies even though ethnicity is excluded."
  },
  {
    id: 296, lec: 11, clo: "2",
    q: "A predictive model performs poorly for groups underrepresented in the training data. Which issue is most relevant?",
    options: [
      "Encryption at rest",
      "Data gaps and unequal model accuracy",
      "Lower storage cost",
      "Improved documentation quality"
    ],
    answer: 1,
    explanation: "Underrepresentation creates data gaps that cause unequal accuracy across groups — a fairness problem."
  },
  {
    id: 297, lec: 11, clo: "3",
    q: "Why is model explanation alone weak for high-stakes decisions?",
    options: [
      "It removes all responsibility from the organisation",
      "It guarantees that every model is fair",
      "Affected people also need contest, correction, and appeal pathways",
      "Affected people can infer the training data automatically"
    ],
    answer: 2,
    explanation: "Explaining a decision is not enough; affected individuals also need ways to contest it, correct errors, and appeal — full accountability."
  },
  {
    id: 298, lec: 11, clo: "3",
    q: "Which combination best supports accountability in high-stakes analytics?",
    options: [
      "Explanation, appeal, correction, and assigned responsibility",
      "Accuracy, speed, automation, and hidden thresholds",
      "Large datasets, longer retention, and limited access review",
      "More features, fewer audits, and automated escalation"
    ],
    answer: 0,
    explanation: "Accountability needs explanations, appeal and correction routes, and a clearly assigned responsible owner."
  },
  {
    id: 299, lec: 11, clo: "2",
    q: "Which security control limits data access to what a role requires?",
    options: ["Data visualisation", "Feature scaling", "Model scoring", "Least privilege"],
    answer: 3,
    explanation: "The principle of least privilege grants each role only the access it needs, limiting exposure."
  },
  {
    id: 300, lec: 11, clo: "2",
    q: "Which set best represents operational privacy protections in a data pipeline?",
    options: [
      "Market baskets, clustering, and ranking",
      "Logging, monitoring, encryption, and deletion",
      "Prediction, personalisation, and automation",
      "Sampling, tokenisation, and stemming"
    ],
    answer: 1,
    explanation: "Operational privacy controls include logging, monitoring, encryption, and timely deletion — the others are analytics tasks, not protections."
  },
  {
    id: 301, lec: 11, clo: "3",
    q: "A university uses learning analytics to predict students likely to fail and sends automated advisor alerts. Which safeguard best supports responsible use?",
    options: [
      "Hide the model logic to reduce student concern",
      "Retain all LMS data for future unspecified projects",
      "Inform students, monitor fairness, and allow review of alerts",
      "Replace advisors with fully automated interventions"
    ],
    answer: 2,
    explanation: "Responsible use means transparency to students, fairness monitoring, and human review of alerts rather than secrecy or full automation."
  },
  {
    id: 302, lec: 11, clo: "3",
    q: "A student-risk dashboard may support students but also create stigma. Which design choice best reduces this risk?",
    options: [
      "Use explainable alerts with human oversight and appeal",
      "Send risk labels to all staff without access limits",
      "Use hidden behavioural scores without documentation",
      "Remove student agency from intervention decisions"
    ],
    answer: 0,
    explanation: "Explainable alerts, human oversight, and an appeal route reduce stigma and protect student agency."
  },
  {
    id: 303, lec: 11, clo: "3",
    q: "A hospital wants to use social media posts and likes to predict health risk. Which ethical concern is most important?",
    options: [
      "The model may require fewer dashboard filters",
      "The data may contain too many duplicate records",
      "The analysis may reduce database storage cost",
      "Public data may become sensitive in a health context"
    ],
    answer: 3,
    explanation: "Even public posts can become highly sensitive when used to infer health, so context-of-use is the key ethical concern."
  },
  {
    id: 304, lec: 11, clo: "3",
    q: "A research team uses public social media data for clinical recruitment. Which principle should guide the evaluation?",
    options: [
      "Use any public data without further review",
      "Consider consent, stigma, targeting, and context of use",
      "Optimise recruitment speed above data subject expectations",
      "Treat likes and location data as non-sensitive by default"
    ],
    answer: 1,
    explanation: "Public availability does not remove ethical duties; consent, potential stigma, targeting, and context of use must all be weighed."
  },
  {
    id: 305, lec: 11, clo: "3",
    q: "A policing risk model directs more patrols to areas already heavily monitored. Which failure mode should be assessed?",
    options: [
      "Reduced auditability from excessive documentation",
      "Lower re-identification risk from public data",
      "A feedback loop that reinforces recorded incident patterns",
      "Improved due process from automated alerts"
    ],
    answer: 2,
    explanation: "More patrols record more incidents in already-watched areas, which feeds back into the model — a self-reinforcing bias loop."
  },
  {
    id: 306, lec: 11, clo: "3",
    q: "A public safety analytics system produces alerts that may affect rights and mobility. Which requirement is most important?",
    options: [
      "Due process, explanation, and accountability",
      "Unrestricted model reuse across departments",
      "Longer retention without review",
      "Hidden thresholds to prevent public criticism"
    ],
    answer: 0,
    explanation: "When decisions affect people's rights and freedom of movement, due process, explanation, and accountability are essential."
  },
  {
    id: 307, lec: 11, clo: "3",
    q: "A retailer combines loyalty and location data to personalise prices. Which responsible analytics response is most appropriate?",
    options: [
      "Expand data collection before defining a purpose",
      "Use hidden price models without customer explanation",
      "Keep all linked data indefinitely for future mining",
      "Define purpose, minimise data, test fairness, and provide oversight"
    ],
    answer: 3,
    explanation: "Personalised pricing should follow purpose definition, data minimisation, fairness testing, and oversight to stay responsible."
  },
  {
    id: 308, lec: 11, clo: "3",
    q: "A hospital plans to prioritise outreach using social media signals. Which governance plan best fits responsible analytics?",
    options: [
      "Collect all available posts and automate outreach without review",
      "Clarify purpose, minimise signals, assess harm, and add human oversight",
      "Avoid documentation so the model can adapt quickly",
      "Share raw social media profiles with all clinical teams"
    ],
    answer: 1,
    explanation: "Responsible governance clarifies purpose, minimises the signals used, assesses potential harm, and keeps humans in the loop."
  },
  {
    id: 309, lec: 11, clo: "1",
    q: "Which framing best captures responsible data mining in big data analytics?",
    options: [
      "Maximising prediction accuracy while ignoring governance",
      "Collecting all available data before defining purpose",
      "Balancing value, risk, and governance",
      "Replacing human judgement with automated decisions"
    ],
    answer: 2,
    explanation: "Responsible data mining balances the value created against the risks incurred, under appropriate governance."
  },
  {
    id: 310, lec: 11, clo: "1",
    q: "What should responsible analytics design balance?",
    options: [
      "Useful mining, rights, trust, and accountability",
      "Data volume, file size, dashboards, and reports",
      "Prediction speed, advertising reach, and storage growth",
      "Automation, hidden profiling, and unrestricted reuse"
    ],
    answer: 0,
    explanation: "Good design balances useful analytics with individual rights, user trust, and accountability."
  },
  {
    id: 311, lec: 11, clo: "1",
    q: "Which example best illustrates invisible data mining in shopping systems?",
    options: [
      "Changing the font size of a product catalogue",
      "Recommendations, coupons, and market baskets",
      "Scanning paper receipts without storing them",
      "Writing product descriptions manually"
    ],
    answer: 1,
    explanation: "Recommendations, targeted coupons, and market-basket analysis mine customer behaviour invisibly to the shopper."
  },
  {
    id: 312, lec: 11, clo: "1",
    q: "Why is privacy risk amplified when datasets are combined?",
    options: [
      "Combined datasets remove all inference risk",
      "Combined datasets reduce the need for governance",
      "New sensitive information can be inferred through linkage",
      "Records become anonymous once stored in larger databases"
    ],
    answer: 2,
    explanation: "Linking datasets enables inferences neither set revealed alone, exposing new sensitive information."
  },
  {
    id: 313, lec: 11, clo: "1",
    q: "Which situation best illustrates privacy risk from linkage?",
    options: [
      "Loyalty, location, browsing, and purchase data are connected",
      "A dataset is deleted after its retention period ends",
      "Access is restricted using role-based permissions",
      "A model card documents intended system use"
    ],
    answer: 0,
    explanation: "Joining loyalty, location, browsing, and purchase data builds a detailed profile — the classic linkage risk."
  },
  {
    id: 314, lec: 11, clo: "1",
    q: "What does data minimisation require in analytics projects?",
    options: [
      "Keeping all data for future unknown purposes",
      "Collecting extra variables to improve convenience",
      "Sharing raw records with every project team",
      "Collecting only data necessary for the stated purpose"
    ],
    answer: 3,
    explanation: "Data minimisation means collecting and keeping only what the stated purpose needs."
  },
  {
    id: 315, lec: 11, clo: "1",
    q: "What does purpose limitation require before collecting data?",
    options: [
      "Publishing all raw data for reuse",
      "Defining a legitimate and specific purpose",
      "Removing all documentation from the pipeline",
      "Training models before governance review"
    ],
    answer: 1,
    explanation: "Purpose limitation requires defining a legitimate, specific purpose before collection."
  },
  {
    id: 316, lec: 11, clo: "2",
    q: "A recommender system improves personalisation but also narrows user exposure to alternative views. Which ethical risk is most relevant?",
    options: ["Storage limitation", "Data retention", "Filter bubbles", "Encryption overhead"],
    answer: 2,
    explanation: "Narrowing what users see creates filter bubbles that limit diverse perspectives."
  },
  {
    id: 317, lec: 11, clo: "2",
    q: "A fraud model detects risky transactions early but incorrectly blocks some legitimate customers. Which paired value and harm is shown?",
    options: [
      "Early detection and unfair denial of service",
      "Data integration and stronger consent",
      "Model transparency and reduced inference",
      "Access control and lower accountability"
    ],
    answer: 0,
    explanation: "The value is early fraud detection; the harm is false positives that unfairly deny service."
  },
  {
    id: 318, lec: 11, clo: "2",
    q: "Which lifecycle sequence best represents responsible analytics governance?",
    options: [
      "Model, deploy, advertise, archive, ignore, repeat",
      "Collect, publish, automate, delete, predict, sell",
      "Store, visualise, report, rank, advertise, export",
      "Collect, store, process, model, deploy, share"
    ],
    answer: 3,
    explanation: "A responsible lifecycle proceeds collect → store → process → model → deploy → share with governance throughout."
  },
  {
    id: 319, lec: 11, clo: "2",
    q: "Which governance issue belongs most directly to the storage stage of an analytics lifecycle?",
    options: ["Sentiment classification", "Security and retention", "Feature ranking", "Dashboard colour coding"],
    answer: 1,
    explanation: "Storage governance is about how securely and how long data is kept — security and retention."
  },
  {
    id: 320, lec: 11, clo: "1",
    q: "Which privacy harm belongs to the collection category?",
    options: ["Surveillance", "Disclosure", "Exposure", "Increased accessibility"],
    answer: 0,
    explanation: "Surveillance is a collection-stage harm; the others are dissemination harms."
  },
  {
    id: 321, lec: 11, clo: "1",
    q: "Which privacy harm belongs to the dissemination category?",
    options: ["Interrogation", "Aggregation", "Disclosure", "Identification"],
    answer: 2,
    explanation: "Disclosure is a dissemination harm; interrogation is collection, and aggregation/identification are processing harms."
  },
  {
    id: 322, lec: 11, clo: "2",
    q: "How should privacy-preserving analytics techniques be selected?",
    options: [
      "By choosing the newest tool in the software stack",
      "By applying the same method to every dataset",
      "By maximising data access for all analysts",
      "By matching the technique to the use case and threat model"
    ],
    answer: 3,
    explanation: "The right technique depends on the specific use case and threat model, not novelty or uniformity."
  },
  {
    id: 323, lec: 11, clo: "2",
    q: "Which privacy-preserving approach trains models without centralising raw data?",
    options: ["Access control", "Federated learning", "Manual inspection", "Data duplication"],
    answer: 1,
    explanation: "Federated learning shares only model updates, keeping raw data at its source."
  },
  {
    id: 324, lec: 11, clo: "2",
    q: "What is the main intuition behind differential privacy?",
    options: [
      "Every individual record is published with stronger labels",
      "Every model decision is reviewed by the data subject",
      "Aggregate results change little when one person is included or excluded",
      "Sensitive attributes are kept only in the original raw dataset"
    ],
    answer: 2,
    explanation: "Differential privacy ensures any single person's presence barely changes the output, preventing singling-out."
  },
  {
    id: 325, lec: 11, clo: "2",
    q: "Which trade-off is central to differential privacy?",
    options: [
      "More privacy with less precision, or more precision with less privacy",
      "More dashboards with fewer models, or more models with fewer dashboards",
      "More labels with less storage, or more storage with fewer labels",
      "More automation with less documentation, or more data with fewer controls"
    ],
    answer: 0,
    explanation: "Noise added for privacy reduces accuracy: the core tension is privacy versus precision."
  },
  {
    id: 326, lec: 11, clo: "2",
    q: "A credit model excludes ethnicity but uses postcode, employment history, and transactions. Which risk should be assessed?",
    options: ["Schema evolution", "Data compression", "Storage duplication", "Proxy discrimination"],
    answer: 3,
    explanation: "Postcode and similar features can proxy for protected attributes, risking proxy discrimination."
  },
  {
    id: 327, lec: 11, clo: "2",
    q: "A predictive model performs poorly for groups underrepresented in the training data. Which issue is most relevant?",
    options: [
      "Encryption at rest",
      "Data gaps and unequal model accuracy",
      "Lower storage cost",
      "Improved documentation quality"
    ],
    answer: 1,
    explanation: "Underrepresentation causes data gaps and unequal accuracy across groups — a fairness issue."
  },
  {
    id: 328, lec: 11, clo: "3",
    q: "Why is model explanation alone weak for high-stakes decisions?",
    options: [
      "It removes all responsibility from the organisation",
      "It guarantees that every model is fair",
      "Affected people also need contest, correction, and appeal pathways",
      "Affected people can infer the training data automatically"
    ],
    answer: 2,
    explanation: "Explanation must be paired with contest, correction, and appeal routes for genuine accountability."
  },
  {
    id: 329, lec: 11, clo: "3",
    q: "Which combination best supports accountability in high-stakes analytics?",
    options: [
      "Explanation, appeal, correction, and assigned responsibility",
      "Accuracy, speed, automation, and hidden thresholds",
      "Large datasets, longer retention, and limited access review",
      "More features, fewer audits, and automated escalation"
    ],
    answer: 0,
    explanation: "Accountability needs explanation, appeal, correction, and a clearly assigned responsible owner."
  },
  {
    id: 330, lec: 11, clo: "2",
    q: "Which security control limits data access to what a role requires?",
    options: ["Data visualisation", "Feature scaling", "Model scoring", "Least privilege"],
    answer: 3,
    explanation: "Least privilege grants each role only the access it needs."
  },
  {
    id: 331, lec: 11, clo: "2",
    q: "Which set best represents operational privacy protections in a data pipeline?",
    options: [
      "Market baskets, clustering, and ranking",
      "Logging, monitoring, encryption, and deletion",
      "Prediction, personalisation, and automation",
      "Sampling, tokenisation, and stemming"
    ],
    answer: 1,
    explanation: "Logging, monitoring, encryption, and deletion are operational privacy protections."
  },
  {
    id: 332, lec: 11, clo: "3",
    q: "A university uses learning analytics to predict students likely to fail and sends automated advisor alerts. Which safeguard best supports responsible use?",
    options: [
      "Hide the model logic to reduce student concern",
      "Retain all LMS data for future unspecified projects",
      "Inform students, monitor fairness, and allow review of alerts",
      "Replace advisors with fully automated interventions"
    ],
    answer: 2,
    explanation: "Transparency, fairness monitoring, and human review of alerts make learning analytics responsible."
  },
  {
    id: 333, lec: 11, clo: "3",
    q: "A student-risk dashboard may support students but also create stigma. Which design choice best reduces this risk?",
    options: [
      "Use explainable alerts with human oversight and appeal",
      "Send risk labels to all staff without access limits",
      "Use hidden behavioural scores without documentation",
      "Remove student agency from intervention decisions"
    ],
    answer: 0,
    explanation: "Explainable alerts with oversight and appeal reduce stigma and preserve student agency."
  },
  {
    id: 334, lec: 11, clo: "3",
    q: "A hospital wants to use social media posts and likes to predict health risk. Which ethical concern is most important?",
    options: [
      "The model may require fewer dashboard filters",
      "The data may contain too many duplicate records",
      "The analysis may reduce database storage cost",
      "Public data may become sensitive in a health context"
    ],
    answer: 3,
    explanation: "Public posts can become sensitive when used to infer health — context of use is the key concern."
  },
  {
    id: 335, lec: 11, clo: "3",
    q: "A research team uses public social media data for clinical recruitment. Which principle should guide the evaluation?",
    options: [
      "Use any public data without further review",
      "Consider consent, stigma, targeting, and context of use",
      "Optimise recruitment speed above data subject expectations",
      "Treat likes and location data as non-sensitive by default"
    ],
    answer: 1,
    explanation: "Consent, stigma, targeting, and context of use must all be weighed even for public data."
  },
  {
    id: 336, lec: 11, clo: "3",
    q: "A policing risk model directs more patrols to areas already heavily monitored. Which failure mode should be assessed?",
    options: [
      "Reduced auditability from excessive documentation",
      "Lower re-identification risk from public data",
      "A feedback loop that reinforces recorded incident patterns",
      "Improved due process from automated alerts"
    ],
    answer: 2,
    explanation: "More patrols record more incidents in watched areas, creating a self-reinforcing feedback loop."
  },
  {
    id: 337, lec: 11, clo: "3",
    q: "A public safety analytics system produces alerts that may affect rights and mobility. Which requirement is most important?",
    options: [
      "Due process, explanation, and accountability",
      "Unrestricted model reuse across departments",
      "Longer retention without review",
      "Hidden thresholds to prevent public criticism"
    ],
    answer: 0,
    explanation: "Decisions affecting rights and mobility require due process, explanation, and accountability."
  },
  {
    id: 338, lec: 11, clo: "3",
    q: "A retailer combines loyalty and location data to personalise prices. Which responsible analytics response is most appropriate?",
    options: [
      "Expand data collection before defining a purpose",
      "Use hidden price models without customer explanation",
      "Keep all linked data indefinitely for future mining",
      "Define purpose, minimise data, test fairness, and provide oversight"
    ],
    answer: 3,
    explanation: "Personalised pricing should follow purpose definition, data minimisation, fairness testing, and oversight."
  },
  {
    id: 339, lec: 11, clo: "3",
    q: "A hospital plans to prioritise outreach using social media signals. Which governance plan best fits responsible analytics?",
    options: [
      "Collect all available posts and automate outreach without review",
      "Clarify purpose, minimise signals, assess harm, and add human oversight",
      "Avoid documentation so the model can adapt quickly",
      "Share raw social media profiles with all clinical teams"
    ],
    answer: 1,
    explanation: "Clarifying purpose, minimising signals, assessing harm, and adding human oversight is the responsible governance plan."
  },

  /* ===================== LEC 12 — Advanced Mining (IoT, Edge & AI) ===================== */
  {
    id: 340, lec: 12, clo: "1.1",
    q: "What is the core idea behind advanced big data mining systems?",
    options: [
      "Replacing all cloud platforms with local spreadsheets",
      "Connecting sensors, edge devices, cloud platforms, AI models, and governance",
      "Storing all raw data centrally before any processing occurs",
      "Using only classical mining algorithms on historical datasets"
    ],
    answer: 1,
    explanation: "Advanced systems integrate the whole stack — sensors, edge, cloud, AI models, and governance — into one connected pipeline."
  },
  {
    id: 341, lec: 12, clo: "1.1",
    q: "What role does IoT play in big data mining?",
    options: [
      "It replaces the need for data acquisition",
      "It removes high-volume and high-velocity data",
      "It prevents the use of edge analytics",
      "It generates distributed data from sensors and smart devices"
    ],
    answer: 3,
    explanation: "IoT is a major data source: sensors and smart devices generate large volumes of distributed, high-velocity data."
  },
  {
    id: 342, lec: 12, clo: "1.1",
    q: "What is the main role of edge analytics?",
    options: [
      "To delay all decisions until monthly batch processing",
      "To remove the need for any cloud storage",
      "To process selected data near the source",
      "To centralise all raw device streams immediately"
    ],
    answer: 2,
    explanation: "Edge analytics processes data near where it is generated, reducing latency and bandwidth before sending summaries onward."
  },
  {
    id: 343, lec: 12, clo: "1.2",
    q: "Which layer is best suited for training, large joins, pattern mining, governance, and reporting?",
    options: ["Cloud or cluster", "Device sensor", "Local threshold rule", "Edge cache"],
    answer: 0,
    explanation: "Heavy, global work — training, large joins, mining, governance, reporting — belongs in the resource-rich cloud/cluster layer."
  },
  {
    id: 344, lec: 12, clo: "1.2",
    q: "Which layer is best suited for filtering, aggregation, anomaly detection, and local dashboards over nearby streams?",
    options: ["Data warehouse archive", "Model registry", "Historical report layer", "Edge gateway"],
    answer: 3,
    explanation: "Local, low-latency tasks over nearby streams — filtering, aggregation, anomaly detection, local dashboards — run on the edge gateway."
  },
  {
    id: 345, lec: 12, clo: "3.1",
    q: "How does AI increasingly contribute to big data pipelines?",
    options: [
      "It is used only after all governance decisions are removed",
      "It replaces the need for monitoring and evaluation",
      "It supports acquisition, preparation, modelling, decision support, and monitoring",
      "It applies only to static reports produced after mining"
    ],
    answer: 2,
    explanation: "AI now assists across the whole pipeline — acquisition, preparation, modelling, decision support, and monitoring — not just one stage."
  },
  {
    id: 346, lec: 12, clo: "3.1",
    q: "Which activity is an example of AI-assisted data preparation?",
    options: [
      "Ignoring schema changes in raw streams",
      "Automated cleaning, schema matching, and anomaly detection",
      "Deleting model monitoring dashboards",
      "Avoiding feature and representation learning"
    ],
    answer: 1,
    explanation: "AI-assisted preparation automates cleaning, schema matching, and anomaly detection — tasks that were once manual."
  },
  {
    id: 347, lec: 12, clo: "1.2",
    q: "A smart factory needs immediate safety alerts from machine sensors while still keeping historical data for model training. Which architecture is most appropriate?",
    options: [
      "Cloud-only storage with no local processing",
      "Device-only processing with no model updates",
      "A hybrid edge-cloud architecture",
      "A manual batch-reporting workflow"
    ],
    answer: 2,
    explanation: "Immediate alerts need edge processing; historical training needs the cloud — a hybrid edge-cloud architecture serves both."
  },
  {
    id: 348, lec: 12, clo: "1.2",
    q: "A city traffic system must react quickly to local congestion and later analyse long-term mobility patterns. Which placement decision is best?",
    options: [
      "Run all tasks only on individual sensors",
      "Send all raw events to storage before any action",
      "Avoid edge processing because cloud training exists",
      "Use edge processing for rapid response and cloud processing for historical learning"
    ],
    answer: 3,
    explanation: "Edge handles the fast local reaction; the cloud handles long-term historical learning — split the work by latency need."
  },
  {
    id: 349, lec: 12, clo: "1.1",
    q: "Why is edge computing useful for high-volume IoT streams?",
    options: [
      "It reduces bandwidth by sending useful events, features, or summaries",
      "It requires every raw event to be transferred unchanged",
      "It prevents any local inference or anomaly detection",
      "It removes the need to consider latency or privacy"
    ],
    answer: 0,
    explanation: "By filtering/summarising at the edge, only useful events or features are sent upstream, cutting bandwidth dramatically."
  },
  {
    id: 350, lec: 12, clo: "1.1",
    q: "A wearable device produces sensitive physiological signals during a live event. Which edge motivation is most relevant?",
    options: [
      "Increasing raw data transfer to the cloud",
      "Removing all local processing from the device",
      "Keeping sensitive data local when possible",
      "Delaying alerts until historical analysis is complete"
    ],
    answer: 2,
    explanation: "Processing sensitive physiological data on-device keeps it local, improving privacy — a key motivation for edge computing."
  },
  {
    id: 351, lec: 12, clo: "1.2",
    q: "Which edge analytics pattern computes rolling counts, averages, rates, or sketches over recent data?",
    options: ["Model registry", "Windowed aggregation", "Cloud governance reporting", "Data lakehouse storage"],
    answer: 1,
    explanation: "Windowed aggregation computes rolling statistics (counts, averages, rates, sketches) over recent time windows at the edge."
  },
  {
    id: 352, lec: 12, clo: "1.2",
    q: "Which edge analytics pattern keeps only events that satisfy quality, threshold, location, or priority rules?",
    options: ["Event filtering", "Model cards", "Batch training", "Digital twins"],
    answer: 0,
    explanation: "Event filtering passes through only events meeting the defined rules, discarding the rest at the edge."
  },
  {
    id: 353, lec: 12, clo: "1.2",
    q: "Which design principle should guide tool selection for edge and IoT big data systems?",
    options: [
      "Choose the newest tool regardless of task requirements",
      "Use one tool for capture, streaming, storage, AI lifecycle, and governance",
      "Avoid fault tolerance and state management in tool decisions",
      "Choose tools based on data movement, latency, governance, and ML integration"
    ],
    answer: 3,
    explanation: "Tool choice should be driven by the system's real needs — data movement, latency, governance, and ML integration — not novelty or one-size-fits-all."
  },
  {
    id: 354, lec: 12, clo: "1.2",
    q: "Which tool category is mainly associated with MQTT, HTTP, OPC-UA, and device SDKs?",
    options: ["Model evaluation", "Data capture", "Feature serving", "Model registry"],
    answer: 1,
    explanation: "MQTT, HTTP, OPC-UA, and device SDKs are protocols/tools for data capture — getting events off devices into the pipeline."
  },
  {
    id: 355, lec: 12, clo: "3.1",
    q: "A crowd-health system uses wearables, environmental sensors, density data, and location signals. Which task is most suitable for the edge layer?",
    options: [
      "Local feature fusion and near-real-time risk scoring",
      "Long-term policy reporting only",
      "Historical model governance only",
      "Large-scale offline training only"
    ],
    answer: 0,
    explanation: "Combining nearby signals and scoring risk in near-real-time is a low-latency, local task — ideal for the edge."
  },
  {
    id: 356, lec: 12, clo: "3.1",
    q: "In a smart crowd-health pipeline, which task is most suitable for the cloud learning layer?",
    options: [
      "Immediate threshold checks on a wearable",
      "Local buffering during network outages",
      "Historical mining, training, audit, and reporting",
      "On-device vibration sensing"
    ],
    answer: 2,
    explanation: "Historical mining, model training, audit, and reporting are heavy global tasks suited to the cloud learning layer."
  },
  {
    id: 357, lec: 12, clo: "3.1",
    q: "Why does lifecycle thinking matter in AI-enabled big data mining?",
    options: [
      "It removes the need for feature engineering",
      "It limits mining to one historical dataset",
      "It prevents monitoring after deployment",
      "It considers deployment, monitoring, risk, feedback, and retraining"
    ],
    answer: 3,
    explanation: "Lifecycle thinking treats a model as a living system — covering deployment, monitoring, risk, feedback, and retraining — not a one-off build."
  },
  {
    id: 358, lec: 12, clo: "3.1",
    q: "Which sequence best represents an AI-enabled mining lifecycle?",
    options: [
      "Data, features, model, deploy, monitor, improve",
      "Archive, delete, ignore, report, publish, stop",
      "Sensor, table, dashboard, memo, print, file",
      "Collect, centralise, automate, hide, reuse, discard"
    ],
    answer: 0,
    explanation: "The AI-enabled lifecycle flows data → features → model → deploy → monitor → improve, looping back as the model is refined."
  },
  {
    id: 359, lec: 12, clo: "3.1",
    q: "What is an appropriate use of generative AI in big data mining work?",
    options: [
      "Treating generated outputs as verified truth without review",
      "Replacing all evidence-based validation with prompts",
      "Using it for explanation, exploration, code scaffolding, and documentation",
      "Allowing it to access sensitive prompts without guardrails"
    ],
    answer: 2,
    explanation: "Generative AI is best used as an assistant — for explanation, exploration, code scaffolding, and documentation — with human verification, not as ground truth."
  },
  {
    id: 360, lec: 12, clo: "3.1",
    q: "What is a key caution when using LLMs around big data systems?",
    options: [
      "They cannot assist with summaries or documentation",
      "They remove the need for verified data sources",
      "They guarantee traceable and correct analysis",
      "They can produce plausible but incorrect outputs or leak sensitive information"
    ],
    answer: 3,
    explanation: "LLMs can hallucinate plausible-but-wrong answers and may leak sensitive data, so their outputs must be verified and guarded."
  },
  {
    id: 361, lec: 12, clo: "3.1",
    q: "Which practice belongs to MLOps and LLMOps over big data platforms?",
    options: [
      "Versioning datasets, features, code, prompts, models, and evaluations",
      "Removing audit trails after deployment",
      "Ignoring latency, drift, fairness, and impact metrics",
      "Treating models as isolated classroom experiments"
    ],
    answer: 0,
    explanation: "MLOps/LLMOps version every artefact — data, features, code, prompts, models, evaluations — for reproducibility and governance."
  },
  {
    id: 362, lec: 12, clo: "3.1",
    q: "Which operational discipline supports responsible AI deployment in production?",
    options: [
      "Using hidden models without approval workflows",
      "Relying only on offline accuracy and ignoring online effects",
      "Governance through lineage, access control, audit trails, and model cards",
      "Avoiding orchestration across batch, stream, and edge deployments"
    ],
    answer: 2,
    explanation: "Responsible production AI relies on governance — data lineage, access control, audit trails, and model cards."
  },
  {
    id: 363, lec: 12, clo: "3.2",
    q: "A hospital wants to improve models across multiple sites without centralising all raw patient records. Which direction is most appropriate?",
    options: [
      "Federated and privacy-preserving mining",
      "Raw-data centralisation without governance",
      "Uncontrolled prompt sharing",
      "Device-only inference with no model improvement"
    ],
    answer: 0,
    explanation: "Federated, privacy-preserving mining improves models across sites by sharing updates, not raw patient data."
  },
  {
    id: 364, lec: 12, clo: "3.2",
    q: "A network of edge devices trains locally and sends model updates to an aggregator. Which approach does this describe?",
    options: ["Data lakehouse indexing", "Digital twin simulation", "Federated learning", "Manual batch mining"],
    answer: 2,
    explanation: "Local training plus sharing only model updates to a central aggregator is the definition of federated learning."
  },
  {
    id: 365, lec: 12, clo: "3.2",
    q: "A company claims its architecture is AI-ready because it stores more raw data than before. Which evaluation is most appropriate?",
    options: [
      "The claim is sufficient because AI-ready architecture is mainly about storage size",
      "The claim is sufficient because raw data removes the need for lineage",
      "The claim is weak because AI-ready systems should avoid reusable features",
      "The claim is weak because AI-ready architecture also requires metadata, quality checks, lineage, access policies, and reusable features"
    ],
    answer: 3,
    explanation: "Storage volume alone is not AI-readiness; you also need metadata, quality checks, lineage, access policies, and reusable features."
  },
  {
    id: 366, lec: 12, clo: "3.2",
    q: "Which architecture best supports AI-ready data integration pressure?",
    options: [
      "A file dump with no ownership or quality expectations",
      "A lakehouse or data mesh with governed, reusable data products",
      "A spreadsheet workflow with manual copying",
      "A model-only pipeline without data lineage"
    ],
    answer: 1,
    explanation: "A lakehouse or data mesh treats data as governed, reusable products with ownership and quality — the foundation for AI-ready integration."
  },
  {
    id: 367, lec: 12, clo: "3.2",
    q: "A transport project combines logs, sensor readings, locations, video, and simulation models. Which future trend best describes this direction?",
    options: [
      "Single-table mining",
      "Manual reporting only",
      "Richer multimodal, spatio-temporal, graph, and digital-twin mining",
      "Centralised batch storage without AI"
    ],
    answer: 2,
    explanation: "Fusing logs, sensors, location, video, and simulation is the trend toward multimodal, spatio-temporal, graph, and digital-twin mining."
  },
  {
    id: 368, lec: 12, clo: "3.2",
    q: "A smart-city team builds a virtual representation of a transport system to monitor conditions and test scenarios. Which concept best fits this use case?",
    options: ["Digital twin", "Data capture protocol", "Prompt versioning", "Event filtering"],
    answer: 0,
    explanation: "A digital twin is a live virtual replica of a physical system used to monitor it and test 'what-if' scenarios."
  },
  {
    id: 369, lec: 12, clo: "3.2",
    q: "A data science team deploys an AI model over edge, stream, and cloud components. Which responsible AI approach should guide the project?",
    options: [
      "Deploy first, then consider risks only after failures occur",
      "Remove human oversight to improve automation speed",
      "Ignore privacy and fairness because the system is distributed",
      "Govern, map, measure, and manage risks across the lifecycle"
    ],
    answer: 3,
    explanation: "Responsible AI (e.g., the NIST framing) governs, maps, measures, and manages risks throughout the lifecycle — not after failures."
  },
  {
    id: 370, lec: 12, clo: "3.2",
    q: "An AI-enabled mining system may involve biased data, surveillance, re-identification, hallucination, and hard-to-contest decisions. Which response is most appropriate?",
    options: [
      "Treat responsible AI as a design requirement from problem definition to monitoring",
      "Add a short ethics note after deployment and continue unchanged",
      "Focus only on model accuracy because operational issues are separate",
      "Avoid documenting residual risks to reduce governance workload"
    ],
    answer: 0,
    explanation: "These risks demand that responsible AI be built in from problem definition through monitoring — not bolted on afterward."
  },
  {
    id: 371, lec: 12, clo: "1.1",
    q: "What is the core idea behind advanced big data mining systems?",
    options: [
      "Replacing all cloud platforms with local spreadsheets",
      "Connecting sensors, edge devices, cloud platforms, AI models, and governance",
      "Storing all raw data centrally before any processing occurs",
      "Using only classical mining algorithms on historical datasets"
    ],
    answer: 1,
    explanation: "Advanced systems integrate sensors, edge, cloud, AI models, and governance into one connected pipeline."
  },
  {
    id: 372, lec: 12, clo: "1.1",
    q: "What role does IoT play in big data mining?",
    options: [
      "It replaces the need for data acquisition",
      "It removes high-volume and high-velocity data",
      "It prevents the use of edge analytics",
      "It generates distributed data from sensors and smart devices"
    ],
    answer: 3,
    explanation: "IoT generates large volumes of distributed, high-velocity data from sensors and smart devices."
  },
  {
    id: 373, lec: 12, clo: "1.1",
    q: "What is the main role of edge analytics?",
    options: [
      "To delay all decisions until monthly batch processing",
      "To remove the need for any cloud storage",
      "To process selected data near the source",
      "To centralise all raw device streams immediately"
    ],
    answer: 2,
    explanation: "Edge analytics processes data near the source, cutting latency and bandwidth."
  },
  {
    id: 374, lec: 12, clo: "1.2",
    q: "Which layer is best suited for training, large joins, pattern mining, governance, and reporting?",
    options: ["Cloud or cluster", "Device sensor", "Local threshold rule", "Edge cache"],
    answer: 0,
    explanation: "Heavy global workloads belong in the resource-rich cloud/cluster layer."
  },
  {
    id: 375, lec: 12, clo: "1.2",
    q: "Which layer is best suited for filtering, aggregation, anomaly detection, and local dashboards over nearby streams?",
    options: ["Data warehouse archive", "Model registry", "Historical report layer", "Edge gateway"],
    answer: 3,
    explanation: "Local low-latency tasks over nearby streams run on the edge gateway."
  },
  {
    id: 376, lec: 12, clo: "3.1",
    q: "How does AI increasingly contribute to big data pipelines?",
    options: [
      "It is used only after all governance decisions are removed",
      "It replaces the need for monitoring and evaluation",
      "It supports acquisition, preparation, modelling, decision support, and monitoring",
      "It applies only to static reports produced after mining"
    ],
    answer: 2,
    explanation: "AI assists across the whole pipeline: acquisition, preparation, modelling, decision support, and monitoring."
  },
  {
    id: 377, lec: 12, clo: "3.1",
    q: "Which activity is an example of AI-assisted data preparation?",
    options: [
      "Ignoring schema changes in raw streams",
      "Automated cleaning, schema matching, and anomaly detection",
      "Deleting model monitoring dashboards",
      "Avoiding feature and representation learning"
    ],
    answer: 1,
    explanation: "AI-assisted preparation automates cleaning, schema matching, and anomaly detection."
  },
  {
    id: 378, lec: 12, clo: "1.2",
    q: "A smart factory needs immediate safety alerts from machine sensors while still keeping historical data for model training. Which architecture is most appropriate?",
    options: [
      "Cloud-only storage with no local processing",
      "Device-only processing with no model updates",
      "A hybrid edge-cloud architecture",
      "A manual batch-reporting workflow"
    ],
    answer: 2,
    explanation: "Immediate alerts (edge) plus historical training (cloud) call for a hybrid edge-cloud architecture."
  },
  {
    id: 379, lec: 12, clo: "1.2",
    q: "A city traffic system must react quickly to local congestion and later analyse long-term mobility patterns. Which placement decision is best?",
    options: [
      "Run all tasks only on individual sensors",
      "Send all raw events to storage before any action",
      "Avoid edge processing because cloud training exists",
      "Use edge processing for rapid response and cloud processing for historical learning"
    ],
    answer: 3,
    explanation: "Edge for the fast local reaction, cloud for long-term learning — split work by latency need."
  },
  {
    id: 380, lec: 12, clo: "1.1",
    q: "Why is edge computing useful for high-volume IoT streams?",
    options: [
      "It reduces bandwidth by sending useful events, features, or summaries",
      "It requires every raw event to be transferred unchanged",
      "It prevents any local inference or anomaly detection",
      "It removes the need to consider latency or privacy"
    ],
    answer: 0,
    explanation: "Edge filtering/summarising sends only useful data upstream, cutting bandwidth."
  },
  {
    id: 381, lec: 12, clo: "1.1",
    q: "A wearable device produces sensitive physiological signals during a live event. Which edge motivation is most relevant?",
    options: [
      "Increasing raw data transfer to the cloud",
      "Removing all local processing from the device",
      "Keeping sensitive data local when possible",
      "Delaying alerts until historical analysis is complete"
    ],
    answer: 2,
    explanation: "Keeping sensitive physiological data on-device improves privacy — a key edge motivation."
  },
  {
    id: 382, lec: 12, clo: "1.2",
    q: "Which edge analytics pattern computes rolling counts, averages, rates, or sketches over recent data?",
    options: ["Model registry", "Windowed aggregation", "Cloud governance reporting", "Data lakehouse storage"],
    answer: 1,
    explanation: "Windowed aggregation computes rolling statistics over recent time windows."
  },
  {
    id: 383, lec: 12, clo: "1.2",
    q: "Which edge analytics pattern keeps only events that satisfy quality, threshold, location, or priority rules?",
    options: ["Event filtering", "Model cards", "Batch training", "Digital twins"],
    answer: 0,
    explanation: "Event filtering passes only events meeting the defined rules."
  },
  {
    id: 384, lec: 12, clo: "1.2",
    q: "Which design principle should guide tool selection for edge and IoT big data systems?",
    options: [
      "Choose the newest tool regardless of task requirements",
      "Use one tool for capture, streaming, storage, AI lifecycle, and governance",
      "Avoid fault tolerance and state management in tool decisions",
      "Choose tools based on data movement, latency, governance, and ML integration"
    ],
    answer: 3,
    explanation: "Tool choice should follow real needs — data movement, latency, governance, ML integration."
  },
  {
    id: 385, lec: 12, clo: "1.2",
    q: "Which tool category is mainly associated with MQTT, HTTP, OPC-UA, and device SDKs?",
    options: ["Model evaluation", "Data capture", "Feature serving", "Model registry"],
    answer: 1,
    explanation: "These protocols/SDKs are data-capture tools for getting events off devices."
  },
  {
    id: 386, lec: 12, clo: "3.1",
    q: "A crowd-health system uses wearables, environmental sensors, density data, and location signals. Which task is most suitable for the edge layer?",
    options: [
      "Local feature fusion and near-real-time risk scoring",
      "Long-term policy reporting only",
      "Historical model governance only",
      "Large-scale offline training only"
    ],
    answer: 0,
    explanation: "Local feature fusion and near-real-time risk scoring are low-latency tasks suited to the edge."
  },
  {
    id: 387, lec: 12, clo: "3.1",
    q: "In a smart crowd-health pipeline, which task is most suitable for the cloud learning layer?",
    options: [
      "Immediate threshold checks on a wearable",
      "Local buffering during network outages",
      "Historical mining, training, audit, and reporting",
      "On-device vibration sensing"
    ],
    answer: 2,
    explanation: "Historical mining, training, audit, and reporting belong in the cloud learning layer."
  },
  {
    id: 388, lec: 12, clo: "3.1",
    q: "Why does lifecycle thinking matter in AI-enabled big data mining?",
    options: [
      "It removes the need for feature engineering",
      "It limits mining to one historical dataset",
      "It prevents monitoring after deployment",
      "It considers deployment, monitoring, risk, feedback, and retraining"
    ],
    answer: 3,
    explanation: "Lifecycle thinking covers deployment, monitoring, risk, feedback, and retraining."
  },
  {
    id: 389, lec: 12, clo: "3.1",
    q: "Which sequence best represents an AI-enabled mining lifecycle?",
    options: [
      "Data, features, model, deploy, monitor, improve",
      "Archive, delete, ignore, report, publish, stop",
      "Sensor, table, dashboard, memo, print, file",
      "Collect, centralise, automate, hide, reuse, discard"
    ],
    answer: 0,
    explanation: "The lifecycle flows data → features → model → deploy → monitor → improve."
  },
  {
    id: 390, lec: 12, clo: "3.1",
    q: "What is an appropriate use of generative AI in big data mining work?",
    options: [
      "Treating generated outputs as verified truth without review",
      "Replacing all evidence-based validation with prompts",
      "Using it for explanation, exploration, code scaffolding, and documentation",
      "Allowing it to access sensitive prompts without guardrails"
    ],
    answer: 2,
    explanation: "Generative AI is an assistant for explanation, exploration, code scaffolding, and documentation — with verification."
  },
  {
    id: 391, lec: 12, clo: "3.1",
    q: "What is a key caution when using LLMs around big data systems?",
    options: [
      "They cannot assist with summaries or documentation",
      "They remove the need for verified data sources",
      "They guarantee traceable and correct analysis",
      "They can produce plausible but incorrect outputs or leak sensitive information"
    ],
    answer: 3,
    explanation: "LLMs can hallucinate and leak sensitive data, so outputs must be verified and guarded."
  },
  {
    id: 392, lec: 12, clo: "3.1",
    q: "Which practice belongs to MLOps and LLMOps over big data platforms?",
    options: [
      "Versioning datasets, features, code, prompts, models, and evaluations",
      "Removing audit trails after deployment",
      "Ignoring latency, drift, fairness, and impact metrics",
      "Treating models as isolated classroom experiments"
    ],
    answer: 0,
    explanation: "MLOps/LLMOps version all artefacts — data, features, code, prompts, models, evaluations."
  },
  {
    id: 393, lec: 12, clo: "3.1",
    q: "Which operational discipline supports responsible AI deployment in production?",
    options: [
      "Using hidden models without approval workflows",
      "Relying only on offline accuracy and ignoring online effects",
      "Governance through lineage, access control, audit trails, and model cards",
      "Avoiding orchestration across batch, stream, and edge deployments"
    ],
    answer: 2,
    explanation: "Governance via lineage, access control, audit trails, and model cards supports responsible production AI."
  },
  {
    id: 394, lec: 12, clo: "3.2",
    q: "A hospital wants to improve models across multiple sites without centralising all raw patient records. Which direction is most appropriate?",
    options: [
      "Federated and privacy-preserving mining",
      "Raw-data centralisation without governance",
      "Uncontrolled prompt sharing",
      "Device-only inference with no model improvement"
    ],
    answer: 0,
    explanation: "Federated, privacy-preserving mining improves models across sites without moving raw patient data."
  },
  {
    id: 395, lec: 12, clo: "3.2",
    q: "A network of edge devices trains locally and sends model updates to an aggregator. Which approach does this describe?",
    options: ["Data lakehouse indexing", "Digital twin simulation", "Federated learning", "Manual batch mining"],
    answer: 2,
    explanation: "Local training plus sharing only updates to an aggregator is federated learning."
  },
  {
    id: 396, lec: 12, clo: "3.2",
    q: "A company claims its architecture is AI-ready because it stores more raw data than before. Which evaluation is most appropriate?",
    options: [
      "The claim is sufficient because AI-ready architecture is mainly about storage size",
      "The claim is sufficient because raw data removes the need for lineage",
      "The claim is weak because AI-ready systems should avoid reusable features",
      "The claim is weak because AI-ready architecture also requires metadata, quality checks, lineage, access policies, and reusable features"
    ],
    answer: 3,
    explanation: "AI-readiness needs metadata, quality checks, lineage, access policies, and reusable features — not just storage volume."
  },
  {
    id: 397, lec: 12, clo: "3.2",
    q: "Which architecture best supports AI-ready data integration pressure?",
    options: [
      "A file dump with no ownership or quality expectations",
      "A lakehouse or data mesh with governed, reusable data products",
      "A spreadsheet workflow with manual copying",
      "A model-only pipeline without data lineage"
    ],
    answer: 1,
    explanation: "A lakehouse or data mesh provides governed, reusable data products — the basis for AI-ready integration."
  },
  {
    id: 398, lec: 12, clo: "3.2",
    q: "A transport project combines logs, sensor readings, locations, video, and simulation models. Which future trend best describes this direction?",
    options: [
      "Single-table mining",
      "Manual reporting only",
      "Richer multimodal, spatio-temporal, graph, and digital-twin mining",
      "Centralised batch storage without AI"
    ],
    answer: 2,
    explanation: "Fusing diverse data types points to multimodal, spatio-temporal, graph, and digital-twin mining."
  },
  {
    id: 399, lec: 12, clo: "3.2",
    q: "A smart-city team builds a virtual representation of a transport system to monitor conditions and test scenarios. Which concept best fits this use case?",
    options: ["Digital twin", "Data capture protocol", "Prompt versioning", "Event filtering"],
    answer: 0,
    explanation: "A digital twin is a live virtual replica used to monitor a system and test scenarios."
  },
  {
    id: 400, lec: 12, clo: "3.2",
    q: "A data science team deploys an AI model over edge, stream, and cloud components. Which responsible AI approach should guide the project?",
    options: [
      "Deploy first, then consider risks only after failures occur",
      "Remove human oversight to improve automation speed",
      "Ignore privacy and fairness because the system is distributed",
      "Govern, map, measure, and manage risks across the lifecycle"
    ],
    answer: 3,
    explanation: "Responsible AI governs, maps, measures, and manages risks across the whole lifecycle."
  },
  {
    id: 401, lec: 12, clo: "3.2",
    q: "An AI-enabled mining system may involve biased data, surveillance, re-identification, hallucination, and hard-to-contest decisions. Which response is most appropriate?",
    options: [
      "Treat responsible AI as a design requirement from problem definition to monitoring",
      "Add a short ethics note after deployment and continue unchanged",
      "Focus only on model accuracy because operational issues are separate",
      "Avoid documenting residual risks to reduce governance workload"
    ],
    answer: 0,
    explanation: "These risks require responsible AI to be a design requirement from problem definition through monitoring."
  },
];

// Expose globally for the app
if (typeof window !== "undefined") {
  window.LECTURES = LECTURES;
  window.QUESTIONS = QUESTIONS;
}

export const resumeData = {
  name: "Ankush Reddy Sugureddy",
  title: "Lead Engineer & AI Architect",
  contact: {
    email: "ankush.sugureddy@gmail.com",
    phone: "+1 314-755-9439",
    phoneUrl: "tel:+13147559439",
    linkedin: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/ankushreddysugureddy/",
    scholar: "Google Scholar",
    scholarUrl: "https://scholar.google.com/citations?user=lLpjBF4AAAAJ&hl=en&oi=ao",
    portfolio: "Portfolio",
    portfolioUrl: "https://ankush-sugureddy.github.io/",
    location: "Dallas, TX"
  },
  summary: "A highly accomplished Lead Engineer and Architect with over 15 years of experience in designing, building, and optimizing petabyte scale, multi-cloud data platforms (GCP, AWS, Azure). Specializing in cutting-edge Generative AI and Agentic AI frameworks, including leading LLMOps strategy (Kimi, Llama) and integrating GenAI-powered BI solutions. Proven expertise across the modern data stack (Spark, Python, BigQuery, dbt, Kubernetes, Terraform) to deliver high-performance, real-time data solutions, drive automated data quality/governance, and significantly boost enterprise workflow efficiency.",
  experience: [
    {
      company: "Cloudflare",
      role: "Lead Engineer",
      date: "11/2022 to Present",
      highlights: [
        "**Generative AI & LLMOps Strategy:** Spearheaded enterprise-wide AI strategy, deploying LLM pipelines using Kimi and Llama foundation models to generate automated, context-aware insights on IT operational data (Salesforce, Workday, JIRA), significantly boosting workflow efficiency.",
        "**GenAI-Powered BI & Analytics:** Architected and integrated a Chat and Personal Intelligence layer into Apache Superset; enabled dashboard-aware Q&A, persistent user sessions, and chart-specific data selection, drastically reducing time-to-insight for analysts and minimizing ad-hoc SQL dependencies.",
        "**Petabyte-Scale Data Architecture:** Managed petabyte-scale data processing across a hybrid and multi-cloud ecosystem (GCP, Cloudflare Dash, On-Prem) for billions of Stripe billing records and enterprise domains (Salesforce, NetSuite, Workday, JIRA, Greenhouse, Postgres).",
        "**Real-Time Streaming APIs:** Engineered high-performance, real-time API integrations with Salesforce to process compute intensive financial metrics (ACV, Deferred ACV, Accumulated Deferred ACV); achieved an end-to-end processing latency of under 30 seconds per request.",
        "**Modern Medallion Lakehouse:** Designed and deployed an end-to-end Medallion Architecture (Landing, Refined, Transformed), enforcing robust data governance through automated lineage tracking, data classification, and advanced data hashing/encryption.",
        "**Automated Data Quality & Governance:** Championed the adoption of Soda Core for comprehensive, automated data quality testing and implemented robust security standards across the multi-cloud data platform.",
        "**Modern Data Stack & CI/CD:** Implemented dbt within CI/CD pipelines for BigQuery transformations, establishing data quality testing, modularizing financial reporting models, and automating upstream/downstream impact analysis using dbt artifacts.",
        "**Infrastructure & Reliability:** Managed GCP resources and infrastructure as code (IaC) using Terraform for consistency, reproducibility, and high system reliability across Kubernetes clusters."
      ],
      tech: "GCP, Hybrid/Multi-Cloud, Python, Spark, BigQuery, dbt, Apache Superset, Kimi, Llama, Soda Core, APIs, Kubernetes, Terraform"
    },
    {
      company: "Amazon",
      role: "SDE/ML Engineer",
      date: "07/2021 to 11/2022",
      highlights: [
        "Led end-to-end migration of legacy on-prem data workflows (Oracle, IBM Cognos, DRM) to AWS, achieving 100% data fidelity and seamless processing of complex enterprise data.",
        "Designed and maintained scalable ingestion pipelines using Python/Spark on EMR, orchestrating complex workflows with AWS Managed Airflow and custom operators to support 10+ enterprise domains.",
        "Implemented low-latency, real-time streaming data ingestion using Kinesis and SQS, ensuring sub-minute data availability for critical downstream applications.",
        "Architected and migrated data platform to a three-layer Medallion Lakehouse model (S3/Glue Data Catalog), improving data governance and reducing query costs by 20%.",
        "Utilized dbt for complex data modeling and transformations within the Lakehouse, enforcing high data quality and reducing transformation failures by 15%.",
        "Automated ML pipelines, data lineage, and validation frameworks, accelerating feature engineering time by 30% and supporting 5+ Data Science teams.",
        "Automated data transfer and triggered Airflow pipelines based on S3 events using AWS Lambda functions, increasing pipeline reactivity.",
        "Developed and optimized scalable end-to-end ingestion pipelines for TB-scale enterprise data using Python/Spark and micro-batching, guaranteeing low-latency data availability.",
        "Engineered and deployed high-impact data solutions using robust CI/CD processes, leveraging AWS Managed Airflow and IaC principles for 99.9% system reliability."
      ],
      tech: "AWS, Spark, Python, Scala, EMR, Airflow, Kinesis, SQS, S3, Glue, dbt, Lambda"
    },
    {
      company: "Walmart",
      role: "Machine Learning Engineer",
      date: "01/2020 to 07/2021",
      highlights: [
        "Led Machine Learning Engineering initiatives, driving a 12% improvement in ML model performance and developing robust, high-availability production pipelines.",
        "Developed advanced forecasting models (FBProphet, SARIMA, XGBoost) to predict on-hand inventory across all 4,700+ stores, resulting in a 10% reduction in stockouts.",
        "Leveraged BigQuery for complex joins and transformations during the feature engineering stage, processing over 50TB of raw data.",
        "Utilized Dataproc and PySpark on GCP to execute distributed training and forecasting of ML models at scale, reducing model training time by 40%.",
        "Integrated Snowflake as the primary staging/consumption layer, optimizing query performance for ML feature stores and model serving by up to 65%.",
        "Introduced dbt governance to modularize complex SQL transformations in the forecasting data pipeline, accelerating feature deployment by 25% and ensuring high data integrity.",
        "Standardized ETL processes to automate data extraction and manual reporting, resulting in a 30% reduction in operational manual hours across the team.",
        "Built and deployed ML pipelines on Azure Databricks, utilizing Spark for store-level aggregations and loading resultant data into CosmosDB for low-latency serving."
      ],
      tech: "GCP, BigQuery, Dataproc, PySpark, Python, Snowflake, dbt, Azure Databricks, CosmosDB, FBProphet, XGBoost"
    },
    {
      company: "Revlon",
      role: "Big Data Architect",
      date: "06/2018 to 01/2020",
      highlights: [
        "Designed and implemented robust ETL processes for high-volume POS data migration to Azure SQL DW, leveraging Logic Apps for workflow automation and achieving 99.5% uptime.",
        "Conducted successful PoC for Snowflake integration, building Spark applications to facilitate seamless data exchange between Snowflake and Azure environments.",
        "Designed the target-state Snowflake data warehouse architecture, driving the migration of multi-terabyte legacy data and achieving a 40% reduction in query latency.",
        "Pioneered the introduction of dbt for version control and management of SQL transformations in Azure SQL DW, significantly improving data reliability.",
        "Standardized the transformation layer using dbt modular data modeling, and integrated automated data quality checks via dbt tests for all production pipelines, catching 95% of data anomalies before production.",
        "Implemented high-throughput data processing using Azure Databricks and Spark Streaming/PySpark to support real-time applications with sub-second latency.",
        "Developed an interactive offer simulator using R-Shiny to calculate Return on Investment (ROI) and optimize marketing offer calendar planning, leading to a 15% lift in campaign efficiency.",
        "Applied PySpark NLP techniques for sentiment analysis and topic extraction from 200k+ retailer reviews, providing actionable insights that shaped business strategy.",
        "Applied advanced dimensional data modeling in Snowflake for consumption layers, directly supporting high-value applications like demand forecasting.",
        "Engineered robust, high-volume ETL ingestion frameworks using Python and Azure services, fully automating the migration and loading of POS data with zero manual intervention."
      ],
      tech: "Azure, Snowflake, Databricks, Spark Streaming, PySpark, dbt, PowerBI, Logic Apps, Azure SQL DW, Python, Scala"
    },
    {
      company: "Bloomingdale's",
      role: "Sr. Data Scientist",
      date: "01/2018 to 07/2018",
      highlights: [
        "Leveraged Azure cloud services to execute end-to-end Data Engineering and Data Science workflows for personalized marketing.",
        "Developed Direct Mail Models to precisely target high-value customers for specific marketing campaigns, increasing direct mail ROI by 18%.",
        "Created FOB (Free On Board) models to generate and send relevant email offers to customers, driving a 10% increase in email-attributed sales.",
        "Extracted social media metrics using Python and created performance tracking dashboards in Power BI, providing daily visibility into campaign success.",
        "Developed a web scraper to ingest and store 2TB+ of images from the product portal into an HDInsight Cluster for downstream modeling.",
        "Developed an Image Recognition and Recommendation model using Cosine Similarity, integrated with mobile applications to enhance user experience and drive product discoverability.",
        "Implemented deep learning models using Keras and VGG16 (alongside Random Forest) for model training, achieving 90%+ prediction accuracy.",
        "Built a product recommendation engine using collaborative filtering, deployed on Product Detail Pages (PDP), increasing cross-sell conversions by 8%."
      ],
      tech: "Azure, HDInsight, Spark-SQL, PySpark, Python, Keras, VGG16, Power BI, Hadoop, Hive"
    },
    {
      company: "Boeing",
      role: "Cloud Lead Data Engineer",
      date: "03/2017 to 01/2018",
      highlights: [
        "Implemented high-throughput workflows capable of processing 400 messages per second, pushing real-time aircraft data to DocumentDB and Azure Event Hubs.",
        "Developed a custom message producer for rigorous scalability testing, validating system throughput up to 4,000 messages per second.",
        "Led a combined on-site and offshore team of 6 engineers to execute the migration of 10+ enterprise applications from on-premise infrastructure to Azure Cloud.",
        "Executed fast-paced PoCs on Databricks and HD-Insight clusters to benchmark and deploy optimized Spark applications.",
        "Designed and implemented robust call-back and notification architectures to support real-time data streaming from aircraft sensors.",
        "Utilized Spark Streaming (Scala) to process high-volume JSON messages (up to 4,000/sec) and route them to a Kafka topic.",
        "Created custom monitoring dashboards in Azure using Application Insights to visualize application health and performance metrics, reducing mean-time-to-resolution (MTTR) by 30%.",
        "Developed real-time streaming dashboards in Power BI by leveraging Azure Stream Analytics for immediate operational visibility.",
        "Engineered auto-scalable Azure Functions to consume data from Service Bus/Event Hub and persist it in DocumentDB with dynamic capacity scaling.",
        "Wrote a Spark application (Java API) to capture change feeds from DocumentDB and apply near-real-time updates to target data stores.",
        "Implemented a Zero Downtime deployment strategy for all production pipelines in Azure, ensuring 100% continuous operation.",
        "Established CI/CD pipelines for building and deploying projects within the Hadoop environment, cutting deployment time by 50%.",
        "Utilized AWS services (Lambda, Kinesis, DynamoDB) for cross-cloud integration and monitoring for hybrid architecture.",
        "Used Python and Ansible playbooks to automate the deployment of Logic Apps to Azure, ensuring infrastructure consistency."
      ],
      tech: "Azure, AWS, Kafka, Spark Streaming, Scala, Python, Java, DocumentDB, Event Hubs, PowerBI, Jenkins, Ansible"
    },
    {
      company: "CA Technologies",
      role: "Lead Data Engineer",
      date: "11/2016 to 03/2017",
      highlights: [
        "Designed and built robust data pipelines responsible for extracting, classifying, merging, and delivering market insights to the executive team.",
        "Used Talend Open Studio to extract high-volume marketing data from Marketo.",
        "Utilized the springml package to pull complex CRM data from Salesforce and store it in Azure blob containers.",
        "Developed RESTful API calls using Scala to ingest and load real-time transaction data directly into Spark DataFrames.",
        "Deployed high-performance Spark applications onto a microservices architecture using containerization.",
        "Integrated AWS Lambda and API Gateway to manage API calls between microservices and the data store for efficient data access.",
        "Performed complex data transformations using Spark on data from blob storage, populating Hive tables and pushing results to the Central Data Layer for BI reporting."
      ],
      tech: "Azure, AWS, Spark, Scala, Hive, Talend, Salesforce, Marketo, Birst, Maven, SBT"
    },
    {
      company: "ASU Research Computing",
      role: "Sr. Data Scientist & Engineer",
      date: "12/2015 to 11/2016",
      highlights: [
        "Collaborated with 5+ cancer researchers to analyze strategic goals and define system architecture for the Big Data genomics pipeline.",
        "Utilized Spark transformations (map, reducebykey, filter) for cleaning and preprocessing large genomics input datasets (1TB+).",
        "Developed custom Map-Reduce programs (Java API) for specialized, performance-critical data processing tasks on the Hadoop cluster.",
        "Automated the build and deployment process by integrating Maven builds and designing seamless workflows, reducing deployment time by 60%.",
        "Developed a Linear Regression model using Spark (Scala API) to predict continuous measurements for patient observations with high accuracy.",
        "Designed and created partitioned and bucketed Hive tables to optimize query efficiency by 45% and improve storage management.",
        "Established a Big Data genomics pipeline utilizing Spark and Scala for various genetic variant calling techniques, processing millions of variants.",
        "Made code contributions to the Tumor Simulator module, optimizing it for distributed processing using spark-submit, reducing simulation run time by 50%.",
        "Utilized D3.js to generate phylogenetic and radial trees from JSON data produced by Hive queries for complex visualization.",
        "Conducted a PoC for real-time sentiment analysis on Twitter data using Spark Streaming.",
        "Leveraged High-Performance Computing (HPC) environments to simulate tools critical for the genomics pipeline."
      ],
      tech: "Hadoop, Hive, Spark, Spark-SQL, Java, Scala, HPC, D3.js, Maven, Hortonworks"
    },
    {
      company: "AAA Insurance",
      role: "Sr. Data Engineer",
      date: "01/2015 to 12/2015",
      highlights: [
        "Contributed to the design and implementation of the overall Big Data project architecture.",
        "Successfully decommissioned 3+ legacy systems, migrating their data to the new Hadoop environment.",
        "Used Sqoop for secure and efficient migration of structured data from legacy sources (AS400DB2, Oracle) to Hadoop.",
        "Used AXWAY for FTP transfer of OPTIM files to Hadoop, subsequently creating optimized Hive tables for analyst access.",
        "Processed and migrated mainframe VSAM files to Hadoop using custom loaders.",
        "Leveraged Informatica to handle complex data structures and load transformed data into Oracle reporting databases.",
        "Developed and optimized complex HiveQL join queries, reducing execution time for critical reports by 25%.",
        "Joined multiple source system tables using HiveQL and indexed the results into Elasticsearch for near-real-time search capabilities.",
        "Successfully executed large-scale data migration between Hadoop clusters, handling petabytes of data.",
        "Implemented a high-performance service layer on top of Cassandra using Core Java and RESTful APIs, supporting 500+ daily queries.",
        "Configured and optimized Cassandra database instances for production environments, achieving low latency reads/writes.",
        "Used Oozie to schedule and orchestrate 30+ complex workflows involving shell and Hive actions."
      ],
      tech: "Hadoop, Hive, Pig, Sqoop, Cassandra, Java, Python, Shell, Informatica, Oracle, Oozie"
    },
    {
      company: "Systel Communications Pvt Ltd.",
      role: "Software Engineer",
      date: "12/2011 to 12/2013",
      highlights: [
        "Migrated data from MySQL to HDFS using Sqoop and imported various flat file formats into the Hadoop Distributed File System.",
        "Developed and optimized Sqoop scripts for seamless data interaction between Hive and MySQL Database.",
        "Wrote and optimized Hive queries to categorize data for various wireless applications, improving reporting speed by 20%.",
        "Developed front-end and business components using Core Java, Servlets, and JSP for wireless applications.",
        "Created dynamic JSP pages utilizing Struts custom tags.",
        "Managed source code versioning and repository using SVN.",
        "Applied dependency injection principles of the Spring Framework using Java configuration.",
        "Implemented business components using Spring Core and managed application navigation using Spring MVC."
      ],
      tech: "Java, JSP, Servlets, Spring MVC, MySQL, Hadoop, Hive, Sqoop, XML, Apache Tomcat"
    }
  ],
  skills: [
    { category: "AI & Machine Learning", items: "GenAI, LLMOps, Kimi, Llama, Keras, VGG16, XGBoost, FBProphet, SARIMA, NLP" },
    { category: "Cloud Platforms", items: "GCP, AWS, Azure, BigQuery, EMR, Dataproc, Databricks, HDInsight" },
    { category: "Data Engineering", items: "Spark, dbt, Airflow, Kafka, Kinesis, Snowflake, Hive, Superset, Soda Core" },
    { category: "Programming & Infra", items: "Python, Scala, Java, SQL, PySpark, Shell, Kubernetes, Terraform, Docker, CI/CD" },
    { category: "Databases", items: "BigQuery, Snowflake, CosmosDB, DynamoDB, Cassandra, Elasticsearch, PostgreSQL" }
  ],
  certifications: [
    {
      name: "Professional Cloud Architect Certification",
      issuer: "Google Cloud",
      date: "May 2026",
      id: "c1e0c6c5-7953-4b9b-8368-2745600b96eb",
      url: "https://www.credly.com/badges/c1e0c6c5-7953-4b9b-8368-2745600b96eb/public_url"
    },
    {
      name: "Generative AI Leader Certification",
      issuer: "Google Cloud",
      date: "March 2024",
      id: "1c6f0ee0-f51d-4c7f-8324-e3932ccbe09c",
      url: "https://www.credly.com/badges/8c4f5de0-f40e-48f7-bbc0-0b3d06c89945/public_url"
    },
    {
      name: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "September 2023",
      id: "B105BF01AB5B457C"
    },
    {
      name: "MCA200 (Mirantis Certified Administrator)",
      issuer: "Mirantis",
      date: "October 2016",
      id: "200-608-310"
    },
    {
      name: "Big Data and Hadoop",
      issuer: "Edureka",
      date: "December 2014",
      id: "448747713"
    },
    {
      name: "cs50x: Introduction to Computer Science",
      issuer: "edX / Harvard University",
      date: "April 2013",
      id: "eed263235f7244de95d055498b0a4e42"
    }
  ]
};

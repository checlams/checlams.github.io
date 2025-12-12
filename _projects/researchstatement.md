---
layout: page
title: Research Statement
description: Overall research objectives and rationale, as well as ongoing research projects
img: assets/img/projects/researchstatement.jpg
importance: 1
---


## Overall Research Objectives and Rationale

Recent breakthroughs in data science, machine learning (ML), and artificial intelligence (AI) have catalyzed the advancement of **process systems engineering (PSE)**, which leverages *mathematical modeling, optimization, control, and scientific computing* to understand and improve energy, environmental, and health systems and networks across various scales. My research is motivated by **the use of valuable mathematical and domain-specific fundamental principles in process systems engineering to enhance the accuracy, transparency, and interpretability of AI-driven decision-making processes**. Thus, my research aims to develop synergistic theories and tools to understand and study multi-scale structures, dynamics, and systems, as well as their dependencies and interactions, which are **mappings that can be learned from data and/or described by models**. By capturing and incorporating these (potentially hidden) mappings (e.g., via **neural operator learning**), we expect to achieve synergistic improvements on the quality, speed, and robustness of physics-based and/or data-driven decision-making processes involving complex systems.

<div class="row">
    <div class="col mt-3 mt-md-0">
    </div>
    <div class="col-9 mt-3 mt-md-0">
        <img class="img-fluid" src="{{ '/assets/img/projects/research.png' | relative_url }}" alt="Three focusing pillars of CLAMS's research."/>
    </div>
    <div class="col mt-3 mt-md-0">
    </div>
</div>

## Ongoing Research Projects

My research group at OSU aims to **explore and harness the synergy among PSE, AI, and ML** to develop new computational theories, methods, and tools as well as system-oriented insights to address critical challenges in **advanced manufacturing, precision agriculture, sustainability, and food-energy-water nexus**. Currently, four major internally and externally funded projects are supporting my group to design resource-efficient, sustainable, and resilient food and energy infrastructures and systems.

#### Data-driven, physics-embedded digital twin for sensor-based soil monitoring and smart irrigation decision-making ([NSF CAREER: 2442806](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2442806))

With increasing water stress due to droughts and increasing demand for food, an emerging water management strategy is to adopt soil sensing and precision water management to enable water-efficient irrigation. This project develops a data-driven, physics-augmented digital twin to address whether and how field-wide soil moisture and salinity profiles can be attained by a small number of strategically placed sensors, and explores how to leverage these profiles to design efficient crop irrigation systems. The project integrates water-solute-soil dynamics modeling, sensor network design, and irrigation scheduling to provide efficient and affordable solutions for field-wide soil monitoring and irrigation decision-making. In this project, we develop foundational theories and efficient algorithms to model complex spatiotemporal water-solute-soil dynamics and solve the associated inverse problem. We create a new physics-integrated active learning framework based on spatiotemporal Gaussian process coupled with mutual-information filling principle for optimal soil sensor placement. Furthermore, we develop provably safe and convergent reinforcement learning algorithms for precision irrigation scheduling, as well as the first systematic techno-economic analysis model to quantify economic savings and payback period.

<div class="row">
    <div class="col mt-3 mt-md-0">
    </div>
    <div class="col-7 mt-3 mt-md-0">
        <img class="img-fluid" src="{{ '/assets/img/projects/soilsensing.png' | relative_url }}" alt="Capturing complex spatiotemporal water-solute-soil dynamics and using them for soil monitoring and smart irrigation control."/>
    </div>
    <div class="col mt-3 mt-md-0">
    </div>
</div>
<div class="caption">
    An integrative digital twin that will bring “eyes inside the soil” via reliable soil sensing and “water into the soil” via precision irrigation scheduling.
</div>

#### Decentralized algorithms for integrating electrified chemical processes with renewable-driven, electric power systems ([NSF CBET: 2343072](https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2343072))

As the U.S. energy landscape continues to shift toward low-carbon electricity, chemical process industries are actively transitioning their practices via electrification. Such electrification needs to be integrated with clean, renewable-driven electric power systems. However, a smooth integration demands active, real-time data sharing between the chemical and power system stakeholders, which raises significant privacy concerns due to the sensitive nature of chemical process data. Through the NSF-wide Clean Energy Technology initiative, we collaborate with [Prof. Paritosh Ramanan](https://ceat.okstate.edu/iem/people/ramanan-faculty-profile.html) in the [School of Industrial Engineering and Management](https://ceat.okstate.edu/iem/) to analyze the convergence of decentralized optimization algorithms for joint maintenance and operations of electrified chemical manufacturing processes and power systems, thereby closing critical gaps stemming from the need to move plant-level process data to successfully integrate operations of electrified chemical process units and existing power systems. The research comprises (a) the design of novel decomposition techniques to decouple maintenance and operations components of the joint optimization problem to be able to solve it without the need to move process or sensor data, and (b) the development of the first decentralized, federated machine learning framework to accurately capture complex spatiotemporal interdependencies pertaining to clean energy contribution from existing power grids while eliminating the need to move stakeholder data.

<div class="row">
    <div class="col mt-3 mt-md-0">
    </div>
    <div class="col-6 mt-3 mt-md-0">
        <img class="img-fluid" src="{{ '/assets/img/projects/decarbonization_schematic.svg' | relative_url }}" alt="Decentralization helps remove information sharing barrier and facilitate industrial decarbonization."/>
    </div>
    <div class="col mt-3 mt-md-0">
    </div>
</div>
<div class="caption">
    Decentralization helps break information sharing barrier among stakeholders and facilitate holistic industrial decarbonization.
</div>

#### Resilient infrastructure planning and supply chain of critical resources

The proliferation of extreme weather events, geopolitical disturbances, and other supply chain disruptions motivates the need to enhance the security and resilience of critical food, energy, and public health infrastructures. Designing a resilience metric requires accurate system models that account for various high-impact rare disruptions and multiple economic and societal objectives, including operating cost, carbon footprint, recovery time, and fraction of unserved customers. However, existing methodologies do not simultaneously consider multiple objectives and extreme events, and they are inaccurate in anticipating disruptions. In this project, we bridge these gaps by (a) modeling the resilience of a supply chain or critical infrastructure using distributionally robust multi-objective, multi-stage stochastic optimization, (b) designing scalable algorithms for approximating the efficient frontier of resilience versus system cost, and (c) using machine learning to model and anticipate the onset of disruptive events based on joint observations of uncertain parameters and covariates. Specifically, the project investigates infrastructure planning and supply chain optimization for agrochemical raw materials, critical minerals, and vaccine distribution and delivery.

#### AI-enhanced fault detection and diagnosis for online monitoring and control of manufacturing processes ([NSF TI: 2331080](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2331080), [OCAST: AR24-069](https://oklahoma.gov/ocast.html))

Process monitoring is critical in modern manufacturing to ensure process safety, maintain product quality, and improve process efficiency and operability. However, existing techniques for distillation monitoring are inadequate because (a) fault scenarios in distillation systems are complex, (b) sensors continuously produce massive arrays of big data streams that are often nonparametric and heterogeneous, and (c) there is an intrinsic trade-off between fault detection time and diagnostic accuracy. To address these challenges, in this project, we propose a novel online monitoring paradigm named “FARM” for fast, accurate, and robust online fault detection and diagnosis that outperforms state-of-the-art algorithms. FARM is a holistic monitoring paradigm that introduces and integrates (a) multivariate statistical process control for fast anomaly detection of nonparametric, heterogeneous data streams, (b) continuous-time reservoir computing network for accuate and robust fault diagnosis of irregular time series, and (c) soft sensing with minimal redundancy for extracting useful process knowledge from first principles (e.g., mass and energy balances). FARM's unique hierarchical architecture successfully bypasses the intrinsic trade-off between fault detection speed and accuracy that is present in existing process monitoring algorithms, while maintaining any user-specified false alarm rate.
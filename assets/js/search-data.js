// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Highlighted research from CLAMS",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-zheyu-jiang",
          title: "Zheyu Jiang",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-dr-zheyu-jiang-awarded-prestigious-nsf-career-award",
        
          title: 'Dr. Zheyu Jiang awarded prestigious NSF CAREER Award <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Dr. Jiang&#39;s NSF CAREER Award is featured in OSU News.",
        section: "Posts",
        handler: () => {
          
            window.open("https://news.okstate.edu/articles/engineering-architecture-technology/2025/zheyu_jiang_receives_nsf_career_award.html", "_blank");
          
        },
      },{id: "post-clams-receives-funding-from-ocast-to-develop-new-fault-detection-algorithms-for-online-monitoring-of-industrial-distillation",
        
          title: 'CLAMS receives funding from OCAST to develop new fault detection algorithms for online... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Dr. Jiang&#39;s new project in detecting, diagnosing faults for chemical distillation systems is featured in OSU News.",
        section: "Posts",
        handler: () => {
          
            window.open("https://news.okstate.edu/articles/engineering-architecture-technology/2025/dr_zheyu_jiang_ocast_farm.html", "_blank");
          
        },
      },{id: "post-clams-receives-funding-from-nsf-to-develop-new-optimization-paradigms-to-facilitate-industrial-decarbonization-and-clean-energy-integration",
        
          title: 'CLAMS receives funding from NSF to develop new optimization paradigms to facilitate industrial... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Dr. Jiang&#39;s new project funded by National Science Foundation EAGER award is featured in OSU News.",
        section: "Posts",
        handler: () => {
          
            window.open("https://news.okstate.edu/articles/engineering-architecture-technology/2024/two_osu_engineering_professors_receive_nsf_eager_award_to_study_ways_to_decarbonize_heavy_industries.html", "_blank");
          
        },
      },{id: "post-data-driven-computational-framework-for-solving-complex-pdes",
        
          title: "Data-Driven Computational Framework for Solving Complex PDEs",
        
        description: "Facilitating numerical solution by incorporating physics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/drwfocapo/";
          
        },
      },{id: "post-how-to-deploy-your-al-folio-themed-website-to-github-page-for-the-first-time",
        
          title: "How to deploy your al-folio themed website to GitHub page for the first...",
        
        description: "A summary of key steps for new users",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/deployment/";
          
        },
      },{id: "post-our-new-paper-is-published-in-the-2022-futures-issue-of-aiche-journal",
        
          title: 'Our new paper is published in the 2022 Futures Issue of AIChE Journal... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "An invited article that solves a longstanding challenge in chemical engineering",
        section: "Posts",
        handler: () => {
          
            window.open("https://ceat.okstate.edu/announcements/che/2022/osu-chemical-engineering-professor-zheyu-jiang-featured-in-the-2022-futures-issue-of-aiche-journal.html", "_blank");
          
        },
      },{id: "post-clams-welcomes-zeyuan-song-and-saba-ghasemi-naraghi-as-new-graduate-students",
        
          title: "CLAMS welcomes Zeyuan Song and Saba Ghasemi Naraghi as new graduate students!",
        
        description: "Welcome new students!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/welcome/";
          
        },
      },{id: "post-we-are-hiring-one-to-two-graduate-students-to-join-clams",
        
          title: "We are hiring one to two graduate students to join CLAMS",
        
        description: "Graduate research assistant position in process systems engineering",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/opening/";
          
        },
      },{id: "post-dr-jiang-joins-osu-as-an-assistant-professor",
        
          title: "Dr. Jiang joins OSU as an assistant professor",
        
        description: "The newly established CLAMS group led by Prof. Jiang will tackle fundamental problems in advanced manufacturing and sustainability by developing and applying various systems engineering tools.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/JiangjoinsOSU/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-dr-jiang-joins-osu-as-an-assistant-professor",
          title: 'Dr. Jiang joins OSU as an assistant professor',
          description: "The newly established CLAMS group led by Prof. Jiang will tackle fundamental problems in advanced manufacturing and sustainability by developing and applying various systems engineering tools.",
          section: "News",handler: () => {
              window.location.href = "/news/210801JiangjoinsOSU/";
            },},{id: "news-we-have-openings-for-1-2-graduate-students-starting-in-spring-fall-2022-the-position-has-been-filled",
          title: 'We have openings for 1-2 graduate students starting in Spring/Fall 2022!👋 The position...',
          description: "Graduate research assistant positions in process systems engineering",
          section: "News",},{id: "news-prof-jiang-gave-a-seminar-talk-on-creating-a-sustainable-manufacturing-and-food-future-via-process-systems-engineering-innovations-at-osu-s-school-of-industrial-engineering-and-management",
          title: 'Prof. Jiang gave a seminar talk on creating a sustainable manufacturing and food...',
          description: "Prof. Jiang gave seminar talk",
          section: "News",},{id: "news-clams-welcomes-zeyuan-song-and-saba-ghasemi-naraghi-as-new-graduate-students",
          title: 'CLAMS welcomes Zeyuan Song and Saba Ghasemi Naraghi as new graduate students!',
          description: "Welcome new students!",
          section: "News",handler: () => {
              window.location.href = "/news/220110welcome/";
            },},{id: "news-clams-group-served-as-judges-at-the-2022-oklahoma-state-science-and-engineering-fair-ossef-on-march-26-and-27-held-at-the-osu-campus",
          title: 'CLAMS group served as judges at the 2022 Oklahoma State Science and Engineering...',
          description: "CLAMS group volunteered at 2022 Oklahoma State Science and Engineering Fair",
          section: "News",},{id: "news-clams-group-received-travel-grant-for-attending-the-nsf-epscor-artificial-intelligence-amp-amp-no-boundary-thinking-workshop-on-april-3-and-4-in-little-rock-arkansas",
          title: 'CLAMS group received travel grant for attending the NSF EPSCoR Artificial Intelligence &amp;amp;amp;...',
          description: "CLAMS group attended NSF EPSCoR workshop in Arkansas",
          section: "News",},{id: "news-prof-jiang-s-new-paper-is-nominated-to-be-published-in-aiche-journal-s-2022-futures-issue-which-features-creative-early-career-researchers-in-chemical-engineering-learn-more-here",
          title: 'Prof. Jiang’s new paper is nominated to be published in AIChE Journal’s 2022...',
          description: "New publication accepted by AIChE Journal",
          section: "News",},{id: "news-prof-jiang-s-paper-on-shortcut-modeling-of-multicomponent-homogeneous-azeotropic-distillation-is-accepted-in-computer-aided-chemical-engineering-featuring-focapo-cpc-2023",
          title: 'Prof. Jiang’s paper on shortcut modeling of multicomponent homogeneous azeotropic distillation is accepted...',
          description: "Papers accpeted at FOCAPO/CPC 2023 Conference",
          section: "News",},{id: "news-clams-member-zeyuan-song-s-paper-on-data-driven-random-walk-approach-for-solving-water-flow-dynamics-in-soil-systems-is-selected-for-oral-presentation-at-focapo-cpc-2023-among-the-48-manuscripts-selected-for-oral-presentation-learn-more-here",
          title: 'CLAMS member Zeyuan Song’s paper on data-driven random walk approach for solving water...',
          description: "Papers accpeted at FOCAPO/CPC 2023 Conference",
          section: "News",},{id: "news-dr-jiang-is-selected-for-osu-s-nsf-innovation-corps-i-corps-in-person-site-program-and-receives-travel-grants-to-help-commercialize-a-software-product-for-online-process-monitoring-of-chemical-distillation-units",
          title: 'Dr. Jiang is selected for OSU’s NSF Innovation Corps (I-Corps) in-person site program...',
          description: "Dr. Jiang receives OSU NSF I-Corps travel grant",
          section: "News",},{id: "news-clams-welcomes-alireza-miraliakbar-and-mehrdad-zomorodiyan-as-new-graduate-students",
          title: 'CLAMS welcomes Alireza Miraliakbar and Mehrdad Zomorodiyan as new graduate students!',
          description: "Welcome new students!",
          section: "News",handler: () => {
              window.location.href = "/news/230122welcome/";
            },},{id: "news-prof-akash-deep-iem-and-dr-jiang-s-proposal-idea-on-soil-moisture-sensing-has-been-selected-by-the-rural-renewal-initiative-to-submit-a-full-proposal-they-will-receive-travel-funds-to-visit-a-rural-community",
          title: 'Prof. Akash Deep (IEM) and Dr. Jiang’s proposal idea on soil moisture sensing...',
          description: "Dr. Jiang receives travel grant from the Rural Renewal Initiative",
          section: "News",},{id: "news-graduate-student-zeyuan-song-was-selected-to-present-his-work-a-data-driven-random-walk-approach-for-solving-water-flow-dynamics-in-soil-systems-at-the-2023-che-spring-graduate-seminar-congratulations",
          title: 'Graduate student Zeyuan Song was selected to present his work “A Data-driven Random...',
          description: "Zeyuan talks about his research work",
          section: "News",},{id: "news-dr-jiang-was-invited-by-the-department-of-biosystems-and-agricultural-engineering-at-osu-to-give-a-seminar-talk-entitled-creating-a-sustainable-food-future-by-2050-via-systems-engineering-approaches",
          title: 'Dr. Jiang was invited by the Department of Biosystems and Agricultural Engineering at...',
          description: "Dr. Jiang gives a seminar talk at OSU BAE Department",
          section: "News",},{id: "news-clams-members-alireza-and-dr-jiang-received-travel-grants-to-attend-fopam-2023-conference-in-davis-california-from-july-30-to-aug-3-alireza-will-be-presenting-a-poster-entitled-farm-a-fast-accurate-robust-fault-detection-and-diagnosis-framework-for-industrial-process-monitoring",
          title: 'CLAMS members Alireza and Dr. Jiang received travel grants to attend FOPAM 2023...',
          description: "Travel grants",
          section: "News",},{id: "news-dr-jiang-received-an-nsf-award-from-i-corps-under-translational-impacts-to-prototype-and-commercialize-his-real-time-process-monitoring-and-fault-diagnosis-framework-to-decarbonize-industrial-distillation-processes",
          title: 'Dr. Jiang received an NSF award from I-Corps (under Translational Impacts) to prototype...',
          description: "A new NSF award",
          section: "News",},{id: "news-saba-zeyuan-and-dr-jiang-published-three-proceedings-for-the-33rd-escape-conference-in-computers-aided-chemical-engineering-these-works-span-across-pse-fields-in-online-process-monitoring-agrochemical-supply-chain-optimization-and-numerical-methods-for-solving-agrohydrological-models",
          title: 'Saba, Zeyuan, and Dr. Jiang published three proceedings for the 33rd ESCAPE Conference...',
          description: "New articles",
          section: "News",},{id: "news-dr-jiang-gave-a-seminar-talk-titled-decarbonization-of-industrial-distillation-via-shortcut-modeling-global-optimization-and-process-intensification-at-phillips-66-research-center-as-the-inaugural-seminar-aiche-bartlesville-chapter-the-seminar-was-well-attended-by-research-scientists-and-engineers-from-phillips-66-chevron-phillips-chemical-and-conocophillips",
          title: 'Dr. Jiang gave a seminar talk titled “Decarbonization of Industrial Distillation via Shortcut...',
          description: "Prof. Jiang gave seminar talk",
          section: "News",},{id: "news-we-are-excited-to-welcome-tylee-kareck-to-clams-tylee-is-a-ceat-undergraduate-research-scholar-she-received-a-1-500-scholarship-to-work-with-dr-jiang-and-dr-ramanan-on-power-system-analysis-under-industrial-decarbonization",
          title: 'We are excited to welcome Tylee Kareck to CLAMS! Tylee is a CEAT...',
          description: "Welcome new students!",
          section: "News",},{id: "news-invited-and-hosted-by-prof-fengqi-you-dr-jiang-visited-systems-engineering-program-at-cornell-university-and-gave-a-seminar-talk-at-its-ezra-s-round-table-systems-seminar-series-titled-toward-sustainable-food-and-chemical-productions-via-systems-engineering-approaches",
          title: 'Invited and hosted by Prof. Fengqi You, Dr. Jiang visited Systems Engineering program...',
          description: "Prof. Jiang gave seminar talk",
          section: "News",},{id: "news-a-preprint-on-data-facilitated-numerical-framework-for-richards-equation-to-model-water-flow-dynamics-in-soil-is-now-available-on-arxiv-the-paper-has-been-submitted-to-water-resources-research-the-leading-journal-in-hydrology-and-water-resources",
          title: 'A preprint on data-facilitated numerical framework for Richards equation to model water flow...',
          description: "New article",
          section: "News",},{id: "news-a-preprint-on-fast-accurate-robust-monitoring-framework-for-fault-detection-and-diagnosis-of-industrial-processes-is-submitted-to-focapd-2024-and-can-be-found-here",
          title: 'A preprint on fast, accurate, robust monitoring framework for fault detection and diagnosis...',
          description: "New article",
          section: "News",},{id: "news-in-collaboration-with-dr-tony-cai-chief-scientist-at-fractionation-research-inc-fri-dr-jiang-s-team-received-a-two-year-136-000-research-funding-from-oklahoma-center-for-the-advancement-of-science-and-technology-to-develop-and-prototype-the-real-time-process-monitoring-and-fault-diagnosis-framework-to-decarbonize-industrial-distillation-processes",
          title: 'In collaboration with Dr. Tony Cai, Chief Scientist at Fractionation Research Inc. (FRI),...',
          description: "A new OCAST award",
          section: "News",},{id: "news-invited-and-hosted-by-prof-cory-simon-dr-jiang-visited-the-school-of-chemical-biological-and-environmental-engineering-at-oregon-state-university-and-gave-a-seminar-talk",
          title: 'Invited and hosted by Prof. Cory Simon, Dr. Jiang visited the School of...',
          description: "Prof. Jiang gave seminar talk",
          section: "News",},{id: "news-we-are-excited-to-have-fangyuan-ma-a-phd-student-from-beijing-university-of-chemical-technology-join-clams-as-a-visiting-scholar-fangyuan-will-work-with-the-team-over-the-next-6-months-to-develop-novel-fault-diagnosis-algorithms-for-industrial-process-monitoring-welcome-fangyuan",
          title: 'We are excited to have Fangyuan Ma, a PhD student from Beijing University...',
          description: "Fangyuan Ma joins CLAMS as a visiting scholar",
          section: "News",},{id: "news-a-preprint-on-physics-constrained-active-learning-for-soil-moisture-estimation-and-optimal-sensor-placement-is-available-here-this-is-a-collaborative-work-with-prof-bing-yao-from-university-of-tennessee-knoxville-and-prof-jianxin-xie-from-university-of-virginia",
          title: 'A preprint on physics-constrained active learning for soil moisture estimation and optimal sensor...',
          description: "New article",
          section: "News",},{id: "news-prof-jiang-s-paper-is-among-the-top-10-downloaded-aiche-journal-articles-in-2023-this-work-was-published-in-aiche-journal-s-2022-futures-issue-which-features-creative-early-career-researchers-in-chemical-engineering",
          title: 'Prof. Jiang’s paper is among the top 10% downloaded AIChE Journal articles in...',
          description: "top 10% download",
          section: "News",},{id: "news-in-collaboration-with-dr-paritosh-ramanan-we-are-excited-to-receive-funding-from-nsf-s-clean-energy-technology-initiative-for-our-project-titled-eager-cet-decentralized-algorithms-for-integrating-decarbonized-chemical-process-heating-with-renewable-driven-electric-power-systems",
          title: 'In collaboration with Dr. Paritosh Ramanan, we are excited to receive funding from...',
          description: "A new NSF award",
          section: "News",},{id: "news-in-summer-2024-dr-jiang-delivered-a-virtual-seminar-in-the-pse-seminar-series-at-the-university-of-minnesota-invited-by-prof-qi-zhang-and-gave-a-talk-at-the-acs-fall-meeting-invited-by-prof-yuhe-tian-clams-member-alireza-miraliakbar-and-dr-jiang-received-travel-awards-to-attend-focapd-2024-and-gave-a-poster-presentation-dr-jiang-also-chaired-the-design-amp-amp-sustainability-session",
          title: 'In Summer 2024, Dr. Jiang delivered a virtual seminar in the PSE Seminar...',
          description: "Collection of news happened in Summer 2024",
          section: "News",},{id: "news-we-are-excited-to-share-our-recent-publication-in-processes-entitled-mola-enhancing-industrial-process-monitoring-using-a-multi-block-orthogonal-long-short-term-memory-autoencoder-as-part-of-the-special-issue-process-modeling-simulation-and-optimization-in-chemical-engineering-this-work-was-led-by-fangyuan-ma-a-visiting-scholar-from-beijing-university-of-chemical-technology-buct-collaborators-include-researchers-from-buct-and-louisiana-state-university",
          title: 'We are excited to share our recent publication in Processes entitled “MOLA: Enhancing...',
          description: "New publication in Processes",
          section: "News",},{id: "news-our-amazing-undergraduate-researcher-tylee-kareck-successfully-received-multiple-phd-offers-from-ut-austin-texas-a-amp-amp-m-and-u-of-utah-she-will-continue-her-graduate-study-at-texas-a-amp-amp-m-in-fall-2025-congratulations-tylee",
          title: 'Our amazing undergraduate researcher, Tylee Kareck, successfully received multiple PhD offers from UT...',
          description: "Tylee going for grad school",
          section: "News",},{id: "news-our-amazing-graduate-student-saba-ghasemi-naraghi-has-successfully-received-an-summer-internship-offer-from-american-airlines-at-its-it-operations-research-group-congratulations-saba",
          title: 'Our amazing graduate student, Saba Ghasemi Naraghi, has successfully received an summer internship...',
          description: "Saba going for internship",
          section: "News",},{id: "news-dr-jiang-visited-arizona-state-university-and-gave-a-seminar-talk-toward-sustainable-chemical-and-food-production-via-process-systems-engineering-innovations-to-faculty-and-students-at-the-school-for-engineering-of-matter-transport-and-energy",
          title: 'Dr. Jiang visited Arizona State University and gave a seminar talk “Toward Sustainable...',
          description: "Prof. Jiang gave seminar talk",
          section: "News",},{id: "news-our-group-has-been-very-productive-in-2025-publishing-7-preprints-so-far-that-are-under-review-or-accepted-topics-include-supply-chain-optimization-microgrid-operation-optimization-water-infiltration-modeling-bayesian-approach-for-inverse-problems-multicomponent-distillation-optimization-process-monitoring-and-analytics-and-more",
          title: 'Our group has been very productive in 2025, publishing 7 preprints so far...',
          description: "Check out new preprints",
          section: "News",},{id: "news-dr-jiang-receives-a-500-000-award-from-the-national-science-foundation-on-project-career-data-driven-physics-augmented-process-systems-engineering-framework-for-digital-sustainable-agriculture-the-nsf-career-award-is-the-foundation-s-most-prestigious-award-in-support-of-early-career-faculty-who-have-the-potential-to-serve-as-academic-role-models-in-research-and-education-check-out-the-osu-news-release",
          title: 'Dr. Jiang receives a $500,000 award from the National Science Foundation on project...',
          description: "NSF CAREER award",
          section: "News",},{id: "news-our-group-had-a-strong-presence-in-the-35th-european-symposium-on-computer-aided-process-engineering-escape-conference-held-at-ku-leuven-belgium-we-gave-three-oral-talks-including-one-keynote-talk-and-one-poster-presentation-on-our-latest-research",
          title: 'Our group had a strong presence in the 35th European Symposium on Computer...',
          description: "Conference presentations",
          section: "News",},{id: "news-we-are-excited-to-share-our-recent-publication-in-industrial-amp-amp-engineering-chemistry-research-entitled-harnessing-process-knowledge-via-soft-sensing-for-accurate-online-monitoring-a-study-on-the-dow-data-challenge-problem-this-paper-presents-a-lightweight-effective-process-monitoring-framework-that-synergistically-incorporates-process-knowledge-into-online-monitoring",
          title: 'We are excited to share our recent publication in Industrial &amp;amp;amp; Engineering Chemistry...',
          description: "New publication in I&amp;EC Research",
          section: "News",},{id: "news-we-are-excited-to-share-our-recent-publication-in-aiche-journal-entitled-minimum-reflux-calculation-for-multicomponent-distillation-in-multi-feed-multi-product-columns-algorithms-and-examples-as-the-second-part-of-a-series-of-papers-on-solving-this-long-standing-problem-in-chemical-engineering",
          title: 'We are excited to share our recent publication in AIChE Journal entitled “Minimum...',
          description: "New publication in AIChE Journal",
          section: "News",},{id: "news-dr-jiang-visited-university-of-oklahoma-and-gave-a-seminar-talk-toward-sustainable-chemical-and-food-production-via-process-systems-engineering-innovations-to-faculty-and-students-at-the-school-of-sustainable-chemical-biological-and-materials-engineering",
          title: 'Dr. Jiang visited University of Oklahoma and gave a seminar talk “Toward Sustainable...',
          description: "Prof. Jiang gave seminar talk",
          section: "News",},{id: "news-our-paper-entitled-mp-fvm-enhancing-finite-volume-method-for-water-infiltration-modeling-in-unsaturated-soils-via-message-passing-encoder-decoder-network-is-accepted-by-computers-and-geotechnics-one-of-the-premier-journals-in-civil-environmental-engineering-and-geotechnics-this-paper-presents-a-novel-data-driven-numerical-scheme-for-solving-n-dimensional-richards-equation-with-superior-accuracy-and-stability",
          title: 'Our paper entitled “MP-FVM: Enhancing Finite Volume Method for Water Infiltration Modeling in...',
          description: "Zeyuan publishes on Computers and Geotechnics",
          section: "News",},{id: "news-zeyuan-and-saba-successfully-defended-their-phd-dissertations-on-december-3-and-4-respectively-saba-will-head-to-american-airlines-as-a-full-time-research-scientist-and-zeyuan-will-begin-his-postdoc-in-the-department-of-mathematics-at-lehigh-university-working-with-prof-yue-yu-on-neural-operator-learning-congratulations-dr-song-and-dr-ghasemi-more-news-to-come",
          title: 'Zeyuan and Saba successfully defended their PhD dissertations on December 3 and 4,...',
          description: "PhD defense",
          section: "News",},{id: "projects-research-statement",
          title: 'Research Statement',
          description: "Overall research objectives and rationale, as well as ongoing research projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/researchstatement/";
            },},{id: "projects-innovating-future-generation-separation-technologies",
          title: 'Innovating future-generation separation technologies',
          description: "To improve energy efficiency and enable industrial decarbonization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/separations/";
            },},{id: "projects-sustainable-intensification-of-global-agriculture-and-food-systems",
          title: 'Sustainable intensification of global agriculture and food systems',
          description: "For sustainable, resilient production of food products",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sustainability/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

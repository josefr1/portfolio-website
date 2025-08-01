/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jose Fernandez-Rocha",
  title: "Hello! I'm Jose",
  subTitle: emoji(
    "A highly passionate and results-driven ML Engineer with a strong background in building innovative applications, large language models (LLMs), and machine learning solutions. My expertise spans across various technologies, libraries, and frameworks, with a focus on delivering robust and user-centric systems."
  ),
  resumeLink:
  "./assets/images/resume_jose_fernandezrocha.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/josefr1",
  linkedin: "https://www.linkedin.com/in/josefernandez139/",
  gmail: "jfernandezrocha1050@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "My skills and expertice in various different technologies, libaries & frameworks",
  skills: [
    emoji("⚡ Engineered and deployed end-to-end machine learning and large language model (LLM) solutions for diverse applications."),
    emoji("⚡ Developed and integrated advanced AI capabilities into robust web and mobile applications, enhancing user experiences."),
    emoji("⚡ Designed and implemented scalable data processing pipelines and CI/CD workflows, ensuring efficient data management and automated deployment.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  }, 
  {
    skillName: "swift",
    fontAwesomeClassname: "fab fa-swift"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "mongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "pytorch",
    fontAwesomeClassname: "fas fa-microchip"
  },
  {
    skillName: "tensorflow",
    fontAwesomeClassname: "fas fa-microchip"
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "fas fa-microchip"
  },
  {
    skillName: "typescript",
    fontAwesomeClassname: "fab fa-react"
  },
  /*
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  **/
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
 
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
display: true, // Set false to hide this section, defaults to true
schools: [
  {
    schoolName: "University of California, Berkeley",
    logo: require("./assets/images/berkeleylogo.png"),
    subHeader: "Bachelors of Arts in Data Science", 
    duration: "August 2020 - May 2024",
    desc: "",
    descBullets: [
      "took 28 units(7 courses) of Electrical Engineering & Computer Science(EECS) minor",
      "involved with ANova, a nonprofit tech club, for 2 years where I held multiple leadership positions."
    ]
  }
]
};

// Your top 3 proficient stacks/tech experience
//Currently Hidden
const techStack = {
viewSkillBars: false, //Set it to true to show Proficiency Section
experience: [
  {
    Stack: "Frontend Design", 
    progressPercentage: "60%" 
  },
  {
    Stack: "Machine Learning & Artificial Intelligence",
    progressPercentage: "95%"
  },
  {
    Stack: "Software Engineering",
    progressPercentage: "80%"
  }
],
displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ML Engineer",
      company: "Sooth.fyi",
      companylogo: require("./assets/images/soothLogo.png"),
      date: "May 2024 – Present",
      desc: "",
      descBullets: [
        "Created an LLM model using the HuggingFace libary, pytorch & NLP that outputs an articles media bias rating.",
        "Developed a semantic search algorithm to match articles across different media bias categories, enhancing user access to diverse perspectives.",
        "Designed a pipeline for producing daily and weekly news summaries, including data collection, topic categorization, and summary generation, optimizing the presentation of news across various topics.",
        "Built a user search topic classification pipeline using HDBSCAN for clustering, c-TF-IDF for keyword extraction, and zero-shot models exposed via a REST API to categorize searches into topics and subtopics."
      ]
    },
  
    {
      role: "Founding Engineer",
      company: "Gameloop.io",
      companylogo: require("./assets/images/gameloop.png"),
      date: "June 2024 – Present",
      desc: "",
      descBullets: [
        "Built a customized TTS pipeline with end-to-end development and hyperparameter tuning for high-quality, multilingual in-game narration and chat.",
        "Developed a username-generation model by merging datasets from Twitter, Reddit, and other sources to produce diverse, gamer-friendly handles.",
        "Engineered a suite of mobile games by integrating AI-generated sprites (via ControlNet and FLUX) into core templates and implemented a multimodal content pipeline for dynamic, context-aware in-game chat and comments.",
        "Designed front-end components (avatar customization UI, scrollable game feed with title, description, live leaderboard, comments, 5-star reviews, sorting and implemented back-end APIs for persistent storage and retrieval of user metadata."
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "SMA Inc.",
      companylogo: require("./assets/images/smaLogo.png"),
      date: "June 2021 – August 2021",
      desc: "",
      descBullets: [
        "Engineered a C# Microsoft Project add in, enhancing the Ribbon UI with 20+ productivity tools—bulk task generators, automated resource leveling, and custom report exporters—that cut manual scheduling time by 50%.",
        "Migrated legacy VBA macros into C#, reverse engineered core workflows, and authored comprehensive technical documentation, transforming unstructured code comments into a structured developer guide and end user manual."
      ]
    }
  ], 
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


const bigProjects = {
  title: "Projects",
  subtitle: "Projects from startups, university courses and personal creations that I have worked on",
  projects: [
    {
      image: require("./assets/images/podcast_model.png"),
      projectName: "Podcast AI Model",
      projectDesc: "Created a podcast model using DeepSeek for text generation and Koroko for text-to-speech that outputs an audio file of a 2 person conversational podcast.",
      footerLink: [
        {
          name: "github link to project",
          url: "https://github.com/josefr1/podcast_model"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/text_generation.png"),
      projectName: "Message Generation Model",
      projectDesc: "Built a responsive text generation pipeline capable of producing human-like chat messages with configurable personality styles, contextual awareness, and enforced output formatting using Llama 3.2-3B-Instruct and prompt engineering.",
      footerLink: [
        {
          name: "github link to project",
          url: "https://github.com/josefr1/message_generation_model"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/image_model.png"),
      projectName: "Comment Generation Model",
      projectDesc: "Developed a multimodal content generation pipeline integrating image captioning (BLIP) and language modeling (Llama 3.2-3B-Instruct) to automatically generate natural, human-like social media comments using prompt engineering & contextual awareness",
      footerLink: [
        {
          name: "github link to project",
          url: "https://github.com/josefr1/comment_generation_model"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/spotify.png"),
      projectName: "Spotify User Sentiment Analysis(Data144)",
      projectDesc: "Conducted decision tree analysis, exploring user features' impact on premium subscription, proposing actionable recommendations based on validated findings compared with K-Means clustering results.",
      footerLink: [
        {
          name: "github link to project",
          url: "https://github.com/josefr1/Data144/blob/main/%5Bdecision_trees%5DSpotify_Project.ipynb"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/digit_classifier.png"),
      projectName: "Digit Neural Net Classifier(CS188)",
      projectDesc: "Developed a neural network for digit classification, handling variable-length inputs, including a Language Identification model with recurrent neural network architecture.",
      footerLink: [
        {
          name: "github link to project",
          url: "https://github.com/josefr1/CS188/tree/main/machinelearning"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/neural_net.png"),
      projectName: "Neural Network Architecture & Analysis(CS189)",
      projectDesc: "Created the forward and backward propagation functions for multiple neural networks like sigmoid, reLU, SoftMax, etc... while analyzing efficiency.",
      footerLink: [
        {
          name: "github link to project",
          url: "https://github.com/josefr1/CS189/tree/main/hw6"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Temp",
      subtitle:
        "Temp",
      image: require("./assets/images/smaLogo.png"),
      imageAlt: "Temp",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "temp",
          url: ""
        }
      ]
    },
    {
      title: "Temp",
      subtitle:
        "",
      image: require("./assets/images/smaLogo.png"),
      imageAlt: "Temp",
      footerLink: [
        {
          name: "temp",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "For job opportunities, roles or to get in touch",
  number: "+1 760-812-9125",
  email_address: "jfernandezrocha105@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

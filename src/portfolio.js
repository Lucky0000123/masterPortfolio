/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rahul's Portfolio",
  description:
    "A passionate Experienced Manufacturing Automation and FMS Engineer with 10+ years in mining, specializing in automation, wireless communication, and process control.",
  og: {
    title: "Rahul Dhiman Portfolio",
    type: "website",
    url: "LinkedIN/rahul-dhiman2024/",
  },
};

//Home Page
const greeting = {
  title: "Rahul Dhiman",
  logo_name: "RahulDhiman",

  subTitle:
    "A passionate and Experienced Manufacturing, Automation and FMS Engineer with 10+ years in mining, specializing in automation, wireless communication, process control, and leveraging Python and SQL for data-driven solutions and operational excellence.",
  resumeLink:
    "https://drive.google.com/file/d/1DI6d4TDsEF0ozjDLkVMwIohyrtxt3TR5/view?usp=drive_link",
  portfolio_repository: "https://github.com/Lucky0000123/masterPortfolio.git",
  githubProfile: "https://github.com/Lucky0000123",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Lucky0000123",
  // linkedin: "https://www.linkedin.com/in/rahul-dhiman2024/",
  // gmail: "Rahul.dhiman0000123@gmail.com",

  {
    name: "Github",
    link: "https://github.com/Lucky0000123",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rahul-dhiman2024/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:Rahul.dhiman0000123@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Fleet Optimization & Intelligent Automation",
      fileName: "DataScienceImg",
      skills: [
        "🚀 Mining Transformation: Revolutionizing operations with WENCO FMS and Siemens PLC, enhancing efficiency, safety, and cost savings.",
        "📊 Data Insights: Utilizing Power BI and analytics to drive real-time, smarter decisions and production optimization.",
        "⚡ Automation Innovation: Streamlining workflows with VISIO ROCK and Control Rooms to maximize output and minimize downtime.",
        "🛡️ Safety First: Embedding ISO-certified safety protocols for secure, reliable mining operations.",
        "🎯 Project Leadership: Delivering RANJANT Mesh Networks and advanced monitoring systems for peak productivity.",
      ],
      softwareSkills: [
        {
          skillName: "Fleet Optimization",
          fontAwesomeClassname: "mdi-truck",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Data Analytics",
          fontAwesomeClassname: "mdi-chart-bar",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Automation",
          fontAwesomeClassname: "mdi-robot-outline",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Safety leadership",
          fontAwesomeClassname: "mdi-safety-goggles",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Project Excellence",
          fontAwesomeClassname: "mdi-bullseye",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Automation & Advanced Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚙️ Driving automation in mining and production operations with advanced logic control Automation like Rockwell Automation and Siemens.",
        "📊 Leveraging data analytics to optimize production and reduce operational costs using tools like Microsoft Power BI.",
        "🚀 Spearheading cutting-edge fleet management innovations using WENCO FMS and RANJANT Mesh Network to optimize mining operations and maximize resource utilization.",
        "💻 Demonstrating strong proficiency in Python programming and SQL database architecture, enabling efficient data management, querying, and optimization for scalable and reliable solutions.",
        "📡 Mastering wireless communication systems for industrial automation, ensuring uninterrupted connectivity in mining and production environments.",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "WENCO FMS",
          fontAwesomeClassname: "mdi:truck",
          style: {
            color: "#0078D7",
          },
        },

        {
          skillName: "PLC Automation (Siemens TIA Portal)",
          fontAwesomeClassname: "simple-icons:siemens",
          style: {
            color: "#0071C5",
          },
        },
        {
          skillName: "AutoCAD",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: {
            color: "#0696D7",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftoffice",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "Wireless Communication",
          fontAwesomeClassname: "mdi:access-point",
          style: {
            color: "#1DA1F2",
          },
        },

        {
          skillName: "Data Analysis",
          fontAwesomeClassname: "mdi-chart-bar",
          style: {
            color: "#FF6F00",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "RANJANT Mesh Network",
          fontAwesomeClassname: "mdi:access-point-network",
          style: {
            color: "#0078D7",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "BITS Pilani",
      iconifyClassname: "mdi:school", // Represents an educational institution
      style: {
        color: "#2A73CC",
      },
      profileLink: "https://www.bits-pilani.ac.in/",
    },

    {
      siteName: "University of Derby",
      iconifyClassname: "mdi:university", // Represents higher education institutions
      style: {
        color: "#FF6F00",
      },
      profileLink: "https://www.derby.ac.uk/",
    },

    {
      siteName: "Siemens Training",
      iconifyClassname: "simple-icons:siemens",
      style: {
        color: "#0071C5",
      },
      profileLink: "https://www.siemens.com/",
    },
    {
      siteName: "Microsoft Power BI",
      iconifyClassname: "simple-icons:powerbi",
      style: {
        color: "#F2C811",
      },
      profileLink: "https://powerbi.microsoft.com/",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "mdi:school-outline", // Represents an educational platform
      style: {
        color: "#A435F0", // Matches Udemy's branding color
      },
      profileLink: "https://www.udemy.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Derby",
      subtitle: "University Diploma in Mineral Extractive Studies",
      logo_path: "university_of_derby_logo.png",
      alt_name: "University of Derby",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ Specialized in Minerals Management, Blasting Operations, and Transportation Systems for open-pit mining.",
        "⚡ Learned advanced techniques in production planning, process optimization, and sustainable mining practices.",
        "⚡ Gained hands-on experience in safety protocols and environmental sustainability, critical to mining operations.",
        "⚡ Focused on integrating industry standards for improving fleet management and enhancing operational productivity.",
      ],
      website_link: "https://www.derby.ac.uk/",
    },
    {
      title: "BITS Pilani - Work Integrated Learning Programme",
      subtitle: "M.Tech. in Manufacturing Management",
      logo_path: "bits_pilani_logo.png",
      alt_name: "BITS Pilani",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Studied advanced concepts in Lean Manufacturing, Project Management, and Sustainable Industrial Practices.",
        "⚡ Gained practical experience in analyzing production systems and implementing process improvements.",
        "⚡ Worked on case studies and projects focused on minimizing waste and optimizing workflows in manufacturing environments.",
        "⚡ Completed coursework on Six Sigma methodologies, supply chain optimization, and advanced operations research.",
      ],
      website_link: "https://www.bits-pilani.ac.in/",
    },
    {
      title: "Kalinga University",
      subtitle: "MBA in Operations and Management",
      logo_path: "kalinga_university_logo.png",
      alt_name: "Kalinga University",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Focused on Operations Management, Business Strategy, and International Business practices.",
        "⚡ Developed leadership and managerial skills to effectively manage teams in high-stakes operational environments.",
        "⚡ Gained expertise in optimizing business processes and driving organizational efficiency.",
        "⚡ Worked on real-world case studies involving supply chain management and risk mitigation in operations.",
      ],
      website_link: "https://www.kalingauniversity.ac.in/",
    },
    {
      title: "Punjab Technical University",
      subtitle: "B.Tech. in Electronics and Communication Engineering",
      logo_path: "ptu_logo.png",
      alt_name: "PTU",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ Built a strong foundation in electronics and communication principles, including signal processing, digital systems, and wireless technologies.",
        "⚡ Studied core subjects like Microprocessors, Control Systems, and Embedded Systems.",
        "⚡ Worked on projects involving IoT-based systems and communication protocols.",
        "⚡ Developed technical and problem-solving skills that laid the groundwork for roles in automation and fleet management.",
      ],
      website_link: "https://www.ptu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Lean Six Sigma Green Belt (CPD Accredited)",
      subtitle: "- IMC Institute",
      logo_path: "imc_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1CmfpgjicABWEdGf6u-4Q14EQuaKeZpxJ/view?usp=drive_link", // Add your certificate link here
      alt_name: "IMC Institute",
      color_code: "#1F70C199",
    },
    {
      title: "Lean Six Sigma Black Belt (ICBB) (CPD CERTIFIED)",
      subtitle: "- IMC Institute",
      logo_path: "imc_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10EVO8qZ_QifUHSzTxz3VrDjV42dT9lyh/view?usp=drive_link", // Add your certificate link here
      alt_name: "IMC Institute",
      color_code: "#1F70C199",
    },
    {
      title: "Microsoft Power BI Data Analyst Specialization",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZQyFr5pRtd729UYueQUV0osWLv4PWJxt/view?usp=drive_link", // Add your certificate link here
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Certified Automation Professional",
      subtitle: "- Arabian InfoTech Training Institute",
      logo_path: "arabian_info_tech_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1CBx69chuYajKW5bpBBvlCur8r0v1C3or/view?usp=drive_link", // Add your certificate link here
      alt_name: "Arabian InfoTech",
      color_code: "#0073E699",
    },
    {
      title: "Introduction to Internet of Things",
      subtitle: "- IIT Bombay",
      logo_path: "iit_bombay_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1RzhEmXthmAqZSsDpFt6T84WyoQniwdVV/view?usp=drive_link", // Add your certificate link here
      alt_name: "IIT Bombay",
      color_code: "#FF6F0099",
    },
    {
      title: "McKinsey Forward Program",
      subtitle: "- McKinsey & Company",
      logo_path: "mckinsey_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19VtP7DQnx1s2766vIGPf_7apCO6tcp2u/view?usp=drive_link", // Add your certificate link here
      alt_name: "McKinsey & Company",
      color_code: "#00000099",
    },

    {
      title: "Machine Application Performance Training",
      subtitle: "- Caterpillar Inc.",
      logo_path: "caterpillar_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19ePl7rddoSAPoarV1F6QL27ZFgOtd7EH/view?usp=drive_link", // Add your certificate link here
      alt_name: "Caterpillar",
      color_code: "#FFBB0099",
    },
    {
      title: "Emergency First Aider plus Defib and CPR",
      subtitle: "- Highfield",
      logo_path: "highfield_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vF6Sht1_mF2A1omr95rc_drygvutrO1i/view?usp=drive_link", // Add your certificate link here
      alt_name: "Highfield",
      color_code: "#FF000099",
    },
    {
      title: "ISO 45001 - Occupational Health & Safety Management System",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1HnttHqbjOjy-r-dE7t9vwJWRxzB7VbY2/view?usp=drive_link", // Add your certificate link here
      alt_name: "Udemy",
      color_code: "#A435F099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Skilled in implementing advanced FMS, integrating automation technologies, and leveraging data-driven insights to enhance efficiency and safety in mining operations. I specialize in managing complex projects, optimizing crusher operations, streamlining production workflows, and maintaining quality control standards. Proficient in Python and SQL, I utilize data analysis to drive informed decision-making, ensuring operational excellence and a culture of safety across large-scale mining environments..",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Fleet Management System Engineer",
          company: "Eramet Indonesia",
          company_url: "https://www.eramet.com/en",
          logo_path: "eramet_logo.png",
          duration: "September 2024 - Present",
          location: "Weda Bay, Indonesia",
          description:
            "Managing fleet operations in one of the world’s largest nickel mines. Implementing advanced Fleet Management Systems (FMS) to optimize operational efficiency, reduce downtime, and enhance resource utilization. Leading system upgrades, real-time monitoring, and driver safety initiatives to ensure compliance and productivity.",
          color: "#00539F",
        },
        {
          title: "Production Control and Automation Lead Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "February 2024 - September 2024",
          location: "Ras Al Khaimah, UAE",
          description:
            "Led automation and control for PLC-automated crusher plants, configuring Siemens PLC systems for improved efficiency. Planned and established control rooms to enhance operational monitoring and troubleshooting. Integrated advanced technologies into production to boost output, ensure safety, and minimize risks in hazardous conditions.",
          color: "#4CAF50",
        },
        {
          title: "Fleet Management System Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "January 2021 - February 2024",
          location: "Ras Al Khaimah, UAE",
          description:
            "Implemented and maintained WENCO Fleet Management Systems to streamline fleet operations, reduce costs, and enhance productivity. Analyzed fleet data to identify trends, improve scheduling, and optimize performance. Collaborated with cross-functional teams to ensure seamless integration of automation and communication technologies.",
          color: "#4CAF50",
        },
        {
          title: "Production Process Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "August 2017 - January 2021",
          location: "Ras Al Khaimah, UAE",
          description:
            "Monitored and improved production processes by integrating automation technologies and optimizing workflows. Conducted root cause analysis for equipment bottlenecks and breakdowns, reducing downtime and improving system reliability. Enhanced operational safety through training initiatives and adherence to best practices.",
          color: "#4CAF50",
        },
        {
          title: "Electronics and Electrical Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "May 2015 - August 2017",
          location: "Ras Al Khaimah, UAE",
          description:
            "Oversaw maintenance and troubleshooting of electrical and electronic systems across quarry operations. Designed and implemented solutions for improved equipment reliability and operational efficiency. Contributed to the setup and optimization of automated systems within production facilities.",
          color: "#4CAF50",
        },
        {
          title: "Senior Field Coordinator and Trainer",
          company: "PerfectUS Educational & Training Solutions",
          company_url: "https://focalyt.com/",
          logo_path: "perfectus_logo.png",
          duration: "March 2014 - April 2015",
          location: "Chandigarh, India",
          description:
            "Provided training and technical guidance on electrical and automation systems to engineering teams. Managed field projects, ensuring timely delivery and adherence to technical specifications. Contributed to curriculum development and hands-on training modules for professionals.",
          color: "#FF6F00",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "OFC Training Engineer Intern",
          company: "Bharat Sanchar Nigam Limited (BSNL)",
          company_url: "https://www.bsnl.co.in/",
          logo_path: "bsnl_logo.png",
          duration: "Jan 2012 - Apr 2012",
          location: "Una, Himachal Pradesh, India",
          description:
            "Gained hands-on experience in Optical Fiber Communication (OFC) systems, including installation, maintenance, and troubleshooting of fiber optic networks. Learned about fiber splicing, testing, and effective communication system design for large-scale deployments.",
          color: "#0071C5",
        },
        {
          title: "Power Line Carrier Control Intern",
          company: "Punjab Communication Limited",
          company_url: "https://www.pclindia.in/",
          logo_path: "pcl_logo.png",
          duration: "Nov 2012 - May 2013",
          location: "Mohali, Punjab, India",
          description:
            "Worked on Power Line Carrier Communication (PLCC) systems and learned the design, implementation, and testing of PCB circuits. Developed a strong understanding of communication protocols and control system technologies for industrial applications.",
          color: "#FFBB00",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  description:
    "Led transformative projects in mining operations, focusing on automation, fleet management, and operational efficiency. By designing centralized control rooms, deploying wireless networks, and automating crusher processes, I’ve optimized productivity and reliability. My work integrates AI-driven safety systems and advanced monitoring tools to enhance security. Leveraging Python, SQL, and real-time analytics, I drive data-informed decisions, ensuring excellence in large-scale industrial environments.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "wenco-fleet-management",
      name: "WENCO Fleet Management System Integration",
      createdAt: "2022-11-01T00:00:00Z",
      description:
        "Implemented WENCO FMS to optimize fleet operations and enhance real-time monitoring in large-scale mining environments.",
      url: "https://www.wencomine.com/",
    },
    {
      id: "Visio-rock-integration",
      name: "VISIO ROCK On-Conveyor Stone Detection System",
      createdAt: "2021-08-15T00:00:00Z",
      description:
        "Integrated VISIO ROCK system for real-time material analysis, improving production efficiency and minimizing waste.",
      url:
        "https://drive.google.com/file/d/1V7ydV-NMfGuOqmiNWiPzEQMQgv7PEJ1s/view?usp=drive_link",
    },
    {
      id: "Central-control-room",
      name: "Central Control Room Optimization",
      createdAt: "2023-03-10T00:00:00Z",
      description:
        "Designed and optimized a centralized control room to enhance operational monitoring and decision-making.",
      url:
        "https://drive.google.com/file/d/1WUJFvN2t_TfBN7Cst1cTAd8iFCiIji3T/view?usp=drive_link", // Replace with an appropriate link if available
    },
    {
      id: "plc-automation-siemens",
      name: "Siemens PLC Automation",
      createdAt: "2024-06-20T00:00:00Z",
      description:
        "Troubleshoot and maintained Siemens PLC systems to automate crusher plants, ensuring system reliability and efficiency.",
      url: "https://new.siemens.com/",
    },
    {
      id: "ranjant-mesh-network",
      name: "RANJANT Mesh Network for Mining Operations",
      createdAt: "2020-02-05T00:00:00Z",
      description:
        "Deployed a wireless mesh network to enhance communication and connectivity across mining sites.",
      url: "https://www.ranjant.com/", // Replace with a relevant URL if needed
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Rahul.png",
    description:
      "I am active on various social media platforms and always happy to connect! I can assist you with automation, fleet management systems, operational efficiency, Lean Six Sigma methodologies, industrial automation (PLC/SCADA), and mining technologies. Whether it’s about process improvement, safety optimization, or innovative solutions in industrial environments, I’m here to help! Let’s collaborate and share ideas. 🚀.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Weda, North Maluku, Indonesia",
    locality: "Weda",
    country: "Indonesia",
    region: "North Maluku",
    postalCode: "97853",
    streetAddress: "97853",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/ykDET3s5GhYeUph49",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+917807937748",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

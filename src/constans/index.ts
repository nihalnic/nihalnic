//  ------------- The sidebarLinks -----------
export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/projects.svg",
    route: "/projects",
    label: "Projects",
  },
  {
    imgURL: "/assets/icons/resources.svg",
    route: "/resources",
    label: "Resources",
  },
  {
    imgURL: "/assets/icons/dollar.svg",
    route: "/pricing",
    label: "Pricing",
  },
  {
    imgURL: "/assets/icons/about.svg",
    route: "/about",
    label: "About",
  },
  {
    imgURL: "/assets/icons/contact.svg",
    route: "https:/linkedin.com/in/nihalnic",
    label: "Contact",
  },
];

//------------ The footer ------------------

export const footerLinks = [
  {
    img: "assets/icons/linkedin.svg",
    platform: "Linkedin",
    url: "https:/linkedin.com/in/nihalnic",
  },
  {
    img: "assets/icons/instagram.svg",
    platform: "Instagram",
    url: "https:/instagram.com/imnihals",
  },
  {
    img: "assets/icons/youtube.svg",
    platform: "YouTube",
    url: "https:/youtube.com/@nihalnic",
  },
  {
    img: "assets/icons/upwork.svg",
    platform: "UpWork",
    url: "https:/youtube.com/@nihalnic",
  },
];

// -------------- The Review -----------------------

export const reviewInfo = [
  {
    image: "assets/images/user-1.png",
    alt: "Review User",
  },
  {
    image: "assets/images/user-2.png",
    alt: "Review User",
  },
  {
    image: "assets/images/user-3.png",
    alt: "Review User",
  },
  {
    image: "assets/images/user-4.png",
    alt: "Review User",
  },
  {
    image: "assets/images/user-5.png",
    alt: "Review User",
  },
];
// ------------- The subscription plan Data----------------------------
export interface PlanDetail {
  price: number[];
  discount_rate?: number[];
  time: string;
  features: string[];
}

export interface PlansDetails {
  Basic: PlanDetail[];
  Professional: PlanDetail[];
  Team: PlanDetail[];
}

export const plansDetails: PlansDetails = {
  Basic: [
    {
      price: [20],
      time: "1 month",
      features: [
        "Great Communication",
        "Double the Videos",
        "15 YouTube Shorts/Reels",
        "Up to 4 Hours of Shooting",
        "Quality Editing",
        "2 Weeks of Social Media Support",
        "Creative Photography",
        "Attention-grabbing Thumbnail",
        "Advance Gear",
        "Exciting Content Ideas",
      ],
    },
  ],
  Professional: [
    {
      price: [30],
      discount_rate: [0.1],
      time: "1 month",
      features: [
        "Outstanding Communication",
        "Triple the Videos",
        "20 YouTube Shorts/Reels",
        "Up to 6 Hours of Shooting",
        "Amazing Editing",
        "Over 3 Weeks of Social Media Assistance",
        "Creative Photography",
        "Captivating Thumbnails",
        "Advance Gear",
        "Inspiring Content Ides",
      ],
    },
  ],
  Team: [
    {
      price: [60],
      discount_rate: [0.1],
      time: "1 month",
      features: [
        "Exceptional Communication",
        "Quadruple the Videos",
        "25 YouTube Shorts/Reels",
        "Up to 8 Hours of Shooting",
        "Advanced Editing",
        "Tailored Social Media Boost",
        "Creative Photography",
        "Attention-grabbing Thumbnails",
        "Advance Gear",
        "Inspiring Content Ideas",
      ],
    },
  ],
};

//Automatic fill-up Subscription mail

export const subscriptionMail = [
  {
    Basic: {
      subject: "Exploring Your Basic Subscription Plan: Inquiry Inside!",
      mail: [
        "Hey Nic",

        "I hope this email finds you well. I'm interested in your Basic Plan for my project. The package looks promising with:",

        "-Great Communication",
        "-Double the Videos",
        "-15 YouTube Shorts/Reels",
        "-Up to 4 Hours of Shooting",
        "-Quality Editing",
        "-2 Weeks of Social Media Support",

        "Could you provide further details on pricing and availability? Looking forward to hearing from you soon.",

        "Warm regards",
      ],
    },
    Professional: {
      subject: "Ready to Ramp Up My Video Game: Professional Plan Inquiry!.",
      mail: [
        "Hey Nic",

        "I trust this email finds you well. I'm impressed by your Professional Plan and its comprehensive offerings:",

        "-Outstanding Communication",
        "-Triple the Videos",
        "-20 YouTube Shorts/Reels",
        "-Up to 6 Hours of Shooting",
        "-Amazing Editing",
        "-Over 3 Weeks of Social Media Assistance",
        "-Creative Photography",
        "-Captivating Thumbnails",

        "Could you kindly provide details on pricing and availability? Looking forward to discussing this further.",

        "Warm regards",
      ],
    },
    Team: {
      subject:
        "Leveling Up Together: Inquiry About Your Team Subscription Plan!",
      mail: [
        "Hey Nic",

        "I hope this message finds you thriving. Your Team Plan looks impressive with:",

        "-Exceptional Communication",
        "-Quadruple the Videos",
        "-25 YouTube Shorts/Reels",
        "-Up to 8 Hours of Shooting",
        "-Advanced Editing",
        "-Tailored Social Media Boost",
        "-Creative Photography",
        "-Attention-grabbing Thumbnails",
        "-Advanced Gear",
        "-Inspiring Content Ideas",

        "Could you provide more details on pricing and availability? Excited to explore this further.",

        "Warm regards",
      ],
    },
  },
];

//  FAQ Question ------------

export const faq = [
  {
    question:
      "What if I have questions or need assistance during my content creation?",
    ans: "Communication is key! Feel free to reach out to me at any time with questions, feedback, or requests for assistance. I'm here to support you every step of the way and ensure that your filmmaking experience is as smooth and enjoyable as possible.",
  },
  {
    question: "What sets your editing services apart from others?",
    ans: "My editing style focuses on delivering top-notch quality and creativity. I pay close attention to detail to ensure that every video is crafted to captivate and engage viewers effectively, thus enhancing the overall experience and boosting the content creator's brand presence.",
  },
  {
    question: "What kind of social media support do you provide?",
    ans: "We provide extensive social media assistance after content release, which involves crafting strategic posting schedules, actively engaging with audience comments and messages, and analyzing performance metrics to gauge the content's impact across different platforms.",
  },
  {
    question: "Can I customize my subscription plan to suit my specific needs?",
    ans: "Absolutely! I understand that every project is unique, and I'm more than happy to tailor the subscription plan to align with your individual requirements. Just let me know your preferences, and we can adjust the plan accordingly.    ",
  },
];

export const projects = [
  {
    name: "Mobeldesignmuseum",
    imgURL: "/assets/images/work-1.png",
    tags: ["Adobe XD", "Notion", "Webflow", "jQuery"],
    url: "https://www.mobeldesignmuseum.se/",
  },
  {
    name: "Rise Works",
    imgURL: "/assets/images/work-2.png",
    tags: ["Figma", "Lotties", "Webflow", "jQuery"],
    url: "https://www.riseworks.io/",
  },
  {
    name: "Omun",
    imgURL: "/assets/images/work-3.png",
    tags: ["Weflow CMS"],
    url: "https://www.somosomun.com/",
  },
  {
    name: "Disseny Marked",
    imgURL: "/assets/images/work-4.png",
    tags: ["Figma", "Weflow CMS", "Webflow", "jQuery"],
    url: "https://www.dissenymarked.com/",
  },
  {
    name: "Downstream",
    imgURL: "/assets/images/work-5.png",
    tags: ["Webflow CMS", "Webflow", "jQuery"],
    url: "https://www.trydownstream.io/",
  },
  {
    name: "Loopix",
    imgURL: "/assets/images/work-6.png",
    tags: ["E-Commerce", "Figma", "Webflow", "jQuery"],
    url: "https://www.loopix.eco/",
  },
  {
    name: "Blank Farm",
    imgURL: "/assets/images/work-7.png",
    tags: ["Webflow", "Figma", "3D Render"],
    url: "https://www.blankfarm.com/",
  },
  {
    name: "Mobeldesignmuseum",
    imgURL: "/assets/images/work-1.png",
    tags: ["Webflow", "Figma", "webflow CMS"],
    url: "https://paolospinoglio.com/",
  },
];

// Resources data
export const data: TabData[] = [
  {
    Snippets: [
      {
        title: "Scrollable Native Webflow Slider - Custom Code ",
        image: "/assets/images/code-img.png",
        route: "/",
      },
    ],
  },
  {
    Templates: [
      {
        title: "Finflux",
        image: "/assets/images/template.png",
        route: "https://1956669833840.gumroad.com/l/ycsde",
      },
    ],
  },
  {
    Blog: [
      {
        title:
          "Top Side Hustles for Introverts: Discover the Best Opportunities for Quiet Earning",
        image: "/assets/images/blog-3.png",
        route:
          "https://arafatstories.medium.com/top-side-hustles-for-introverts-discover-the-best-opportunities-for-quiet-earning-77df0133bbb",
      },
      {
        title: "Native Apps Are Dead — Get Over It",
        image: "/assets/images/blog-1.png",
        route:
          "https://andrewzuo.com/native-apps-are-dead-get-over-it-9944e5253c93",
      },
      {
        title:
          "11 Companies Making $1M+ That Are [Practically] Bedroom Businesses        ",
        image: "/assets/images/blog-2.png",
        route:
          "https://medium.com/swlh/11-companies-making-1m-that-are-practically-bedroom-businesses-b6fae1f045f2",
      },
      {
        title: "Why AI Is Eating The Web3 Creator Economy",
        image: "/assets/images/blog-4.png",
        route:
          "https://medium.com/@theo/why-ai-is-eating-the-web3-creator-economy-80079300b431",
      },
    ],
  },
  {
    Videos: [
      {
        title: "JAVASCRIPT Pure function - All about This",
        image: "/assets/images/video-1.png",
        route: "https://youtu.be/BceIT1Lke-E?si=WBm1OBCzvegTZw_l",
      },
      {
        title: "Fetch better have my money - No DATA ",
        image: "/assets/images/video-2.png",
        route: "https://youtu.be/ubw2hdQIl4E?si=azY8yRQBwUJKvBaH",
      },
      {
        title: "JAVASCRIPT Pure function - All about This",
        image: "/assets/images/video-3.png",
        route: "https://youtu.be/r5rYoJFWfN0?si=jK1PUhq4YuAq7RET",
      },
    ],
  },
];

export interface TabData {
  [key: string]: TabDataItem[];
}

export interface TabDataItem {
  title: string;
  image: string;
  route: string;
}

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Web3 wallets trading platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 w-50",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 brightness-[0.8]",
    titleClassName: "justify-center md:justify-start lg:justify-center w-50",
    img: "/walletfinder.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WalletFinder",
    des: "Wallet Finder.ai helps crypto traders find profitable wallets and trades with powerful analytics and insights.",
    img: "/walletfinder-project.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nest.svg", "/fm.svg"],
    link: "https://app.walletfinder.ai",
  },
  {
    id: 2,
    title: "Taxgenii",
    des: "Taxgenii is a smart custom ai based chatbot that helps you with your tax related queries",
    img: "/taxgenii-project.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/FastAPI.svg", "/mysql.svg"],
    link: "https://taxgenii.lodgeit.net.au",
  },
  {
    id: 3,
    title: "Libbi",
    des: "Collaborated on Libbi, an AI-powered business assistant, building scalable UI components and automated tasks for data scraping, payments, and web navigation.",
    img: "/libbi-project.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/FastAPI.svg"],
    link: "https://beta.libbi.co/",
  },
  {
    id: 4,
    title: "B Search",
    des: "Enhanced BSearch, a public data intelligence platform, by adding advanced search features, optimizing UX, integrating Web3 minting, and ensuring efficient large-scale data handling.",
    img: "/bsearch-project.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/nest.svg"],
    link: "https://bsearchau.accziom.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Waleed was instrumental in building WalletFinder from the ground up. His expertise in React and Next.js helped us deliver a seamless user experience, and his attention to detail ensured our analytics dashboard was both powerful and intuitive. Highly recommended for any web3 or fintech project.",
    name: "Adeel Khan",
    title: "Co-Founder, WalletFinder.ai",
  },
  {
    quote:
      "Working with Waleed on Taxgenii was a fantastic experience. He quickly understood our requirements and implemented a robust AI chatbot that exceeded our expectations. His backend and API integration skills are top-notch.",
    name: "Sarah Ahmed",
    title: "Product Manager, LodgeIT",
  },
  {
    quote:
      "Waleed's contributions to Libbi were invaluable. He built scalable UI components and automated complex workflows, making our business assistant smarter and more efficient. His collaborative approach made the whole process smooth.",
    name: "James Lee",
    title: "CTO, Libbi.co",
  },
  {
    quote:
      "We brought Waleed on board to enhance BSearch's advanced search features and optimize our UX. He delivered high-quality code, communicated clearly, and was always proactive in solving challenges. Would love to work with him again.",
    name: "Emily Brown",
    title: "Lead Developer, BSearch",
  },
  {
    quote:
      "Waleed is a true professional. He is flexible with time zones, always meets deadlines, and brings creative solutions to the table. Our project benefited greatly from his full stack expertise.",
    name: "Omar Farooq",
    title: "Project Lead, Freelance Client",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Developed and optimized interactive user interfaces using React.js, ensuring seamless user experiences and responsive design.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Engineer",
    desc: "Designed and implemented robust server-side logic, RESTful APIs, and database schemas to support scalable web and mobile applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI Engineer",
    desc: "Built and deployed machine learning models, integrating AI-driven features into products to solve complex business problems.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer",
    desc: "Engineered and maintained end-to-end software solutions, collaborating across teams to deliver high-quality, reliable applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/waleedk402",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/waleedk402/",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/ig_waleedk/",
  },
];

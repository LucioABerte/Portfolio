
const data = {
    logo: {
        src: "react-blue.png",
        title: "LUCIO BERTÉ"
    },

    nav: {
        a: ["Home", "About", "Stack", "Projects", "Contact"]
    },

    header: {
        title: ["FULL STACK", "Developer"],
        desc: ["Specializing in", "REACT JS"],
        img: "Lucio.jpg",
        gif: "arrowDown.gif" 
    },

    info: {
        titles: ["About Me", "Work Experience", "Education"],
        desc: "Hi! I'm a Junior FullStack Developer Specializing in REACT JS Framework. I have Experience in coding web pages for personal and commercial portfolios, as well as specific functionalities such as creating a Login, or making HTTP requests using API's. knowledge in Computational Thinking and Algorithmic Logic. Imperative, Functional, and object-oriented programming, database, software architecture, and Responsive Design."
    },
 
    work1: {
        title: "FullStack Developer - React JS",
        badge: "Freelancer",
        span1: "Upwork Global Inc",
        a: ": Click for Preview",
        href:"https://www.upwork.com/freelancers/~01281dac1b353aa9f6?s=1110580755107926016",
        country: "San Francisco - California",
        date: "Dec 2022 - Present",
        description: "Front End Web Developer Freelancer on Upwork. Specializing in React Js Framework. Currently Working as Freelancer for Responsive Website Apps. Coding web pages for personal and commercial portfolios, as well as specific functionalities such as creating a Login, or making HTTP requests using API's."

    },

    work2: {
        title: "Full Stack Developer - React JS",
        badge: "Developer",
        span1: "Wedding React App",
        a: ": Click for Preview",
        href:"https://jazminylucio.netlify.app/",
        country: "Bs As, Argentina",
        date: "Nov 2022- Nov 2022",
        description: "Website App developed with vite and ReactJs. An aesthetic design, unique styles, and combined with dependencies make the project a visual appeal. Development of Sidebar navigation, RRD and useState handling. Countdown section, and Forms created with email.js to manage information about the guests."
    },

    edu1: {
        title: "Full Stack Developer - React JS",
        badge: "Internship",
        span1: "Go - Elevate ",
        a: ": by Eng. Gustavo Brey",
        href:"https://www.linkedin.com/in/gbrey/?locale=en_US",
        country: "Bs As, Argentina",
        date: "Apr 2020 - Dec 2020",
        description: "Full stack developer course by Eng. Gustavo Andres Brey using the Mumuki platform, which includes Computational Thinking, Gobstone, Object Oriented Programming, JavaScript, Git, Database, Linux, Slack, Github and React JS."

    },

    edu2: {
        title: "Front End Developer - React JS",
        badge: "Student",
        span1: "Scrimba.com",
        a: ": by Bob Ziroll",
        href:"https://www.linkedin.com/in/bobziroll/",
        country: "Draper, Utah - USA",
        date: "Sep 2022 - Oct 2022",
        description: "Intermediate React Course with Scrimba's head of education, Bob Ziroll as a guide. 143-part interactive tutorial to build dynamic, interactive web applications with React.js. Covering local setup, JSX, component types, all about props, hook and state handling, forms, React DOM render and API calls."

    },

    edu3: {
        title: "Front End Developer - React JS",
        badge: "Student",
        span1: "Scrimba.com",
        a: ": by Bob Ziroll",
        href:"https://www.linkedin.com/in/bobziroll/",
        country: "Draper, Utah - USA",
        date: "Jan 2022 - Present",
        description: "Advanced React Course with Scrimba's head of education, Bob Ziroll as a guide. The best learning experience paired with a world-class instructor. This massive course aims to turn you into a hireable React developer. Covering hooks, redux, context, fragments, react.memo(), optimization, react-router, plain js redux, high-order components, and more."

    },

    stack: {
        html: "html.png",
        css: "css.png",
        js: "js.png",
        node: "node.svg.png",
        react: "react.png",
        sql: "sql.png",
        strapi: "strapi.png",
        vscode: "vscode.png",
        tailwind: "tailwind.png",
        mui: "mui.png",
        boot: "boot.png",
        slack: "slack.svg.png",
        git: "git.png",
        github: "github.png",
        npm: "npm.svg.png",
        vite: "vite.png"
    },

    projects: {
        wedding: {
            id: 1,
            img: "wedding.png",
            title: "Sidebar Wedding App",
            subtitle: "Tech Stack",
            desc: "WebsiteApp developed with vite and ReactJs. Aesthetic design, unique styles, make the project a visual appeal. Development of Sidebar navigation, Countdown section, and Email.js Forms to manage contact information.",
            buttons: ["ReactJs", "EmailJs", "Countdown", "Forms"],
            live: "https://jazminylucio.netlify.app/",
            code: "https://github.com/LucioABerte/Wedding"
        },

        travel: {
            id: 2,
            img: "travel.png",
            title: "My Travel Journal",
            subtitle: "Tech Stack",
            desc: "Development of my travel diary application working on reusable components and destructuring props with internal API management.",
            buttons: ["ReactJs", "Props", "API", ".map()"],
            live: "https://travel-app-lucioaberte.vercel.app/",
            code: "https://github.com/LucioABerte/TravelApp"
        },

        portfolio: {
            id: 3,
            img: "portfolio.png",
            title: "React Js Portfolio",
            subtitle: "Tech Stack",
            desc: "Responsive development of personal portfolio using ReactJs as Framework and Vite, Npm. Management of react-router-dom together with EmailJs for the contact section in forms. Other functionalities.",
            buttons: ["ReactJs", "Vite", "CSS3", "EmailJs"],
            live: "",
            code: ""
        },

        notes: {
            id: 3,
            img: "notesapp.png",
            title: "Notes App",
            subtitle: "Tech Stack",
            desc: "Responsive development of personal portfolio using ReactJs as Framework and Vite, Npm. Management of react-router-dom together with EmailJs for the contact section in forms. Other functionalities.",
            buttons: ["ReactJs", "Showdown", "Nanoid", "Split"],
            live: "https://notes-app-lucioaberte.vercel.app/",
            code: "https://github.com/LucioABerte/NotesApp"
        },

        tenzies: {
            id: 3,
            img: "tenzies.png",
            title: "Tenzies Game App",
            subtitle: "Tech Stack",
            desc: "Responsive development of personal portfolio using ReactJs as Framework and Vite, Npm. Management of react-router-dom together with EmailJs for the contact section in forms. Other functionalities.",
            buttons: ["ReactJs", "State", "Effect", "Confetti"],
            live: "https://tenzies-game-lucioaberte.vercel.app/",
            code: "https://github.com/LucioABerte/TenziesGame"
        },

        meme: {
            id: 3,
            img: "meme.png",
            title: "Meme Generator",
            subtitle: "Tech Stack",
            desc: "Responsive development of personal portfolio using ReactJs as Framework and Vite, Npm. Management of react-router-dom together with EmailJs for the contact section in forms. Other functionalities.",
            buttons: ["ReactJs", "API", "useEffect", "Events"],
            live: "https://meme-generator-lucioaberte.vercel.app/",
            code: "https://github.com/LucioABerte/MemeGenerator"
        }
    },
    
    footer: {
        title: "Lucio Berté",
        mail: "Lucioaberte@gmail.com",
        phone: "+54 9 2235585610",
        develop: "Designed and Developed by Lucio Berté" 
    }

}

export default data;
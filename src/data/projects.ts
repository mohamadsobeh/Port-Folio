import photo1 from "../assets/image/photo-1.png";
import photo2 from "../assets/image/photo-2.png";
import photo3 from "../assets/image/photo3.png";
import photo4 from "../assets/image/photo4.png";
import photo5 from "../assets/image/photo5.png";
import photo6 from "../assets/image/photo6.png";
import photo55 from "../assets/image/photo-55.png";
import photo66 from "../assets/image/photo-66.png";
import photo77 from "../assets/image/photo-77.png";
import photo7 from "../assets/image/photo7.png";
import photo8 from "../assets/image/photo8.png";
import photo9 from "../assets/image/photo9.png";
import photo10 from "../assets/image/photo10.png";
import photo11 from "../assets/image/photo11.png";
import photo12 from "../assets/image/photo12.png";
import photo13 from "../assets/image/photo13.png";
import photo14 from "../assets/image/photo14.png";
import photo15 from "../assets/image/photo15.png";
import photo16 from "../assets/image/photo16.png";
import photo17 from "../assets/image/photo17.png";
import photo18 from "../assets/image/photo18.png";
import photo19 from "../assets/image/photo19.png";
import photo20 from "../assets/image/photo20.png";
import photo21 from "../assets/image/photo21.png";
import photo22 from "../assets/image/photo22.png";
import photo23 from "../assets/image/photo23.png";
import photo24 from "../assets/image/photo24.png";
import photo25 from "../assets/image/photo25.png";
import catalyst1 from "../assets/image/catalyst-1.png";
import catalyst3 from "../assets/image/catalyst-3.png";



export interface Project {
  id: number;
  type: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  live: string;
  images: string[];
  features: string[];
  challenges: string[];
  Solutions: string[];
  category: string;
}

export const projects = [
  {
    id: 1,
    type: "react",
    title: "E-commerce Website",
    shortDescription: "Electronic Devices E-commerce Platform",
    longDescription:
      "This project was developed using React to create an interactive and seamless user interface, along with Tailwind CSS for clean, responsive layouts across all devices. It integrates Firebase to manage user authentication and cart functionality, enabling secure login and easy product addition to the cart. The platform features a fully responsive design with support for both Light Mode and Dark Mode, allowing users to switch based on their preferences. It delivers a modern, flexible, and user-friendly shopping experience.",

    live: "https://mohamadsobeh.github.io/Ecommerce-website/",
    images: [photo1, photo2],
    features: [
      "Light and Dark mode theme support",
      "Secure user authentication with Firebase",
      "Add-to-cart functionality with real-time updates",
      "Responsive design optimized for all screen sizes",
      "Clean and modern user interface using React and Tailwind CSS",
      "Smooth user experience with intuitive navigation",
    ],
    challenges: [
      "Implementing seamless theme switching (light/dark) without disrupting the user experience.",
      "Managing user authentication and ensuring secure access to cart functionalities.",
      "Handling dynamic cart updates and maintaining consistent state across components.",
    ],
    Solutions: [
      "Used React’s Context API along with Tailwind CSS dark mode utilities to enable smooth, real-time theme switching without page reloads.",
      "Integrated Firebase Authentication to securely manage sign-in, sign-up, and session handling.",
      "Utilized React’s state management in combination with Firebase Realtime Database to keep the cart state synchronized across the application.",
    ],

    category: "Website",
  },

  {
    id: 2,
    type: "Next.js",
    title: "Admin Dashboard for Haunha",
    shortDescription: "Internal Admin Panel – IX Coders Client Project",
    longDescription:
      "A custom admin dashboard for Haunha, built using Next.js with both client and server-side rendering. Developed as a freelance project for IX Coders, the dashboard is based on the Vuexy Admin Template and extended to meet operational and branding requirements. It features secure authentication, dynamic data visualization, scheduling tools, and a modern interface tailored for internal enterprise use.",
    live: "https://drive.google.com/file/d/1CWmb-qwkcUuhV3LMtxhpw-eUIjMPS82v/view?usp=sharing",
    images: [photo13, photo14, photo15, photo16, photo17],
    features: [
      "Server-side and client-side rendering with Next.js",
      "Authentication with NextAuth",
      "Prisma ORM for backend connectivity",
      "Rich text editing via Tiptap editor",
      "Dynamic ApexCharts integration",
      "FullCalendar for event and schedule management",
      "Mapbox GL for interactive maps",
      "Fully responsive UI based on Material UI and Vuexy Admin Template",
    ],
    challenges: [
      "Customizing the Vuexy Admin Template from Vue to fit Next.js and MUI",
      "Ensuring secure authentication and backend integration",
      "Maintaining a performant dashboard experience with many dynamic components",
      "It was my first time implementing server-side rendering and backend integration using Prisma",
    ],
    Solutions: [
      "Refactored Vuexy template to work within a Next.js + MUI stack while preserving its modular design",
      "Integrated NextAuth for authentication and Prisma to securely handle backend data operations",
      "Used dynamic imports, memoization, and layout optimizations to ensure responsiveness and fast load times",
      "Successfully implemented SSR via Next.js `getServerSideProps` and connected to the backend using Prisma for real-time data access",
    ],
    category: "Dashboard",
  },
  {
    id: 3,
    type: "Next.js",
    title: "E-commerce Website",
    shortDescription: "My Graduation Project",
    longDescription:
      "Design and implementation of a modern e-commerce website — a case study focused on apparel sales. The platform was built using Next.js, Tailwind CSS, and TypeScript to ensure a clean and efficient frontend. For the backend, Strapi was used to provide a robust and scalable content management system. The result is a seamless and responsive user experience, featuring a custom design tailored for online clothing retail.",

    live: "https://drive.google.com/file/d/1eIJEqJo3jxSV4SJAzSI9pRNKk0ODnYbC/view?usp=sharing",
    images: [photo5, photo6, photo55, photo66, photo77],
    features: [
      "Custom product catalog with categories and filters",
      "Secure customer authentication and registration",
      "Content management system powered by Strapi",
      "Responsive design for all devices",
      "Modern and intuitive user interface",
    ],
    challenges: [
      "Working with Next.js for the first time after transitioning from React due to a project requirement.",
      "Integrating a headless CMS (Strapi) with dynamic frontend rendering in Next.js.",
      "Optimizing performance when dealing with image-heavy product pages.",
      "Ensuring full responsiveness and usability on mobile devices.",
      "Designing a consistent and modern UI suitable for fashion e-commerce.",
    ],
    Solutions: [
      "Adapted quickly to Next.js by studying official documentation and community resources, and successfully restructured the project from React to Next.js.",
      "Connected Strapi as a backend to dynamically fetch and render content through API routes and Next.js data fetching methods.",
      "Used Next.js image optimization features, lazy loading, and caching strategies to maintain fast load times on product pages.",
      "Applied Tailwind CSS with mobile-first principles and flex/grid layout strategies to achieve a fully responsive design.",
      "Created a custom UI using reusable components and consistent theming to match the branding of a modern fashion platform.",
    ],

    category: "Website",
  },
  {
  id: 4,
  type: "Next.js",
  title: "MJ Restaurant",
  shortDescription: "Modern Restaurant Website",
  longDescription:
    "A polished restaurant website for MJ Restaurant built with Next.js 15 and React 19, styled using Tailwind CSS for a clean, responsive UI. It showcases a categorized menu (Breakfast, Grilled, Drinks), a stories/blog section, and a contact page with an integrated reservation flow (“Find A Table”). Motion details are handled with Framer Motion, dialogs with Radix UI, and forms with React Hook Form + React DatePicker for a smooth booking experience. The site highlights location, hours, and direct call-to-action, delivering a modern, fast, and mobile-friendly dining experience.",
  
  live: "https://mj-restaurant.vercel.app/",
  images: [photo22, photo23, photo24,photo25],
  features: [
    "Home, About, Menus (with category filters), Blogs, and Contact pages",
    "Table reservation flow with date & time selection",
    "Responsive layout optimized for mobile and desktop",
    "Animated sections and smooth interactions with Framer Motion",
    "Accessible dialogs and overlays via Radix UI",
    "Form validation and toasts using React Hook Form and Sonner",
    "Clear business info: location, opening hours, and phone CTA",
  ],
  challenges: [
    "Designing a clear menu grid with category filters while keeping performance and readability.",
    "Implementing a reservation flow that handles date/time picks and validation gracefully.",
    "Maintaining consistent animations without hurting page performance on mobile.",
  ],
  Solutions: [
    "Built a filterable menu grid and reused card components to keep UI consistent and fast.",
    "Used React Hook Form with React DatePicker and date-fns to validate inputs and prevent invalid bookings, plus Sonner for user feedback.",
    "Applied Framer Motion only to key sections and used lazy rendering where possible to keep transitions smooth.",
  ],

  category: "Website",
},

{
  id: 11, 
  type: "Next.js",
  title: "Catalyst Techs Website",
  shortDescription: "Company Website – Freelance Project",
  longDescription:
    "Built the official company website from scratch based on Figma designs. Developed clean, responsive UI components with smooth animations and interactive navigation, and implemented a functional contact form to support lead generation. The final result is a modern, fast, and production-ready marketing website.",

  live: "https://www.catalysttechs.com/",
  images: [catalyst1, catalyst3], 
  features: [
    "Figma to pixel-perfect, responsive UI",
    "Reusable sections/components for scalability",
    "Smooth animations and interactions using Framer Motion",
    "Swiper-powered sliders/sections",
    "Contact form integration (Formspree) with validation using React Hook Form",
    "Production-ready deployment and optimized performance",
  ],
  challenges: [
    "Keeping animations smooth without affecting performance.",
    "Building reusable sections while maintaining consistent design across pages.",
    "Ensuring the contact form UX is clear and reliable.",
  ],
  Solutions: [
    "Used Framer Motion only on key sections and optimized animations to keep the site fast.",
    "Created reusable components/sections with a consistent structure to speed up development and maintenance.",
    "Integrated React Hook Form with Formspree and added clear validation/error handling for better UX.",
  ],
  category: "Website",
},

  {
    id: 5,
    type: "react",
    title: "FylO",
    shortDescription: "landing page",
    longDescription:
      "This website has been developed using React, Tailwind CSS, and AOS for smooth and engaging animations. It features a fully responsive design and an interactive user interface, ensuring an optimal user experience across all devices.",
    live: "https://mohamadsobeh.github.io/Fylo/",
    images: [photo7, photo8],
    features: [
      "Stylish product showcase",
      "Interactive shopping cart",
      "Secure and fast checkout",
      "Responsive design for all devices",
      "Enhanced performance for shopping",
    ],
    challenges: [
      "Creating smooth animations without affecting performance or responsiveness.",
    ],
    Solutions: [
      "Used AOS (Animate On Scroll) library for lightweight scroll-based animations, ensuring performance remained optimized across all devices.",
    ],
    category: "Landing Page",
  },

  {
    id: 6,
    type: "react",
    title: "Flight Booking System",
    shortDescription: "Flight search and booking platform",
    longDescription:
      "A sophisticated flight booking system providing real-time flight availability and an intuitive passenger data entry form. Built with cutting-edge technologies, it ensures high performance and responsiveness across all devices for a smooth booking experience.",
    live: "https://flight-tickets-booking-git-main-mohamadsobehs-projects.vercel.app/",
    images: [photo3, photo4],
    features: [
      "Real-time flight search",
      "Booking management system",
      "User authentication",
      "Fully responsive design",
      "Optimized performance",
    ],
    challenges: [
      "Designing an intuitive and dynamic passenger data entry form with real-time validation.",
      "Ensuring full responsiveness across a wide range of devices and screen sizes.",
      "Optimizing the system to deliver high performance under heavy data loads and user traffic.",
    ],
    Solutions: [
      "Built a dynamic, multi-step form with real-time field validation using controlled components in React and custom hooks.",
      "Applied a mobile-first design using Tailwind CSS and CSS grid/flex techniques to ensure consistent layout across devices.",
      "Implemented lazy loading, data caching, and performance monitoring to keep the app fast and responsive under all conditions.",
    ],
    category: "Website",
  },
  {
    id: 7,
    type: "React",
    title: "Portfolio",
    shortDescription: "Personal portfolio showcasing my work and skills",
    longDescription:
      "A modern and fully responsive personal portfolio developed using React and Tailwind CSS. This project highlights my work and skills through an elegant interface, enhanced with animations using Framer Motion and tsParticles. It features an integrated contact form powered by EmailJS and is optimized for performance with lazy loading and smooth transitions across all sections.",
    live: "https://port-folios-mu.vercel.app/",
    images: [photo18, photo19],
    features: [
      "Modern and responsive layout with Tailwind CSS",
      "Interactive animations using Framer Motion",
      "Particle effects via tsParticles",
      "Integrated contact form using EmailJS",
      "Performance optimization with lazy loading",
      "Clean and accessible UI/UX",
    ],
    challenges: [
      "Creating smooth and performant animations without affecting load speed",
      "Integrating EmailJS securely and ensuring it works across environments",
      "Implementing tsParticles in a responsive and non-intrusive way",
    ],
    Solutions: [
      "Used Framer Motion with controlled transitions and optimized layout structure to ensure smooth yet fast animations",
      "Configured EmailJS with proper environment variables and validation logic to handle secure form submission",
      "Tuned tsParticles settings and conditional rendering based on device type to avoid performance issues on mobile",
    ],
    category: "Website",
  },

  {
    id: 9,
    type: "React",
    title: "portfolio",
    shortDescription: "An interactive personal portfolio",
    longDescription:
      "An interactive personal portfolio designed and developed using React,with features like seamless navigation between sections using React Router,interactive slideshow using Swiper, and an efficient contact form via EmailJS,with a responsive design that fits all devices.",
    live: "https://",
    images: [photo9, photo10],
    features: [
      "Seamless navigation between sections using React Router",
      "Interactive image slideshow using Swiper.js",
      "Responsive contact form integrated with EmailJS",
      "Fully responsive design for all devices",
      "Smooth and dynamic UI interactions",
    ],
    challenges: [
      "Implementing multi-section navigation without reloading or losing component state",
      "Integrating EmailJS securely and ensuring form validation",
      "Creating a responsive layout that adapts to various screen sizes and resolutions",
    ],
    Solutions: [
      "Used React Router to enable smooth, client-side routing between portfolio sections while maintaining component states.",
      "Integrated EmailJS with proper validation and error handling to create a reliable and secure contact form.",
      "Applied Tailwind CSS and Flex/Grid layout strategies to achieve a clean, fully responsive design across devices.",
    ],
    category: "Website",
  },

  {
    id: 8,
    type: "React",
    title: "DashBoard",
    shortDescription: "",
    longDescription:
      "A modern and comprehensive admin dashboard developed with the latest web technologies. Fully responsive across all screen sizes, it includes order tracking, customer and staff management, and data analysis through interactive charts for a complete performance overview.",
    live: "https://dash-board-steel-mu.vercel.app/",
    images: [photo11, photo12],
    features: [
      "Real-time order tracking",
      "Interactive data visualization charts",
      "Responsive across all screens",
      "Intuitive modern interface",
    ],
    challenges: [
      "Integrating interactive data charts without compromising performance or user experience.",
      "Optimizing dashboard performance while handling and displaying large datasets in real time.",
      "Ensuring full responsiveness and usability on small screens and mobile devices.",
    ],
    Solutions: [
      "Utilized charting libraries like Chart.js and Recharts to build dynamic and interactive visualizations, ensuring they remained lightweight and responsive.",
      "Implemented data pagination, memoization, and conditional rendering to efficiently handle large datasets and reduce unnecessary re-renders.",
      "Applied a mobile-first design approach using Tailwind CSS, combined with adaptive grid layouts and media queries to maintain usability across all screen sizes.",
    ],

    category: "Dashboard",
  },
  {
    id: 10,
    type: "HTML & CSS",
    title: "",
    shortDescription: "HTML and CSS",
    longDescription:
      "This is a minimal and elegant landing page developed using only HTML and CSS. Designed to demonstrate clean structure and layout principles, it includes a responsive header, hero section, content layout, image gallery, and footer. The layout adjusts seamlessly across devices, showcasing solid understanding of responsive web design without the use of JavaScript frameworks.",
    live: "https://template3-html-and-css.vercel.app/",
    images: [photo20, photo21],
    features: [
      "Built with semantic HTML5 and modern CSS3",
      "Fully responsive layout adapting to all screen sizes",
      "Clean and accessible design structure",
      "Image gallery with flexible grid layout",
      "Lightweight and fast loading performance",
    ],
    challenges: [
      "Creating a responsive layout without the use of any framework",
      "Maintaining a clean and scalable CSS structure for styling",
    ],
    Solutions: [
      "Utilized media queries and flexible units (%, rem, vw/vh) to make the layout fully responsive",
      "Structured CSS using reusable utility classes and consistent naming conventions for easier maintenance",
    ],
    category: "Landing Page",
  },
];

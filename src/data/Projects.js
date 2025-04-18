import photo1 from "../assets/images/photo-1.png";
import photo2 from "../assets/images/photo-2.png";
import photo3 from "../assets/images/photo3.png";
import photo4 from "../assets/images/photo4.png";
import photo5 from "../assets/images/photo5.png";
import photo6 from "../assets/images/photo6.png";
import photo55 from "../assets/images/photo-55.png";
import photo66 from "../assets/images/photo-66.png";
import photo77 from "../assets/images/photo-77.png";
import photo7 from "../assets/images/photo7.png";
import photo8 from "../assets/images/photo8.png";
import photo9 from "../assets/images/photo9.png";
import photo10 from "../assets/images/photo10.png";
import photo11 from "../assets/images/photo11.png";
import photo12 from "../assets/images/photo12.png";

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

    category: "Web Application",
  },
  {
    id: 2,
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
    category: "Web Application",
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

    category: "Web Application",
  },
  {
    id: 4,
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
    category: "eCommerce",
  },
  {
    id: 5,
    type: "React",
    title: "portfolio",
    shortDescription: "An interactive personal portfolio",
    longDescription:
      "An interactive personal portfolio designed and developed using React,with features like seamless navigation between sections using React Router,interactive slideshow using Swiper, and an efficient contact form via EmailJS,with a responsive design that fits all devices.",
    live: "https://drive.google.com/file/d/1asEWrUuFh4rncnK60VBWEe2kKLFlOi-D/view?usp=sharing",
    images: [photo9, photo10],
    features: [
      'Seamless navigation between sections using React Router',
      'Interactive image slideshow using Swiper.js',
      'Responsive contact form integrated with EmailJS',
      'Fully responsive design for all devices',
      'Smooth and dynamic UI interactions'
    ],
    challenges: [
      'Implementing multi-section navigation without reloading or losing component state',
      'Integrating EmailJS securely and ensuring form validation',
      'Creating a responsive layout that adapts to various screen sizes and resolutions'
    ],
    Solutions: [
      'Used React Router to enable smooth, client-side routing between portfolio sections while maintaining component states.',
      'Integrated EmailJS with proper validation and error handling to create a reliable and secure contact form.',
      'Applied Tailwind CSS and Flex/Grid layout strategies to achieve a clean, fully responsive design across devices.'
    ],
    category: "Website",
  },
  {
    id: 6,
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
      'Integrating interactive data charts without compromising performance or user experience.',
      'Optimizing dashboard performance while handling and displaying large datasets in real time.',
      'Ensuring full responsiveness and usability on small screens and mobile devices.'
    ],
    Solutions: [
      'Utilized charting libraries like Chart.js and Recharts to build dynamic and interactive visualizations, ensuring they remained lightweight and responsive.',
      'Implemented data pagination, memoization, and conditional rendering to efficiently handle large datasets and reduce unnecessary re-renders.',
      'Applied a mobile-first design approach using Tailwind CSS, combined with adaptive grid layouts and media queries to maintain usability across all screen sizes.'
    ],
    
    category: "Website",
  },
];

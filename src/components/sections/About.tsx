import FadeIn from "@/components/effects/FadeIn";

const About = () => {
  const cards = [
    {
      title: "Who I Am",
      content: (
        <>
          I’m <strong>Mohamad Sobeh</strong>, a Palestinian living in Damascus.
          I bring over <strong>2 years</strong> of experience building
          user-focused, responsive web applications as a self-taught Front-End
          Developer.
        </>
      ),
    },
    {
      title: "My Journey",
      content: (
        <>
          I started with a passion for problem-solving and honed my skills in{" "}
          <strong>HTML, CSS, JavaScript, TypeScript</strong>, and{" "}
          <strong>React</strong>. I also mastered tools like{" "}
          <strong>Tailwind CSS</strong> and{" "}
          <strong>Git & GitHub & GitLab</strong>. I hold a{" "}
          <strong>Bachelor's degree</strong> in Electronics and Communication
          Engineering.
        </>
      ),
    },
    {
      title: "Experience Highlights",
      content: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Freelancing since 2023, with 6+ successful projects</li>
          <li>Cut development time by 30% using reusable React components</li>
          <li>
            Delivered responsive designs for all screen sizes with Tailwind
          </li>
        </ul>
      ),
    },
    {
      title: "What Drives Me",
      content: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Turning ideas into interactive user experiences</li>
          <li>Collaborating with others to build great products</li>
          <li>Keeping up with new web technologies and practices</li>
        </ul>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-rose-100 opacity-20 blur-3xl dark:bg-yellow-300" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-yellow-100 opacity-30 blur-2xl dark:bg-rose-400" />

      <div className="max-w-6xl mx-auto text-center space-y-20 relative z-10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-700 to-yellow-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            I'm a self-taught Front-End Developer with Palestinian roots, living
            in Syria — passionate about building clean and performant web
            experiences.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {cards.map((card, i) => (
            <FadeIn
              key={i}
              delay={0.1 + i * 0.15}
              className="p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-yellow-50 to-rose-50 dark:from-card dark:to-neutral-900"
            >
              <h3 className="text-xl font-semibold mb-3 text-rose-600 dark:text-yellow-400">
                {card.title}
              </h3>
              <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                {card.content}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

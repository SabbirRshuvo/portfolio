import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <section id="home">
      <div className="relative min-h-screen overflow-hidden">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </section>
  );
};

export default Home;

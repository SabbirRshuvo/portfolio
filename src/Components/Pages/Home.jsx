import About from "./About";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <section id="home">
      <Banner />
      <About />
      <Skills />
      <Projects />
    </section>
  );
};

export default Home;

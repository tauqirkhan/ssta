import Header from "../utils/header/header";
import HomeSection from "../utils/homeSection/homeSection";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <HomeSection />
        <section id="about-us"></section>
        <section id="mission"></section>
        <section id="why-ssta"></section>
        <section id="contact-us"></section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;

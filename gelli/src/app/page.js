import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

export default function Home() {
  {
    return (
      <>
        <NavBar />
        <Carousel />
        <main>
          <section id="vid">
            <video></video>
          </section>
          <section id="abouttext">
            <p>
              Emmet is a powerful toolkit for web developers that significantly
              speeds up HTML and CSS coding by providing a shorthand syntax for
              generating complex code structures. While Emmet is primarily
              designed for HTML and CSS, it can also be used effectively within
              Next.js projects, especially when working with JSX JavaScript XML
              files.
            </p>
          </section>
          <section id="moretext">
            <p>
              Emmet is a powerful toolkit for web developers that significantly
              speeds up HTML and CSS coding by providing a shorthand syntax for
              generating complex code structures. While Emmet is primarily
              designed for HTML and CSS, it can also be used effectively within
              Next.js projects, especially when working with JSX JavaScript XML
              files.Emmet is a powerful toolkit for web developers that
              significantly speeds up HTML and CSS coding by providing a
              shorthand syntax for generating complex code structures. While
              Emmet is primarily designed for HTML and CSS, it can also be used
              effectively within Next.js projects, especially when working with
              JSX JavaScript XML files.
            </p>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

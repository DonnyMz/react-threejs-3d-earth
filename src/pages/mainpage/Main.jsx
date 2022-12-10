import "./main.css";
import Header from "../../components/header/Header";
import { FaArrowDown } from "react-icons/fa";
import Footer from "../../components/footer/Footer";

const Main = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 420,

      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <div className="bg-hero"></div>
      <main className="ourWorld-hero">
        <h1 className="hero-title">Your Only Home</h1>

        <div className="arrow-down" onClick={scrollTo}>
          <FaArrowDown size={35} className="giArrow" />
        </div>
        <section className="what-can-do">
          <h1>What You can do</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quam
            accusantium quibusdam dignissimos necessitatibus fugiat. Omnis quis
            dolore quos tempora eius beatae, quod veniam rerum magnam nihil
            soluta sint esse cupiditate deleniti assumenda temporibus quae
            expedita consequatur laudantium quidem earum! Ea, perferendis?
            Suscipit ea dicta quidem, obcaecati qui officiis sit.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Main;

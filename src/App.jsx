import Pricing from "./components/Pricing";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}
export default App;

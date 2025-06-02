import { Col, Container, Row } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Welcome from "../components/Welcome";
import Services from "../components/Services";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Carousels from "../components/Carousels";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import News from "../components/News";
import QuoteForm from "../components/QuoteForm";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Consultants from "../components/Consultants";

function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <Carousels />
      <Services />
      <Welcome />
      <Gallery />
      <Stats />
      <Consultants />
      <Testimonials />
      <Pricing />
      <QuoteForm />
      <News />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;

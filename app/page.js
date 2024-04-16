import HomePage from "./components/home/HomePage";
import Services from "./components/services/Services"
import Introduction from "./components/presentation/Introduction";
import Techno from "./components/techno/Techno";
import Realisations from "./components/realisations/Realisations";
import Footer from "./components/footer/Footer";
import Process from "./components/process/Process";

export default function Home() {
  return (
   <main>
  <HomePage/>
  <Introduction/>
  <Services />
  <Process />
  <Techno />
  <Realisations />
  <Footer />


   </main>
  );
}

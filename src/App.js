// import HeaderImage from "./images/header1.png";
import "./App.css";
import Footer from "./components/footer";
import GetInvolvedSection from "./components/getInvolved";
import Header from "./components/header";

import HomeCards from "./components/homeCards";
import SuccessCard from "./components/successCard";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeCards />
      <GetInvolvedSection />
      <br />
      <br />
      <br />
      <SuccessCard />
      <Footer />
    </div>
  );
}

export default App;

// import HeaderImage from "./images/header1.png";
import "./App.css";
import GetInvolvedSection from "./components/getInvolved";

import HomeCards from "./components/homeCards";
import SuccessCard from "./components/successCard";

function App() {
  return (
    <div className="App">
      <header className="header">
        {" "}
        Header Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        sit eum non suscipit unde blanditiis qui odit, fuga magni, ad illo
        cumque voluptatibus reiciendis temporibus facere ab repellat saepe
        impedit.
      </header>
      <br />
      <br />
      <HomeCards />
      <GetInvolvedSection />
      <SuccessCard />
      <footer>Footer</footer>
    </div>
  );
}

export default App;

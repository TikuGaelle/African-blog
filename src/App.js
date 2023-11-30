// import HeaderImage from "./images/header1.png";
import "./App.css";

import HomeCards from "./components/homeCards";

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
      <footer>Footer</footer>
    </div>
  );
}

export default App;

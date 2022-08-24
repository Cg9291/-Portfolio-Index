
import './App.css';//cant get html loader to work
let html=require("C:/Users/carlg/Desktop/Programming-Code/SYNC/-portfolio-index/src/portfolios_projects/Product_Landing/index.html")


function App() {
  return (
    <div className="App">
      <ul>
    <li>
        <a href={html}>
            Portfolios
        </a>
    </li>
    <li>
        <a href="Apple_Showcase/index.html">
            Apple Showcase
        </a>
    </li>
    <li>
        <a href="Product_Landing/index.html">
            Product Landing
        </a>
    </li>
    <li>
        <a href="Tribute_Page/index.html">
            Tribute 
        </a>
    </li>
    <li>
        <a href="Technical_Documentation/index.html">
            Technical Documentation
        </a>
    </li>
    <li>
        <a href="Node_Fcc_Tutorial/boilerplate-express/views/index.html">
            Node JS Tutorial
        </a>
    </li>
    <li>
        <a href="">
            API Gists List
        </a>
    </li>
    <li><a></a></li>
   </ul> 
    </div>
  );
}

export default App;

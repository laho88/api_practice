import {Router } from "@reach/router";
import "./App.css";
import Home from "./components/home";
import  ResourceNotFound from "./components/ResourceNotFound";
function App() {
  return (
    <div className="App">
      <Router>
          <Home path="/"/>
            <Home path="/:type/:id"/>
              <ResourceNotFound default/>
          <ResourceNotFound default/>
          {/* <ResourceNotFound `/:type/${default}`/> */}
      </Router>
    </div>
  );
}

export default App;

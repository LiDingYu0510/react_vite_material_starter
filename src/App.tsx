import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Theme from "./Theme/Theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Theme>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </Button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </header>
      </div>
    </Theme>
  );
}

export default App;

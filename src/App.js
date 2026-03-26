import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          TO<span>M</span>E
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Victoria Garcia</footer>
      </div>
    </div>
  );
}

export default App;

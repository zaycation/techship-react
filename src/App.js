import "./App.css";
import { MdAccountCircle } from "react-icons/md";

function App() {
  return (
    <div id="container">
      <nav className="nav__content">
        <h4>TECH⋄SHIP</h4>
        <a href="/">MISSION</a>
        <a href="/">PROGRAMS</a>
        <a href="/">DONATE</a>
        <MdAccountCircle size={38} color="white" />
      </nav>
      <main className="main__content">Main</main>
      <div className="content1__content">Content1</div>
      <div className="content2__content">Content2</div>
      <div className="content3__content">Content3</div>
      <footer className="footer__content">Footer</footer>
    </div>
  );
}

export default App;

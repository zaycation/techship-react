import "./App.css";
import { MdAccountCircle } from "react-icons/md";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div id="container">
      <nav className="nav__content">
        <a href="/">
          <h4>TECH~SHIP</h4>
        </a>
        <a href="/">MISSION</a>
        <a href="/">PROGRAMS</a>
        <a href="/">DONATE</a>
        <MdAccountCircle size={38} color="white" />
      </nav>
      <main className="main__content">
        <h2>TECH~SHIP</h2>
        <h4 className={"text-center"}>
          Silicon Valley Based Non-Profit Dedicated to Mentoring and Educating
          Our Youth
        </h4>
        <Button variant="outline-light">Apply With us Today</Button>
      </main>
      <div className="content1__content">Content1</div>
      <div className="content2__content">Content2</div>
      <div className="content3__content">Content3</div>
      <footer className="footer__content">Footer</footer>
    </div>
  );
}

export default App;

import React from "react";
import { FcBearish, FcCommandLine, FcCalendar } from "react-icons/fc";

import NavBar from "../components/navbar";
import Header from "../components/header";
import Businesses from "../components/businesses";

import "../css/HomePage.css";

function HomePage() {
  return (
    <div id="container">
      <div>
        <NavBar />
      </div>

      <main>
        <Header />
      </main>
      <div className="content1__content">
        <FcBearish size={62} />
        <h4 className="text-center">Affordable & Low-Cost</h4>
        <p className="text-center">
          Reasonably priced courses and career guidance at less than 1/10th of
          the average bootcamp
        </p>
      </div>
      <div className="content2__content">
        <FcCommandLine size={62} />
        <h4 className="text-center">Real World Experience</h4>
        <p className="text-center">
          Graduate with a diverse portfolio. Along with your own projects,
          you'll work with companies to gain valuable real-world experience
        </p>
      </div>
      <div className="content3__content">
        <FcCalendar size={62} />
        <h4 className="text-center">Schedule Flexibility</h4>
        <p className="text-center">
          Fully online and part-time courses available with weekly workshops to
          adapt to any schedule
        </p>
      </div>
      <footer>
        <Businesses />
      </footer>
    </div>
  );
}

export default HomePage;

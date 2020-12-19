import React from "react";

import NavBar from "../components/navbar";
import Header from "../components/header";
import Businesses from "../components/businesses";

import "../css/MissionPage.css";

function MissionPage() {
  return (
    <div id="mission__container">
      <div>
        <NavBar />
      </div>
      <div className="banner">

      </div>
      <main>
        <Header />
      </main>
      <footer>
        <Businesses />
      </footer>
    </div>
  );
}

export default MissionPage;

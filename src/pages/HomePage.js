import React from "react";
import { FcBearish, FcCommandLine, FcCalendar } from "react-icons/fc";
import { Button, ButtonGroup } from "reactstrap";
import {
  GrAmazon,
  GrApple,
  GrDropbox,
  GrFacebook,
  GrGoogle,
  GrHpi,
  GrLinkedinOption,
  GrMedium,
  GrPaypal,
  GrSnapchat,
  GrSoundcloud,
  GrSpotify,
  GrTwitter,
  GrVimeo,
} from "react-icons/gr";

import NavBar from "../components/navbar";

function HomePage() {
  return (
    <div id="container">
      <div>
        <NavBar />
      </div>
      <main className="main__content">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>TECH~SHIP</h1>
        <br />
        <h4 className="text-center text-white">
          Silicon Valley Based Non-Profit Dedicated to Mentoring and Educating
          Junior and Future Software-Engineers
        </h4>
        <br />
        <br />
        <div className="button__spacing">
          <ButtonGroup>
            <Button size="lg" variant="outline-light">
              Apply for a Scholarship
            </Button>
            <Button size="lg" variant="outline-light">
              View Pricing Options
            </Button>
          </ButtonGroup>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
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
      <footer className="stats__content text-center">
        <h5>A few of the 2,000+ companies where our grads work:</h5>
        <div className="businesses">
          <GrAmazon size={30} />
          <GrApple size={30} />
          <GrDropbox size={30} />
          <GrFacebook size={30} />
          <GrGoogle size={30} />
          <GrHpi size={30} />
          <GrLinkedinOption size={30} />
          <GrMedium size={30} />
          <GrPaypal size={30} />
          <GrSnapchat size={30} />
          <GrSoundcloud size={30} />
          <GrSpotify size={30} />
          <GrTwitter size={30} />
          <GrVimeo size={30} />
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

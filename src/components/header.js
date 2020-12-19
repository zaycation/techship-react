import React from "react";
import { Button, ButtonGroup } from "reactstrap";

function Header() {
  return (
    <div className="main__content">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-center">TECH~SHIP</h1>
      <br />
      <h4 className="text-center text-white">
        Silicon Valley Based Non-Profit Dedicated to Mentoring and Educating
        Junior and Future Software-Engineers
      </h4>
      <br />
      <br />
      <div className="button__spacing">
        <ButtonGroup>
          <Button outline size="lg" variant="secondary" className="btn__left">
            Apply for a Scholarship
          </Button>
          <Button outline size="lg" variant="secondary" className="btn__right">
            View Program Options
          </Button>
        </ButtonGroup>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Header;

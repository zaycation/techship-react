import React from "react";
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

function Businesses() {
  return (
    <div className="stats__content text-center">
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
      <br />
      <br />
    </div>
  );
}

export default Businesses;

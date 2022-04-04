import React from "react";
import { Link } from "react-router-dom";

import Dots from "../svg/three-dots-vertical_1.svg";

const SingleUser = (props: {
  id: React.Key;
  picture: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}) => {
  let firstLetter = props.lastName.split("")[0];
  let active =
    "rounded-full col-start-5 col-end-5 w-3 h-3 bg-[#40D301] place-self-center";

  if (!props.isActive) {
    active =
      "rounded-full col-start-5 col-end-5 w-3 h-3 bg-[#d30101] place-self-center";
  }

  return (
    <div key={props.id} className="grid place-items-center px-4 py-4">
      <img
        width="130"
        height="130"
        src={props.picture}
        alt="#"
        className="rounded-full object-cover"
      ></img>
      <div className="grid grid-cols-6 place-items-center pt-4">
        <h4 className="col-start-1 col-end-5 text-lg" key={props.id}>
          {props.firstName} {firstLetter}.
        </h4>
        <span className={active} />
        <Link to={`/user/${props.id}`} ><img src={Dots} alt="options" className="w-5 h-5 col-start-6 col-end-6" /></Link>
        
      </div>
    </div>
  );
};

export default SingleUser;

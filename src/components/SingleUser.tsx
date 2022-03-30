import React from "react";

import Dots from "../svg/three-dots-vertical_1.svg";

const SingleUser = (props: {
  id: React.Key;
  picture: string;
  firstName: string;
  lastName: string;
}) => {
  let firstLetter = props.lastName.split("")[0];

  return (
    <div key={props.id} className="grid place-items-center px-4 py-4">
      <img
      width="130" height="130"
        src={props.picture}
        alt="#"
        className=" rounded-full object-cover"
      ></img>
      <div className="grid grid-cols-6 place-items-center	 pt-4">
        <h4 className="col-start-1 col-end-5 text-lg" key={props.id}>
          {props.firstName} {firstLetter}.
        </h4>
        <span className="rounded-full col-start-5 col-end-5 w-3 h-3 bg-[#40D301] place-self-center" />

        <img
          src={Dots}
          alt="logo"
          className="w-5 h-5  col-start-6 col-end-6"
        />
      </div>
    </div>
  );
};

export default SingleUser;

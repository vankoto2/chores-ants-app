import React from "react";
import { Link, useParams } from "react-router-dom";
import LogoName from "../svg/logo.svg";
import Gear from "../svg/gear.svg";

const UserInfo = (props: {
  users: {
    lastName: string;
    isActive: any;
    id: React.Key | null | undefined;
    picture: string | undefined;
    allergy: string | undefined;
    birthDay: string | undefined;
    location: string | undefined;
    chorsToDo: number | undefined;
    chorsDone: number | undefined;
    firstName: string | undefined;
  }[];
}) => {
  const paramsObj = useParams();
  const params = Number(paramsObj.userId);

  let firstLetter = props.users[params].lastName.split("")[0];
  let active =
    "rounded-full col-start-1 col-end-1 w-3 h-3 bg-[#40D301] place-self-center";

  if (!props.users[params].isActive) {
    active =
      "rounded-full col-start-5 col-end-5 w-3 h-3 bg-[#d30101] place-self-center";
  }

  return (
    <>
      <div
        key={props.users[params].id}
        className="grid place-items-center px-4 py-4"
      >
        <img
          width="130"
          height="130"
          src={props.users[params].picture}
          alt="#"
          className="rounded-full object-cover"
        ></img>
      </div>
      <div className="grid grid-cols-6 place-items-strech pt-4">
        <span className={active} />
        <h4
          className="col-start-2 font-bold col-end-6 text-2xl"
          key={props.users[params].id}
        >
          {props.users[params].firstName} {firstLetter}.
        </h4>
        <Link to={`/edit/${props.users[params].id}`}>
          <img src={Gear} alt="options" className="w-5 h-6" />
        </Link>
      </div>
      <div className="grid grid-cols-6 place-items-center content-center pt-1">
        <img
          src={LogoName}
          alt="logo"
          className="w-5 h-5 col-start-1 font-medium text-2xl"
        />
        <h4
          className="text-sm justify-self-start col-span-5 text-center"
          key={props.users[params].id}
        >
          {props.users[params].allergy}
        </h4>
      </div>
      <div className="grid grid-cols-6 place-items-center pt-1">
        <img
          src={LogoName}
          alt="logo"
          className="w-5 h-5 col-start-1 font-medium text-2xl"
        />
        <h4
          className="text-sm justify-self-start col-span-5 text-left"
          key={props.users[params].id}
        >
          {props.users[params].birthDay}
        </h4>
      </div>
      <div className="grid grid-cols-6 place-items-center pt-1">
        <img
          src={LogoName}
          alt="logo"
          className="w-5 h-5 col-start-1 font-medium text-2xl"
        />
        <h4
          className="text-sm justify-self-start col-span-5 text-left"
          key={props.users[params].id}
        >
          {props.users[params].location}
        </h4>
      </div>
      <div className="grid grid-cols-6 place-items-center pt-1">
        <img
          src={LogoName}
          alt="logo"
          className="w-5 h-5 col-start-1 font-medium text-2xl"
        />
        <h4
          className="text-sm justify-self-start col-span-5 text-left"
          key={props.users[params].id}
        >
          {props.users[params].chorsToDo} / {props.users[params].chorsDone}
        </h4>
      </div>
      <div className="bg-[#ff9984] py-2 mt-3 h-14 flex -space-x-9 overflow-hidden justify-center"></div>
      <div className="px-4 py-24 mx-auto bg-[#ffe3e3]">chat</div>
      <form>
        <div className="bg-[#FECFB1] py-2 mt-3 flex -space-x-9 overflow-hidden justify-center">
          <input
            aria-label="test"
            type="text"
            placeholder="massage..."
            className="py-2 px-20 w-auto justify-self-center rounded-3xl border-inherit"
          />
          <button className="rounded-full w-11 h-11 bg-orange justify-self-end"></button>
        </div>
      </form>
    </>
  );
};

export default UserInfo;

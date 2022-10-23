import React from "react";
import { Link } from "react-router-dom";
import Gear from "../svg/gear.svg";
import LogoName from "../svg/logo.svg";


const User = (props: {
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
  };
}) => {
  let firstLetter = props.users.lastName.split("")[0];
  let active =
    "rounded-full col-start-1 col-end-1 w-3 h-3 bg-[#40D301] place-self-center";

  if (!props.users.isActive) {
    active =
      "rounded-full col-start-5 col-end-5 w-3 h-3 bg-[#d30101] place-self-center";
  }

  return (
    <>
      <div key={props.users.id} className="grid place-items-center px-4 py-4">
        <img
          width="130"
          height="130"
          src={props.users.picture}
          alt="#"
          className="rounded-full object-cover"
        ></img>
      </div>
      <div className="grid grid-cols-6 place-items-strech pt-4">
        <span className={active} />
        <h4 className="col-start-2 font-bold col-end-6 text-2xl" key={props.users.id}>
          {props.users.firstName} {firstLetter}.
        </h4>
        <Link to={`/edit/${props.users.id}`} ><img src={Gear} alt="options" className="w-5 h-6" /></Link>
      </div>
      <div className="grid grid-cols-6 place-items-center content-center pt-1">
        <img
          src={LogoName}
          alt="logo"
          className="w-5 h-5 col-start-1 font-medium text-2xl"
        />
        <h4 className="text-sm justify-self-start col-span-5 text-center" key={props.users.id}>
          {props.users.allergy}
        </h4>
      </div>
      <div className="grid grid-cols-6 place-items-center pt-1">
        <img
          src={LogoName}
          alt="logo"
          className="w-5 h-5 col-start-1 font-medium text-2xl"
        />
        <h4 className="text-sm justify-self-start col-span-5 text-left" key={props.users.id}>
          {props.users.birthDay}
        </h4>
      </div>
      <div className="grid grid-cols-6 place-items-center pt-1">
        <img
          src={LogoName}
          alt="logo"
          className="w-5 h-5 col-start-1 font-medium text-2xl"
        />
        <h4 className="text-sm justify-self-start col-span-5 text-left" key={props.users.id}>
          {props.users.location}
        </h4>
      </div>
      <div className="grid grid-cols-6 place-items-center pt-1">
        <img
          src={LogoName}
          alt="logo"
          className="w-5 h-5 col-start-1 font-medium text-2xl"
        />
        <h4 className="text-sm justify-self-start col-span-5 text-left" key={props.users.id}>
          {props.users.chorsToDo} / {props.users.chorsDone}
        </h4>
      </div>
    </>
  );
};

export default User;

// id: 5,
// firstName: "Julian",
// lastName: "Vatkovski",
// picture:
//   "https://scontent.fsof10-1.fna.fbcdn.net/v/t1.18169-9/10426849_10207012686254224_310180499831520007_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=F4_Eg5P990YAX9zd0Ao&_nc_ht=scontent.fsof10-1.fna&oh=00_AT9qktohYKBZbSeqdz6X9ekpirjQaczBLWWMnr4x2qjJ7g&oe=6372AE4F",
// allergy: "polen",
// birthDay: "26.03.1988",
// location: "Varna",
// chorsToDo: 5,
// chorsDone: 5,
// isActive: true,

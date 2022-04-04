import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Dots from "../svg/gear.svg";

interface UsersListProps {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    picture: string;
    allergy: string;
    birthDay: string;
    location: string;
    chorsToDo: number;
    chorsDone: number;
    isActive: boolean;
    tasks: any;
  }[];
}

const DailyTasks: React.FC<UsersListProps> = (props) => {
  return (
    <Fragment>
      <div className="grid grid-cols-8 items-center">
        <h1 className="col-start-2 col-end-8 pt-4 text-2xl font-bold">
          DailyTasks
        </h1>
        <Link to={`/`}>
          <img
            src={Dots}
            alt="options"
            className="w-5 h-5 col-start-8 col-end-8"
          />
        </Link>
      </div>
      <div className="grid grid-cols-8 items-center">
        <img
          width="130"
          height="130"
          src={props.users[0].tasks[0].picture}
          alt="#"
          className="rounded-full object-cover col-start-2 col-end-4"
        ></img>
        <div className="col-start-5 col-end-8">
          <div>Name</div>
          <div>description</div>
        </div>
          <input type="checkbox" />
      </div>
    </Fragment>
  );
};

export default DailyTasks;

import React from "react";
import { Link } from "react-router-dom";
import Family from "../../svg/family.svg";
import DaylyTasks from "../../svg/dayly-tasks.svg";
import User from "../../svg/user.svg";
import Score from "../../svg/score.svg";


const Menu = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 w-full bg-[#fafafa] grid grid-cols-6 place-items-center px-8">
      <Link to="/home" className="col-start-2 col-span-1 text-red-500">
        <img src={Family} alt="logo" className="w-5 h-5  " />
      </Link>
      <Link to="/daily-tasks" className="col-start-3 col-span-1">
        <img src={DaylyTasks} alt="logo" className="w-5 h-5 " />
      </Link>
      <Link to="/user" className="col-start-4 col-span-1">
        <img src={User} alt="logo" className="w-5 h-5 " />
      </Link>
      <Link to="/score" className="col-start-5 col-span-1">
        <img src={Score} alt="logo" className="w-5 h-5 " />
      </Link>
    </div>
  );
};

export default Menu;

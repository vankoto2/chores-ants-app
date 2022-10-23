import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 w-full bg-[#fafafa] grid grid-cols-6 place-items-center px-8">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "col-start-2 col-span-1 fill-orange"
            : "col-start-2 col-span-1 fill-black"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"h-5 w-5 hover:fill-orange fill-inherit"}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      </NavLink>
      <NavLink
        to="/daily-tasks"
        className={({ isActive }) =>
          isActive
            ? "col-start-3 col-span-1  fill-orange"
            : "col-start-3 col-span-1 fill-black"
        }
      >
        <svg
          width="36px"
          height="36px"
          className="h-5 w-5 hover:fill-orange  fill-inherit"
          viewBox="0 0 36 36"
          version="1.1"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>tasks-solid</title>
          <path
            className="clr-i-solid clr-i-solid-path-1"
            d="M29.29,4.95h-7.2a4.31,4.31,0,0,0-8.17,0H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V6.64A1.7,1.7,0,0,0,29.29,4.95Zm-18,3a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h3.44a1,1,0,0,1,1,1V9.8H11.25Zm14.52,9.23-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7.14-7.14a1.4,1.4,0,1,1,2,2Z"
          ></path>
          <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
        </svg>
      </NavLink>
      <NavLink
        to="/user"
        className={({ isActive }) =>
          isActive
            ? "col-start-4 col-span-1 fill-orange"
            : "col-start-4 col-span-1 fill-black"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hover:fill-orange fill-inherit"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      </NavLink>
      <NavLink
        to="/score"
        className={({ isActive }) =>
          isActive
            ? "col-start-5 col-span-1 fill-orange "
            : "col-start-5 col-span-1 fill-black"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hover:fill-orange fill-inherit"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </NavLink>
    </div>
  );
};

export default Menu;

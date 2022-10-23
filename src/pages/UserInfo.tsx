import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alarm from "../svg/alarm-svgrepo-com.svg";
import Birthday from "../svg/birthday-cake-with-one-burning-candle-svgrepo-com.svg";
import Location from "../svg/location-svgrepo-com.svg";
import DailyTasks from "../svg/daily-tasks.svg";
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
  const [isChat, setIsChat] = useState(true);
  const paramsObj = useParams();
  const params = Number(paramsObj.userId);

  const isChatHandler = () => {
    setIsChat(true);
  };

  const isWhalletHandler = () => {
    setIsChat(false);
  };

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
          src={Alarm}
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
          src={Birthday}
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
          src={Location}
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
          src={DailyTasks}
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
      {isChat ? (
        <>
          <div className="bg-[#ff9984] bottom-0 left-0 right-0 py-2 mt-3 h-14 overflow-hidden w-full grid grid-cols-6 place-items-center px-8">
            <svg
              width="24px"
              height="24px"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              className=" w-5 h-5 col-start-3 fill-white"
              onClick={isChatHandler}
            >
              <path d="M3 .565h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.57v-4.006a2 2 0 0 1-2-2v-9a3 3 0 0 1 3-3z" />
            </svg>

            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 486.641 486.641"
              className="w-5 h-5 col-start-4 col-span-1 fill-black font-medium text-2xl"
              onClick={isWhalletHandler}
            >
              <g>
                <path
                  d="M315.516,182.52c9.3-5.4,24.3-5.4,33.6,0c9.3,5.4,9.4,14.1,0.1,19.5c-9.2,5.4-24.3,5.4-33.6,0
		S306.216,187.92,315.516,182.52z M138.416,99.72c9.3,5.4,24.4,5.4,33.6,0c9.3-5.4,9.2-14.1-0.1-19.5s-24.4-5.4-33.7,0
		C129.016,85.62,129.116,94.32,138.416,99.72z M12.216,89.82l142.1-82.6c15.2-8.9,40.1-8.9,55.5,0l265.3,153.1
		c15.3,8.9,15.4,23.3,0.1,32.1l-142.1,82.6c-15.2,8.9-40.1,8.9-55.4,0l-265.3-153.1C-2.884,113.02-2.984,98.62,12.216,89.82z
		 M70.216,121.92c-1.8,1-3.6,1.9-5.6,2.7l205.9,118.9c1-0.7,2.1-1.5,3.2-2.2c15.4-9,40.5-9,56.1,0c2.4,1.4,4.4,2.9,6.1,4.5
		l85.7-49.8c-2.8-1-5.4-2.1-7.8-3.5c-15.6-9-15.6-23.5-0.2-32.5c2.4-1.4,4.9-2.5,7.7-3.5l-206.5-119.2c-1.3,1.2-2.9,2.2-4.6,3.3
		c-15.4,9-40.6,9-56.1,0c-1.7-1-3.2-2-4.5-3.1l-85,49.3c1.8,0.8,3.7,1.6,5.4,2.6C85.516,98.42,85.616,113.02,70.216,121.92z
		 M4.916,166.62l277.9,160.4l3.9,2.3l5.6,3.2c7.8,4.5,20.5,4.5,28.3,0l159.3-92.6c6.5-3.8,6.5-9.9-0.1-13.7
		c-6.5-3.8-17.1-3.8-23.6,0l-149.8,87.1l-277.2-160.1c-6.4-3.7-17-4.2-23.7-0.8C-1.684,156.22-1.784,162.62,4.916,166.62z
		 M480.216,276.32c-6.6-3.8-17.2-3.8-23.7,0l-149.9,87.1l-277.2-160.1c-6.4-3.7-17-4.3-23.7-0.8c-7.2,3.8-7.3,10.1-0.6,14.1
		l277.9,160.4l4,2.3l5.6,3.2c7.8,4.5,20.5,4.5,28.3,0l159.4-92.5C486.816,286.22,486.716,280.12,480.216,276.32z M213.016,120.22
		l5.8,3.3c-1.3,0.7-2.5,1.5-3.8,2.2l-5.8-3.3c-1.2-0.7-3-0.7-4.2,0l-4.6,2.7c-1.2,0.7-1.2,1.8,0,2.4l6.9,4c-1.2,1.3-2.5,2.5-3.5,3.9
		c-4.9,7-5,13.9,1,20.7c2.5,2.9,5.7,5.4,9.5,7.5c3.6,2.1,7.7,3.9,12.3,5.4c2.5,0.8,5.1,1.5,7.7,2.1c2.6,0.5,4.4,0,5.4-1.4
		c1.2-1.5,2.2-3.1,3.2-4.7c0.7-1.1,0.5-1.8-0.6-2.5c-0.3-0.2-0.7-0.4-1.2-0.5c-2.8-1-5.8-1.9-8.5-3c-2.5-1-4.8-2-6.9-3.2
		c-2.4-1.4-4.4-2.9-6-4.7c-3.8-4.1-2.7-8.1,0.6-12.2l14.9,8.6c1.2,0.7,3,0.7,4.2,0l4.6-2.7c1.2-0.7,1.2-1.8,0-2.4l-16.3-9.4
		c1.3-0.8,2.6-1.5,3.8-2.2l16.3,9.4c1.2,0.7,3,0.7,4.2,0l4.6-2.7c1.2-0.7,1.2-1.8,0-2.4l-14.2-8.2l0.2-0.1
		c5.6-1.3,11.2-1.6,16.9-0.2c3.8,0.9,7,2.3,9.7,3.8c2.1,1.2,3.9,2.6,5.6,4c1.9,1.6,3.5,3.4,5.2,5c0.3,0.2,0.5,0.4,0.8,0.6
		c1.1,0.7,2.4,0.8,4.3,0.4c2.6-0.6,5.3-1.2,7.9-1.8c2.4-0.6,3.3-1.6,2.6-3l-0.6-1.1c-3.1-4-7.1-7.5-12.3-10.5
		c-2-1.1-4.1-2.2-6.5-3.2c-6-2.5-12.5-4.2-19.8-4.8c-9.3-0.7-18,0.5-26.2,3l-1,0.3l-7.3-4.2c-1.2-0.7-3-0.7-4.2,0l-4.6,2.7
		C211.816,118.42,211.816,119.52,213.016,120.22 M304.216,106.02c33.5,19.3,33.5,50.7,0.1,70.1s-87.5,19.5-121,0.1
		c-33.5-19.3-33.6-50.7-0.2-70.1S270.716,86.62,304.216,106.02 M4.916,266.72l277.9,160.4l3.9,2.3l5.6,3.2c7.8,4.5,20.5,4.5,28.3,0
		l159.3-92.6c6.5-3.8,6.5-9.9-0.1-13.7c-6.5-3.8-17.1-3.8-23.6,0l-149.9,87.1l-277.1-160c-6.4-3.7-17-4.2-23.7-0.8
		C-1.684,256.42-1.784,262.82,4.916,266.72z M480.216,376.42c-6.6-3.8-17.2-3.8-23.7,0l-149.9,87.1l-277.2-160
		c-6.4-3.7-17-4.3-23.7-0.8c-7.2,3.8-7.3,10.1-0.6,14.1l277.9,160.4l4,2.3l5.6,3.2c7.8,4.5,20.5,4.5,28.3,0l159.4-92.6
		C486.816,386.32,486.716,380.22,480.216,376.42z"
                />
              </g>
            </svg>
          </div>
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
      ) : (
        <>
          <div className="bg-[#ff9984] py-2 mt-3 h-14 overflow-hidden w-full grid grid-cols-6 place-items-center px-8">
            <svg
              width="24px"
              height="24px"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              className=" w-5 h-5 col-start-3 col-span-1 fill-black"
              onClick={isChatHandler}
            >
              <path d="M3 .565h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.57v-4.006a2 2 0 0 1-2-2v-9a3 3 0 0 1 3-3z" />
            </svg>

            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 486.641 486.641"
              className="w-5 h-5 col-start-4 col-span-1 fill-white"
              onClick={isChatHandler}
            >
              <g>
                <path
                  d="M315.516,182.52c9.3-5.4,24.3-5.4,33.6,0c9.3,5.4,9.4,14.1,0.1,19.5c-9.2,5.4-24.3,5.4-33.6,0
		S306.216,187.92,315.516,182.52z M138.416,99.72c9.3,5.4,24.4,5.4,33.6,0c9.3-5.4,9.2-14.1-0.1-19.5s-24.4-5.4-33.7,0
		C129.016,85.62,129.116,94.32,138.416,99.72z M12.216,89.82l142.1-82.6c15.2-8.9,40.1-8.9,55.5,0l265.3,153.1
		c15.3,8.9,15.4,23.3,0.1,32.1l-142.1,82.6c-15.2,8.9-40.1,8.9-55.4,0l-265.3-153.1C-2.884,113.02-2.984,98.62,12.216,89.82z
		 M70.216,121.92c-1.8,1-3.6,1.9-5.6,2.7l205.9,118.9c1-0.7,2.1-1.5,3.2-2.2c15.4-9,40.5-9,56.1,0c2.4,1.4,4.4,2.9,6.1,4.5
		l85.7-49.8c-2.8-1-5.4-2.1-7.8-3.5c-15.6-9-15.6-23.5-0.2-32.5c2.4-1.4,4.9-2.5,7.7-3.5l-206.5-119.2c-1.3,1.2-2.9,2.2-4.6,3.3
		c-15.4,9-40.6,9-56.1,0c-1.7-1-3.2-2-4.5-3.1l-85,49.3c1.8,0.8,3.7,1.6,5.4,2.6C85.516,98.42,85.616,113.02,70.216,121.92z
		 M4.916,166.62l277.9,160.4l3.9,2.3l5.6,3.2c7.8,4.5,20.5,4.5,28.3,0l159.3-92.6c6.5-3.8,6.5-9.9-0.1-13.7
		c-6.5-3.8-17.1-3.8-23.6,0l-149.8,87.1l-277.2-160.1c-6.4-3.7-17-4.2-23.7-0.8C-1.684,156.22-1.784,162.62,4.916,166.62z
		 M480.216,276.32c-6.6-3.8-17.2-3.8-23.7,0l-149.9,87.1l-277.2-160.1c-6.4-3.7-17-4.3-23.7-0.8c-7.2,3.8-7.3,10.1-0.6,14.1
		l277.9,160.4l4,2.3l5.6,3.2c7.8,4.5,20.5,4.5,28.3,0l159.4-92.5C486.816,286.22,486.716,280.12,480.216,276.32z M213.016,120.22
		l5.8,3.3c-1.3,0.7-2.5,1.5-3.8,2.2l-5.8-3.3c-1.2-0.7-3-0.7-4.2,0l-4.6,2.7c-1.2,0.7-1.2,1.8,0,2.4l6.9,4c-1.2,1.3-2.5,2.5-3.5,3.9
		c-4.9,7-5,13.9,1,20.7c2.5,2.9,5.7,5.4,9.5,7.5c3.6,2.1,7.7,3.9,12.3,5.4c2.5,0.8,5.1,1.5,7.7,2.1c2.6,0.5,4.4,0,5.4-1.4
		c1.2-1.5,2.2-3.1,3.2-4.7c0.7-1.1,0.5-1.8-0.6-2.5c-0.3-0.2-0.7-0.4-1.2-0.5c-2.8-1-5.8-1.9-8.5-3c-2.5-1-4.8-2-6.9-3.2
		c-2.4-1.4-4.4-2.9-6-4.7c-3.8-4.1-2.7-8.1,0.6-12.2l14.9,8.6c1.2,0.7,3,0.7,4.2,0l4.6-2.7c1.2-0.7,1.2-1.8,0-2.4l-16.3-9.4
		c1.3-0.8,2.6-1.5,3.8-2.2l16.3,9.4c1.2,0.7,3,0.7,4.2,0l4.6-2.7c1.2-0.7,1.2-1.8,0-2.4l-14.2-8.2l0.2-0.1
		c5.6-1.3,11.2-1.6,16.9-0.2c3.8,0.9,7,2.3,9.7,3.8c2.1,1.2,3.9,2.6,5.6,4c1.9,1.6,3.5,3.4,5.2,5c0.3,0.2,0.5,0.4,0.8,0.6
		c1.1,0.7,2.4,0.8,4.3,0.4c2.6-0.6,5.3-1.2,7.9-1.8c2.4-0.6,3.3-1.6,2.6-3l-0.6-1.1c-3.1-4-7.1-7.5-12.3-10.5
		c-2-1.1-4.1-2.2-6.5-3.2c-6-2.5-12.5-4.2-19.8-4.8c-9.3-0.7-18,0.5-26.2,3l-1,0.3l-7.3-4.2c-1.2-0.7-3-0.7-4.2,0l-4.6,2.7
		C211.816,118.42,211.816,119.52,213.016,120.22 M304.216,106.02c33.5,19.3,33.5,50.7,0.1,70.1s-87.5,19.5-121,0.1
		c-33.5-19.3-33.6-50.7-0.2-70.1S270.716,86.62,304.216,106.02 M4.916,266.72l277.9,160.4l3.9,2.3l5.6,3.2c7.8,4.5,20.5,4.5,28.3,0
		l159.3-92.6c6.5-3.8,6.5-9.9-0.1-13.7c-6.5-3.8-17.1-3.8-23.6,0l-149.9,87.1l-277.1-160c-6.4-3.7-17-4.2-23.7-0.8
		C-1.684,256.42-1.784,262.82,4.916,266.72z M480.216,376.42c-6.6-3.8-17.2-3.8-23.7,0l-149.9,87.1l-277.2-160
		c-6.4-3.7-17-4.3-23.7-0.8c-7.2,3.8-7.3,10.1-0.6,14.1l277.9,160.4l4,2.3l5.6,3.2c7.8,4.5,20.5,4.5,28.3,0l159.4-92.6
		C486.816,386.32,486.716,380.22,480.216,376.42z"
                />
              </g>
            </svg>
          </div>
          <div>no</div>
        </>
      )}
    </>
  );
};

export default UserInfo;

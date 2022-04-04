import React, { Fragment } from "react";

import SingleUser from "../components/SingleUser";

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
  }[];
}

const Home: React.FC<UsersListProps> = (props) => {
  return (
    <Fragment>
      <div className="grid grid-cols-8 items-center" >

      <h1 className="col-start-2 col-end-8 pt-4 text-2xl font-bold">Family Members</h1>
      </ div>
      <div className="grid grid-cols-2">
        {props.users.map((user) => (
          <SingleUser
            key={user.id}
            id={user.id}
            picture={user.picture}
            firstName={user.firstName}
            lastName={user.lastName}
            isActive={user.isActive}
          />
        ))}
      </div>
      <div className="px-4 py-24 mx-auto bg-[#ffe3e3]">
        chat
      </div>
      <form>
        <div className="bg-[#FECFB1] py-2 mt-3 flex -space-x-12 overflow-hidden justify-center">
          <input
            aria-label="test"
            type="text"
            placeholder="massage..."
            className="py-3 px-20 w-auto justify-self-center rounded-3xl"
          />
          <button className="rounded-full w-12 h-12 bg-[#f53a3a] justify-self-end"></button>
        </div>
      </form>
      <div className="grid justify-items-stretch">
        <div className="pt-4 justify-self-center">
          <button className="rounded-full w-20 h-20 bg-[#f53a3a]"></button>
        </div>
        <div className="px-4 text-2xl font-bold justify-self-center">
          Emergency Call
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from "react";

import SingleUser from "./SingleUser";

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
  }[];
}

const Home: React.FC<UsersListProps> = (props) => {
  return (
    <Fragment>
      <h2 className="px-4 pt-4 text-2xl font-bold">Family Members</h2>
      <div className="grid grid-cols-2">
        {props.users.map((user) => (
          <SingleUser
            key={user.id}
            id={user.id}
            picture={user.picture}
            firstName={user.firstName}
            lastName={user.lastName}
          />
        ))}
      </div>
      <form>
        <div className="bg-[#FECFB1] py-2 grid justify-items-stretch">
          <input
            aria-label="test"
            type="text"
            placeholder="massage..."
            className="py-3 px-20 w-10/12 justify-self-center rounded-3xl"
          />
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

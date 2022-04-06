import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import UserTasks from "../components/users/UserTasks";

import Dots from "../svg/gear.svg";

interface UsersListProps {
  users: {
    id: number;
    tasks: {
      idTask: number,
      taskName: string,
      description: string,
      times: number,
      picture: string,
      done: boolean,
    }[];
  }[];
}

const DailyTasks: React.FC<UsersListProps> = (props) => {
  return (
    <Fragment>
      <div className="grid grid-cols-8 items-center">
        <h1 className="col-start-2 col-end-8 py-4 text-2xl font-bold">
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
      {props.users[0].tasks.map((task) => (
        <UserTasks
          key={task.idTask}
          id={task.idTask}
          taskName={task.taskName}
          description={task.description}
          times={task.times}
          picture={task.picture}
          done={task.done}
        />
      ))}
    </Fragment>
  );
};

export default DailyTasks;

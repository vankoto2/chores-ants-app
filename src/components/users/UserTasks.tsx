import React from "react";

const UserTasks = (props: any) => {
  const [checked, setChecked] = React.useState(props.done);

  let backgroundColor: string =
    "grid grid-cols-8 items-center my-3 py-2 bg-[#FFFCF9]";
  const handleChange = () => {
    setChecked(!checked);
  };

  if (checked) {
    backgroundColor = "grid grid-cols-8 items-center my-3 py-2 bg-[#FECFB1]";
  }

  return (
    <div className={backgroundColor}>
      <img
        width="90"
        height="90"
        src={props.picture}
        alt="#"
        className="rounded-full object-cover ml-5   col-start-1 col-end-3"
      ></img>
      <div className="col-start-3 col-end-7 ml-10 px-2">
        <div className="text-2xl font-bold">{props.taskName}</div>
        <div className="text-xs">You've finished this task {props.times} times this month</div>
      </div>
      <div className="col-start-7 col-end-8 ml-5 px-2">
        <input className="border-orange text-orange focus:ring-orange w-9 h-9 bg-orange rounded-lg focus:ring-0" type="checkbox" checked={checked} onChange={handleChange} />
      </div>
    </div>
  );
};

export default UserTasks;

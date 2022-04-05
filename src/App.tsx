import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/layout/Navigation";
import Home from "./pages/Home";
import DailyTasks from "./pages/DailyTasks";
import User from "./pages/User";
import Score from "./pages/Score";
import "./App.css";
import Menu from "./components/layout/Menu";

const mockData: {
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
  tasks: {
    idTask: number;
    taskName: string;
    description: string;
    times: number;
    picture: string;
    done: boolean;
  }[];
}[] = [
  {
    id: 1,
    firstName: "Ivan",
    lastName: "Georgiev",
    picture: "https://avatars.githubusercontent.com/u/68854043?v=4",
    allergy: "none",
    birthDay: "22.04.1988",
    location: "Varna",
    chorsToDo: 5,
    chorsDone: 3,
    isActive: true,
    tasks: [
      {
        idTask: 1,
        taskName: "Laundry",
        description: "lorem ipson",
        times: 3,
        picture:
          "https://res.cloudinary.com/mtree/image/upload/q_auto,f_auto,dpr_auto/Downy_US_MW/6CCVOCZnGmKCfE1HiETinK/f8cb90a383efdbb80eae1893374a4a52/ef9e5dab2cc86043cb7dc3a241c72716_2x.jpg",
        done: false,
      },
      {
        idTask: 2,
        taskName: "Dishes",
        description: "lorem ipson",
        times: 5,
        picture:
          "https://www.thespruce.com/thmb/Y9l-tMW1uPAf7BFBglJxxd_PSxw=/2516x2516/smart/filters:no_upscale()/easy-washing-dishes-4174811-hero-617c4e3694d1417b82b2eaaf2db70f5b.jpg",
        done: true,
      },
      {
        idTask: 3,
        taskName: "Breakfast",
        description: "lorem ipson",
        times: 7,
        picture:
          "https://simply-delicious-food.com/wp-content/uploads/2018/10/breakfast-board.jpg",
        done: true,
      },
    ],
  },
  {
    id: 2,
    firstName: "Stanislav",
    lastName: "Monev",
    picture:
      "data:image/jpeg;base64,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",
    allergy: "polen",
    birthDay: "26.03.1988",
    location: "Varna",
    chorsToDo: 5,
    chorsDone: 5,
    isActive: true,
    tasks: [
      {
        idTask: 1,
        taskName: "Laundry",
        description: "lorem ipson",
        times: 3,
        picture: "https://avatars.githubusercontent.com/u/68854043?v=4",
        done: true,
      },
      {
        idTask: 2,
        taskName: "Dishes",
        description: "lorem ipson",
        times: 3,
        picture: "https://avatars.githubusercontent.com/u/68854043?v=4",
        done: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Julian",
    lastName: "Vatkovski",
    picture:
      "https://scontent.fsof9-1.fna.fbcdn.net/v/t1.18169-9/10426849_10207012686254224_310180499831520007_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=u5DOGvX6e0EAX-CR6yV&_nc_ht=scontent.fsof9-1.fna&oh=00_AT8E67kQ7Uht7kskmAwHM0YODH_okPiYRUlv2TPGXzY5NQ&oe=627199CF",
    allergy: "polen",
    birthDay: "26.03.1988",
    location: "Varna",
    chorsToDo: 5,
    chorsDone: 5,
    isActive: true,
    tasks: [
      {
        idTask: 1,
        taskName: "Laundry",
        description: "lorem ipson",
        times: 3,
        picture: "https://avatars.githubusercontent.com/u/68854043?v=4",
        done: true,
      },
      {
        idTask: 2,
        taskName: "Dishes",
        description: "lorem ipson",
        times: 3,
        picture: "https://avatars.githubusercontent.com/u/68854043?v=4",
        done: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "Stojan",
    lastName: "Grigorov (SNG)",
    picture:
      "data:image/jpeg;base64,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",
    allergy: "polen",
    birthDay: "26.03.1988",
    location: "Varna",
    chorsToDo: 5,
    chorsDone: 5,
    isActive: false,
    tasks: [
      {
        idTask: 1,
        taskName: "Laundry",
        description: "lorem ipson",
        times: 3,
        picture: "https://avatars.githubusercontent.com/u/68854043?v=4",
        done: true,
      },
      {
        idTask: 2,
        taskName: "Dishes",
        description: "lorem ipson",
        times: 3,
        picture: "https://avatars.githubusercontent.com/u/68854043?v=4",
        done: true,
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <div className="App container mx-auto">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home users={mockData} />} />
        <Route path="/daily-tasks" element={<DailyTasks users={mockData} />} />
        <Route path="/user" element={<User />} />
        <Route path="/score" element={<Score />} />
      </Routes>
      <Menu />
    </div>
  );
};

export default App;

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from "./src/views/Home";
import Task from "./src/views/Task";
import Appe from "./Appe";

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
  })
);

export default function App() {
  return <Routes />;
}

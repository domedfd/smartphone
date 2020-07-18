// ReactotronConfig.js:
import Reactotron from "reactotron-react-native";

Reactotron
  // Your real ip address 👇
  .configure({ host: "192.168.0.2" })
  .useReactNative()
  .connect();

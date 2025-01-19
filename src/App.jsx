import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
import HomeTemplate from "./templates/HomeTemplate";
import { NotificationProvider } from "./store/Notification.Context";

const arrRoutes = [
  {
    path: pathDefault.homePage,
    element: <HomeTemplate />,
  },
];

function App() {
  const routes = useRoutes(arrRoutes);
  return (
    <>
      <NotificationProvider>{routes}</NotificationProvider>
    </>
  );
}

export default App;

import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../../components/Map/Map";
import User from "../../components/User/User";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;

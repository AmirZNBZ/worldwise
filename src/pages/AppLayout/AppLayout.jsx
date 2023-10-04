import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../../components/Map/Map";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;

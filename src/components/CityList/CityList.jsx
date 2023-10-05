import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) <Spinner />;
  return <ul className={styles.cityList}>{cities}</ul>;
}

export default CityList;

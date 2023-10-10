import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import CityItem from "../CityItem/CityItem";
import Message from "../Message/Message";
import { useCities } from "../../contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CityList;

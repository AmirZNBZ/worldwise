import styles from "./CountryItem.module.css";
import propTypes from "prop-types";
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: propTypes.string.isRequired,
};

export default CountryItem;

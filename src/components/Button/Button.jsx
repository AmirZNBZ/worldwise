import styles from "./Button.module.css";
import propTypes from "prop-types";

function Button({ children, onClick, type }) {
  return <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  children: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
};

export default Button;

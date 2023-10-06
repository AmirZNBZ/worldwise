import styles from "./Message.module.css";
import propTypes from "prop-types";


function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

Message.propTypes = {
  message: propTypes.string.isRequired,
};


export default Message;

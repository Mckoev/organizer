import warning from "img/warning.png";
import styles from "pages/error/error.module.scss";

function ApiError() {
  return (
    <>
      <img className={styles.apiError__img} src={warning} alt="warning" />
      <span>Server it doesn&apos;t work</span>
    </>
  );
}

export default ApiError;
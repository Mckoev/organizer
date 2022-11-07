import styles from "./error.module.scss";

/* eslint-disable */
function Error({children}): JSX.Element {
  return (
    <div className={styles.apiError}>
      {children}
    </div>
  );
}

export default Error;
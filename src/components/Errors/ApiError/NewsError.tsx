import noNews from "img/no-news.png";
import styles from "pages/error/error.module.scss";

function NewsError() {
  return (
    <img className={styles.apiError__img} src={noNews} alt="no news" />
  );
}

export default NewsError;
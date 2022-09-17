import { IRow } from 'types/interfaices';
import noImgIcon from 'img/noimg.png';
import styles from 'pages/news/news.module.scss';

function RowComponent({ item, style }: IRow) {
    const imgSrc: string = item.image_url ? item.image_url : noImgIcon;
    return (
        <li key={item.title} style={style}>
            <div className={styles.source}>{item.creator ? `${item.creator} (${item.source_id})` : item.source_id}</div>
            <div className={styles.newsBlock}>
                <a href={item.link} target='_blank' rel='nofollow noopener noreferrer'>
                    <div className={styles.title}>{item.title} </div>
                    <div className={styles.description}>{item.description}</div>
                </a>
                <img className={styles.image} src={imgSrc} alt='icon news' />
            </div>
            <div className={styles.time}>{item.pubDate}</div>
        </li>
    );
}

export default RowComponent;

import { IRow } from 'types/interfaices';
import noImgIcon from 'img/noimg.png';
import styles from 'pages/news/news.module.scss';

function RowComponent({ item, style }: IRow) {
    const imgSrc: string = item.image_url ? item.image_url : noImgIcon;
    return (
        <li key={item.title} style={style} className={styles.rowComponent}>
            <div className={styles.rowComponent__source}>{item.creator ? `${item.creator} (${item.source_id})` : item.source_id}</div>
            <div className={styles.rowComponent__newsBlock}>
                <a href={item.link} target='_blank' rel='nofollow noopener noreferrer'>
                    <div className={styles.rowComponent__title}>{item.title} </div>
                    <div className={styles.rowComponent__description}>{item.description}</div>
                </a>
                <img className={styles.rowComponent__image} src={imgSrc} alt='icon news' />
            </div>
            <div className={styles.rowComponent__time}>{item.pubDate}</div>
        </li>
    );
}

export default RowComponent;

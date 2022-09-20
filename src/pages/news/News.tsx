import { useEffect } from 'react';
import { getLatestNews } from 'api/news/getLatestNews';
import { useAppSelector } from 'reduxToolkit/hooks';
import classNames from 'classnames/bind';
import Spinner from '../spinner/Spinner';
import ListComponent from '../../components/News/ListComponent';
import styles from './news.module.scss';

function News() {
    const isLoadingLatestNews: boolean = useAppSelector((state) => state.isLoading.isLoadingLatestNews);

    useEffect(() => getLatestNews(), []);

    const cx = classNames.bind(styles);

    return (
        <div className={styles.news}>
            <div className={cx('newsList', 'news__newsList')}>{isLoadingLatestNews ? <Spinner /> : <ListComponent />}</div>
        </div>
    );
}

export default News;

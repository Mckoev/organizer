import { useEffect } from 'react';
import { getLatestNews } from 'api/news/getLatestNews';
import classNames from 'classnames/bind';
import { useAppSelector } from 'reduxToolkit/hooks';
import Spinner from '../spinner/Spinner';
import ListComponent from '../../components/News/ListComponent';
import styles from './news.module.scss';

function News() {
    const isLoadingLatestNews: boolean = useAppSelector((state) => state.isLoading.isLoadingLatestNews);

    useEffect(() => getLatestNews(), []);

    const cx = classNames.bind(styles);

    return (
        <div className={cx('page', 'pageNews')}>
            <div className={styles.overlay}>
                <div className={cx('panel', 'panel-newsList')}>{isLoadingLatestNews ? <Spinner /> : <ListComponent />}</div>
            </div>
        </div>
    );
}

export default News;

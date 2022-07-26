import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { getSize } from 'helpers/getSize';
import { INews } from 'types/interfaices';
import { useAppSelector } from 'reduxToolkit/hooks';
import { getLatestNews } from 'api/news/getLatestNews';
import RowComponent from './RowComponent';
import styles from '../../pages/news/news.module.scss';

/* eslint-disable */

function ListComponent() {
    const isItemLoaded = (index: number) => index < items.length;

    const items: INews[] = useAppSelector((state) => state.latestNews.arrNews).slice(1);

    function Row({ index, style }) {
        return <RowComponent item={items[index]} index={index} style={style} />;
    }

    const getItemSize = (index: number) => getSize(index, items);

    return (
        <AutoSizer>
            {({ height, width }) => (
                <InfiniteLoader isItemLoaded={isItemLoaded} loadMoreItems={getLatestNews} itemCount={items.length + 1}>
                    {({ onItemsRendered, ref }) => (
                        <List
                            height={height - 8}
                            itemCount={items.length + 1}
                            itemSize={getItemSize}
                            width={width}
                            ref={ref}
                            onItemsRendered={onItemsRendered}
                            className={styles.listComponent}
                        >
                            {Row}
                        </List>
                    )}
                </InfiniteLoader>
            )}
        </AutoSizer>
    );
}

export default ListComponent;

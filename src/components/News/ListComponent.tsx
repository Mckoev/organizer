import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import RowComponent from './RowComponent';
import { useAppSelector } from '../../reduxToolkit/hooks';
import { getLatestNews } from '../../api/news/getLatestNews';
import { getSize } from '../../helpers/getSize';

function ListComponent() {
    const isItemLoaded = (index) => index < items.length;

    const items = useAppSelector((state) => state.latestNews.arrNews).slice(1);
    console.log(items);

    function Row({ index, style }) {
        return (
            <RowComponent
                imageUrl={items[index].image_url}
                index={index}
                creator={items[index].creator}
                sourceId={items[index].source_id}
                link={items[index].link}
                title={items[index].title}
                description={items[index].description}
                date={items[index].pubDate}
                style={style}
            />
        );
    }

    const getItemSize = (index) => getSize(index, items);

    return (
        <AutoSizer>
            {({ height, width }) => (
                <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    loadMoreItems={getLatestNews}
                    itemCount={items.length + 1}
                >
                    {({ onItemsRendered, ref }) => (
                        <List
                            height={height}
                            itemCount={items.length + 1}
                            itemSize={getItemSize}
                            width={width}
                            ref={ref}
                            onItemsRendered={onItemsRendered}
                            className='list-container'
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

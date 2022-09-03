import { INews, IStyle } from '../../types/interfaices';

function RowComponent({
    item,
    index,
    style,
}: {
    item: INews;
    index: number;
    style: IStyle;
}) {
    return (
        <li key={index} style={style}>
            <div className='source'>
                {item.creator
                    ? `${item.creator} (${item.source_id})`
                    : item.source_id}
            </div>
            <div className='news-block'>
                <a
                    href={item.link}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                >
                    <div className='title'>{item.title} </div>
                    <div className='description'>{item.description}</div>
                </a>
                <img className='image' src={item.image_url} alt='downloading' />
            </div>
            <div className='time'>{item.pubDate}</div>
        </li>
    );
}

export default RowComponent;

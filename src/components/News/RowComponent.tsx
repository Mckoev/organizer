import { IRow } from 'types/interfaices';

function RowComponent({ item, style }: IRow) {
    const imgSrc: string = item.image_url ? item.image_url : require('../../img/noimg.png');
    return (
        <li key={item.title} style={style}>
            <div className='source'>{item.creator ? `${item.creator} (${item.source_id})` : item.source_id}</div>
            <div className='news-block'>
                <a href={item.link} target='_blank' rel='nofollow noopener noreferrer'>
                    <div className='title'>{item.title} </div>
                    <div className='description'>{item.description}</div>
                </a>
                <img className='image' src={imgSrc} />
            </div>
            <div className='time'>{item.pubDate}</div>
        </li>
    );
}

export default RowComponent;

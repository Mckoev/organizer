function RowComponent({
    style,
    index,
    imageUrl,
    creator,
    sourceId,
    link,
    title,
    description,
    date,
}) {
    return (
        <li key={index} style={style}>
            <div className='source'>
                {creator ? `${creator} (${sourceId})` : sourceId}
            </div>
            <div className='news-block'>
                <a
                    href={link}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                >
                    <div className='title'>{title} </div>
                    <div className='description'>{description}</div>
                </a>
                <img className='image' src={imageUrl} alt='downloading' />
            </div>
            <div className='time'>{date}</div>
        </li>
    );
}

export default RowComponent;

function RowComponent({style, index, image_url, creator, source_id, link, title, description, date}) {
    return (
        <li key={index} style={style}>

            <div className="source">{(creator) ? `${creator} (${source_id})` : source_id}</div>
            <div className="news-block">
                <a href={link} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="title">{title} </div>
                    <div className="description">{description}</div>
                </a>
                <img className="image" src={image_url} alt='downloading'></img>
            </div>
            <div className="time">{date}</div>
        </li>
    );
}

export default RowComponent;
import React from 'react';

function RowComponent({style, index, image_url, creator, source_id, link, title, description, date}) {
    return (
        <li key={index} style={style}>
            <img className="image" src={image_url} alt='downloading'></img>
            <div className="source">{(creator) ? `${creator} (${source_id})` : source_id}</div>
            <a href={link} target="_blank">
                <div className="title">{title} </div>
                <div className="description">{description}</div>
            </a>
            <div className="time">{date}</div>
        </li>
    );
}

RowComponent.propTypes = {};

export default React.memo(RowComponent) ;
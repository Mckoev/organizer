import React from 'react';
import {INewsBox} from "../../helpers/interfeices";
import {useAppSelector} from "../../reduxToolkit/hooks";

function LastNews() {

    const arrNews: INewsBox[] = useAppSelector(state => state.toolkitSliceLatestNews.arrNews)

    const listNews = arrNews.map((el, index): any => (
        <li key={index}>
            <img className="image" src={el.image_url} alt='icon'></img>
            <div className="source">{(el.creator) ? `${el.creator[0]} (${el.source_id})` : el.source_id}</div>
            <a href={el.link} target="_blank">
            <div className="title">{el.title}</div>
            <div className="description">{el.description}</div></a>
            <div className="time">{el.date}</div>
        </li>
    ))

    return (
        <ul>{listNews}</ul>
    );
}

LastNews.propTypes = {};

export default LastNews
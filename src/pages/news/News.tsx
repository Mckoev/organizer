import React, {useEffect} from 'react'
import './news.css'
import {getLatestNews} from "../../api/news/getLatestNews";
import {useAppSelector} from "../../reduxToolkit/hooks";
import Spinner from "../spinner/Spinner";
import ListComponent from "../../components/news/ListComponent";

function News() {

    const isLoadingLatestNews: boolean = useAppSelector((state) => state.toolkitSliceIsLoading.isLoadingLatestNews)

    useEffect(function () {
        getLatestNews()
    }, [])

    return (
        <div className="page page-news">
            <div className="overlay">
                <div className="panel panel-newslist-small">
                    {isLoadingLatestNews ? <Spinner /> : <ListComponent/> }
                </div>
            </div>
        </div>
    )
}

export default News
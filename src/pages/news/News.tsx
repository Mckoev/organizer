import React, {useEffect} from 'react'
import './news.css'
import {getLatestNews} from "../../api/news/getLatestNews";
import {useAppSelector} from "../../reduxToolkit/hooks";
import LastNews from "../../components/news/LastNews";
import Spinner from "../spinner/Spinner";

function News() {

    const isLoadingLatestNews: boolean = useAppSelector((state) => state.toolkitSliceIsLoading.isLoadingLatestNews)

    useEffect(function () {
        getLatestNews()
    }, [])

    return (
        <div className="page page-news">
            <div className="bg"></div>
            <div className="overlay">
                <div className="panel panel-newslist-small">
                    {isLoadingLatestNews ? <Spinner /> : <LastNews/> }
                </div>
            </div>
        </div>
    )
}

export default News

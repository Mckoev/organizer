import React from 'react'
import './map.css'
import YandexMap from "../../components/map/YandexMap";
import Spinner from "../spinner/Spinner";
import {useAppSelector} from "../../reduxToolkit/hooks";
import Form from "../../components/Form";

function Map() {

    const isLoadingLatestNews: boolean = useAppSelector((state) => state.toolkitSliceIsLoading.isLoadingLatestNews)


    return (
        <div className="page page-map">
            <div className="bg"></div>
            <div className="overlay"></div>
            <div className="title">
                <Form/>
            </div>
            <div className="map">
                {isLoadingLatestNews ? <Spinner/> : <YandexMap/>}
            </div>

        </div>
    )
}

export default Map

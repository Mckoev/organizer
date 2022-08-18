import {URL_LATEST_NEWS} from "./newsApiData";
import {METHODS} from "../methods";
import {store} from "../../reduxToolkit/store";
import {newsAction} from "../../reduxToolkit/toolkitSliceLatestNews";
import {isLoadingLatestNews} from "../../reduxToolkit/toolkitSliceIsLoading";

let page: number = 0

export function getLatestNews(): void {
    fetch(`${URL_LATEST_NEWS}&page=${page}`, {
        method: METHODS.GET
    })
        .then(res => res.json())
        .then(result => {
            store.dispatch(newsAction(result.results))
            store.dispatch(isLoadingLatestNews({'isLoadingLatestNews': false}))
        })
    page++
}
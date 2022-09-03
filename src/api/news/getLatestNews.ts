import { URL_LATEST_NEWS } from './newsApiData';
import { METHODS } from '../methods';
import { store } from '../../reduxToolkit/store';
import { newsAction } from '../../reduxToolkit/slices/latestNews';
import { isLoadingLatestNews } from '../../reduxToolkit/slices/isLoading';

let page = 0;

export function getLatestNews(): void {
    fetch(`${URL_LATEST_NEWS}&page=${page}`, {
        method: METHODS.GET,
    })
        .then((res) => res.json())
        .then((result) => {
            store.dispatch(newsAction(result.results));
            store.dispatch(isLoadingLatestNews({ isLoadingLatestNews: false }));
        });
    page += 1;
}

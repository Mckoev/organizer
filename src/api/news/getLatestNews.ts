import { newsAction } from "reduxToolkit/slices/latestNews";
import { URL_LATEST_NEWS } from "api/news/newsApiData";
import { store } from "reduxToolkit/store";
import { isErrorApiLatestNews, isLoadingLatestNews } from "reduxToolkit/slices/isLoading";

let page = 0;

export function getLatestNews(): void {
    fetch(`${URL_LATEST_NEWS}&page=${page}`, {
        method: 'Get',
    })
        .then((res) => res.json())
        .then((result) => {
            store.dispatch(newsAction(result.results));
            store.dispatch(isLoadingLatestNews({ isLoadingLatestNews: false }));
        })
    .catch(() => {
    store.dispatch(isErrorApiLatestNews({
      isErrorApiLatestNews: true,
    }))
  });
    page += 1;
}

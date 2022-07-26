import {URL, TOKEN, METHODS} from "./API";


export function  getWeatherToHome(): Promise<any> {
    const responce = fetch(URL, {
        method: METHODS.POST,
        headers: {
            'Content-Type': `application/json`,
            'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            "location": "petrozavodsk"
        })
    })
        .then(response => response.json())
    return responce
}












const TOKEN = "MjBkMTc1MmItNTY5Mi00ZDlkLTg2MGUtNmNmNzExMDgxZDgy"
const URL = "https://api.m3o.com/v1/weather/Now"

export async function  getWeatherToHome(): Promise<any> {
    const responce = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': `application/json`,
            'Authorization' : `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            "location": "petrozavodsk"
        })
    });

    let result = await responce.json();
    console.log(result)
    return result
}











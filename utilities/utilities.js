import unirest from 'unirest'
import { key } from '../.env_key'

export async function getAllGenreID() {
    let data = unirest.get("https://unogs-unogs-v1.p.mashape.com/api.cgi?t=genres")
      .header("X-Mashape-Key", key)
      .header("Accept", "application/json")
      .end();
    return data;
}

export async function fetchGenreID() {
    let data;
    const url = "https://unogs-unogs-v1.p.mashape.com/api.cgi?t=genres";
    const reqHeader = new Headers({
        'X-Mashape-Key': key,
        'Accept': 'application/json'
    });
    const initObject = {
        method: 'GET', headers: reqHeader,
    };
    data = await fetch(url, initObject).then(response => console.log(response.body));
    return data;
}

const getRelevantGenreID = array => (
    array.filter((item, index) => index <= 18 ? item : false)
)

const extractGenreTag = array => (
    Object.keys(array).map(genre => genre.slice(4,-1))
)

export async function getGenreTags() {
    const allGenreID = await getAllGenreID()
    const relevantGenreID = await getRelevantGenreID(allGenreID)
    return extractGenreTag(relevantGenreID)
}
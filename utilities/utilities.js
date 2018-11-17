import unirest from 'unirest'
import { key } from '../.env_key'

export async function getAllGenreID() {
    let data = await unirest.get("https://unogs-unogs-v1.p.mashape.com/api.cgi?t=genres")
      .header("X-Mashape-Key", key)
      .header("Accept", "application/json")
      .end(result => {
          return result.body.ITEMS
      }
    )
    return data
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
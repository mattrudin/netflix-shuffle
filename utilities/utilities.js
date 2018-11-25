import unirest from 'unirest'
import { key } from '../.env_key'

const getRelevantGenreID = array => (
    array.filter((item, index) => index <= 18 ? item : false)
)

const extractGenreTag = array => (
    Object.keys(array).map(genre => genre.slice(4,-1))
)

export function getGenreTags(array) {
    const relevantGenreID =  getRelevantGenreID(array)
    return extractGenreTag(relevantGenreID)
}
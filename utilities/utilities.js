const getRelevantGenreID = array => (
    array.filter((item, index) => index <= 18 ? item : false)
)

const extractGenreTag = array => (
    array.map(genre => Object.keys(genre)).toString().split(",").map(genre => genre.slice(4))
)

export function getGenreTags(array) {
    const relevantGenreID = getRelevantGenreID(array)
    return extractGenreTag(relevantGenreID)
}
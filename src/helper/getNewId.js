import { max } from 'd3-array'

function getNewId(arr) {
    return max(arr.map(o => o.id)) + 1;
}

export default getNewId

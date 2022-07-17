export function dateFormat (date) {
    return date = date.toLocaleDateString()
}

function getID(){
    let counter = 1
    return function count(){
        return counter++
    }
}
export const genID = getID()


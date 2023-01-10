const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
cats.push(name)
}

function destructivelyPrependCat(name) {
cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
cats.shift(name)
}

function appendCat(name) {
    const copy = [...cats]
    copy.push(name)
    return copy  
}

function prependCat(name){
    const copy = [...cats]
    copy.unshift(name)
    return copy
}

function removeLastCat(name){
    const copy = [...cats]
    copy.pop(name)
    return copy
}

function removeFirstCat(name){
    const copy = [...cats]
    copy.shift(name)
    return copy
}
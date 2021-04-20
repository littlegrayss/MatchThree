const findDuplicate = (arr) => {
    let item = 0;
    let sum = 1;
    let start = 0;
    for (let index = 0; index < arr.length; index++) {
        if (item == arr[index].value) {
            sum ++
        } else {
            item = arr[index]
            sum = 1
            start = index
        }
    }
    if (sum >= 3) {
        markChess(arr, start, sum)
        return true
    }
    return false
}
const adjustAll = (chessBoard) => {
    let len = 0
    for (let index = 0; index < chessBoard.length; index++) {
        const row = chessBoard[index]
        len = row.length
        if (findDuplicate(row)) return false
    }
    let j = 0
    while (j < len) {
        const col = chessBoard.map(item => item[j])
        if (findDuplicate(col)) return false
        j++
    }
    return true
}
const markChess = (arr, start, len) => {
    for (let index = start; index < len; index++) {
        arr[index].setMark()
    }
}
const calcOffset = (arr) => {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (0 == arr[index]) {
            sum++
        }
    }
    return sum
}
const exchangeRow = (chess1, chess2) => {
    let tempRow1 = chess1.row
    chess1.row = chess2.row
    chess2.row = tempRow1
}
const exchangeCol = (chess1, chess2) => {
    let tempCol1 = chess1.col
    chess1.col = chess2.col
    chess2.col = tempCol1
}
export default {findDuplicate, adjustAll, markChess, calcOffset, exchangeRow, exchangeCol}
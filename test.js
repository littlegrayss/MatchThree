const initChessBoard = (k, typeNum) => {
    let chessBoard = [];
    for (let i = 0; i < k; i++) {
        chessBoard[i] = [];
        for (let j = 0; j < k; j++) {
            chessBoard[i][j] = createChess(typeNum);
        }
    }
    return chessBoard
}
const createChess = (num) => {
    return Math.ceil(Math.random() * num)
}
const fillChessBoard = () => {}
const adjustAll = (chessBoard) => {
    let len = 0
    for (let index = 0; index < chessBoard.length; index++) {
        const row = chessBoard[index];
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
const findDuplicate = (arr) => {
    let item = 0;
    let sum = 1;
    for (let index = 0; index < arr.length; index++) {
        if (item == arr[index]) {
            sum ++
        } else {
            item = arr[index]
            sum = 1
        }
        if (sum == 3) return true
    }
    return false
}
const mark = (arr, start, len) => {
    
}
let chessBoard = []
chessBoard = initChessBoard(5, 5)
while (!adjustAll(chessBoard)) {
    chessBoard = initChessBoard(5, 5)
}
console.log(chessBoard)


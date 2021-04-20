const initChessBoard = (k: number, typeNum: number) => {
    let chessBoard = [];
    for (let i = 0; i < k; i++) {
        chessBoard[i] = [];
        for (let j = 0; j < k; j++) {
            chessBoard[i][j] = createChess(typeNum);
        }
    }
    return chessBoard
}
const createChess = (num: number): number => {
    return Math.round(Math.random() * (num - 1))
}
const fillChessBoard = () => {}
const adjustAll = (chessBoard) => {

}
const findDuplicate = (arr: number[]) => {
    let item = 0;
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (item == arr[index]) {
            sum = sum + 1
        } else {
            item = arr[index]
            sum = 0
        }
        if (sum == 3) return false
    }
    return true
}

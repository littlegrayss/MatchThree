import Chess from './Chess.js'
import Util from './util.js'
const { adjustAll } = Util
class ChessBoard {
    constructor(k, typeNum) {
        this.k = k
        this.typeNum = typeNum
        this.chessBoard = []
        this.init()
    }
    init() {
        this.chessBoard = this.initChessBoard(this.k, this.typeNum)
        while (!adjustAll(this.chessBoard)) {
            this.chessBoard = this.initChessBoard(this.k, this.typeNum)
        }
    }
    initChessBoard(k, typeNum) {
        let chessBoard = []
        for (let i = 0; i < k; i++) {
            chessBoard[i] = [];
            for (let j = 0; j < k; j++) {
                chessBoard[i][j] = new Chess(typeNum, i, j)
            }
        }
        return chessBoard
    }
    getRow(num) {
        if (num > -1 && num < this.k) return this.chessBoard[num]
        else throw new Error('error row number!')
    }
    getCol(num) {
        if (num > -1 && num < this.k) return this.chessBoard.map(row => row[num])
        else throw new Error('error col number!')
    }
    getChess(row, col) {
        if (row > -1 && row < this.k && col > -1 && col < this.k) return this.chessBoard[row][col]
        else throw new Error('error chess number!')
    }
    getChessBoard() {
        return this.chessBoard
    }
    getLen() {
        return this.k
    }
}
export default ChessBoard
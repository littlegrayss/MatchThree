import ChessBoard from './ChessBoard.js'
import Util from './util.js'
const { exchangeRow, exchangeCol, findDuplicate } = Util
class GamePlay {
    constructor(k, typeNum) {
        this.k = k
        this.typeNum = typeNum
        this.leftStep = 1000
        this.chessBoard = null
        this.init()
    }
    init() {
        this.chessBoard = new ChessBoard(this.k, this.typeNum)
        // console.log(this.chessBoard.getChessBoard());
        console.log(this.chessBoard.getRow(0));
    }
    exchange(chess1, chess2) {
        if (chess1.row == chess2.row) {
            exchangeCol(chess1, chess2)
            let checkRow = findDuplicate(this.chessBoard.getRow(chess1.row))
            let checkCol1 = findDuplicate(this.chessBoard.getCol(chess1.col))
            let checkCol2 = findDuplicate(this.chessBoard.getCol(chess2.col))
            if (checkRow || checkCol1 || checkCol2) {
                this.clearChess()
            } else {
                exchangeCol(chess1, chess2)
            }
            
        }
        if (chess1.col == chess2.col) {
            exchangeRow(chess1, chess2)
            let checkCol = findDuplicate(this.chessBoard.getCol(chess1.col))
            let checkRow1 =  findDuplicate(this.chessBoard.getRow(chess1.row))
            let checkRow2 = findDuplicate(this.chessBoard.getRow(chess2.row))
            if (checkCol || checkRow1 || checkRow2) {
                this.clearChess()
            } else {
                exchangeRow(chess1, chess2)
            }
        }
    }
    clearChess() {
        for (let index = 0; index < this.chessBoard.length; index++) {
            let row = this.chessBoard[index]
            for (let j = 0; j < row.length; j++) {
                let element = row[j]
                if (element.markStatus) {
                    this.chessBoard[i][j] = 0
                }
            }
        }
    }
    drop() {
        let colLen = this.chessBoard.getLen()
        // for () {}
    }
    
}
export default GamePlay
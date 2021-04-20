class Chess {
    constructor(typeNum, row, col) {
        this.typeNum = typeNum
        this.value = null
        this.markStatus = null
        this.col = col
        this.row = row
        this.isBlock = false
        this.init()
    }
    init() {
        this.value = this.createChess()
        this.markStatus = 0
    }
    createChess() {
        return Math.ceil(Math.random() * this.typeNum)
    }
    setMark() {
        this.markStatus = 1
    }
    move(offset) {
        this.col += offset
    }
}
export default Chess
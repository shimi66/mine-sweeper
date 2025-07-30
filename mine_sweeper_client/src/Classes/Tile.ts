import { BoardTileString } from "../types"


class BoardTile {
    value: BoardTileString
    is_bomb: boolean
    is_turned: boolean
    constructor() {
        this.value = '-'
        this.is_bomb = false
        this.is_turned = false
    }
}

export default BoardTile
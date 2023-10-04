import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { snacksService } from "../services/SnacksService.js";


// function _drawSnacks() {
//     const snacks = AppState.snacks
//     let content = ''
//     snacks.forEach(snack => content += snack.price)
//     console.log('here are your snacks', content)
//     setHTML('snacks', content)
// }



export class SnacksController {
    constructor() {
        console.log('does this load?')
        // _drawSnacks()
        // AppState.on('snacks', _drawSnacks)
        AppState.on('snack', this.buySnack)

    }
    buySnack(snackName) {
        console.log('can i buy this snack?')
        snacksService.buySnack(snackName)
        // _drawSnacks()
    }
}
import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyServices.js";
import { setText } from "../utils/Writer.js";




function _drawMoney() {
    let money = ''

    setText('money', AppState.money)

}
export class MoneyController {
    constructor() {
        console.log('did this money controller load?');
        AppState.on('money', _drawMoney)
    }
    addMoney() {
        moneyService.addMoney()
    }

}
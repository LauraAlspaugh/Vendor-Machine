import { AppState } from "../AppState.js";
import { Snack, } from "../models/Snacks.js";
class SnacksService {

    buySnack(snackName) {

        console.log(AppState.money)
        const snack = AppState.snacks.find(snack => snack.name == snackName)
        console.log('buying a ', snack);

        if (AppState.money >= snack.price) {
            AppState.money -= snack.price
        } else {
            console.error("not enough money");
        }

    }
}




export const snacksService = new SnacksService()
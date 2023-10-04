import { AppState } from "../AppState.js";
import { Snack, } from "../models/Snack.js";
class SnacksService {

    buySnack(snackName) {

        // console.log(AppState.money)
        const newSnack = new snackName(snackName)
        AppState.snacks.push(newSnack)
        const Snack = AppState.snacks.find(Snack => Snack.name == snackName)
        console.log('buying a ', Snack);

        if (AppState.money >= Snack.price) {
            AppState.money -= Snack.price
        } else {
            console.error("not enough money");
        }

    }
}




export const snacksService = new SnacksService()
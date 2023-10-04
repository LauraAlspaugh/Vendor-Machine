import { AppState } from "../AppState.js";


class MoneyService {
    addMoney() {
        AppState.money++
        console.log('here is your money', AppState.money)
    }
}
export const moneyService = new MoneyService()
export class Snack {


    constructor(data) {
        console.log('does this snack class load')
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl


    }
    get Snack() {
        return `
        <div class="col-3 m-2 text-center">
        <div class="border border-dark border-2 shadow">
            <img class="food-image"
        src=${this.imgUrl}>
            <p>${this.name}</p>
            <p>${this.price}</p>
            <button onclick="app.SnacksController.buySnack('${this.name}') class="m-2">Buy</button>
    </div>
        </div>
        `
    }
}

export class Snack {


  constructor(name, price, imgUrl) {
    console.log('does this snack class load')
    this.name = name
    this.price = price
    this.imgUrl = imgUrl


  }
  get Snack() {
    return `
        <div class="col-3 m-2 text-center">
          <div class="border border-dark border-2 shadow">
            <img class="food-image"
              src=${this.imgUrl}>
            <p>${this.name}</p>
            <p>${this.price}</p>
            <button onclick="app.SnacksController.buySnack('${this.name}')" class="m-2" type="button">Buy</button>
          </div>
        </div> 
  `}
}

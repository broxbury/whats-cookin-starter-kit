class Pantry {
  constructor(user) {
    this.pantryId = user.id
    this.pantry = user.pantry
  }

  verifyIngredients() {
    // check this.pantry to recipe.ingredients
    // return missing this.pantry.ingredients
  }

  calculatesCost() {
    // calculate the cost of the missing in this.verifyIngredients()
  }
}
module.exports = Pantry;
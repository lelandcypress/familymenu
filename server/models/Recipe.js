const { Schema, model } = require("mongoose");
const { ingredientSchema } = require("./Ingredients");

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: { type: String },
  ingredients: [ingredientSchema],
  instructions: {
    type: String,
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;

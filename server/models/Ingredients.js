const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
  unitShort: {
    type: String,
  },
});

const Ingredients = model("Ingredients", ingredientSchema);

module.exports = {Ingredients, ingredientSchema};

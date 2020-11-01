const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: String,
  description: String,
  characteristics: String,
  allergies: String,
  category: String,
  price: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  user: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
});

//Añadir preciooooooooooooooooo

dishSchema.set('timestamps', true);

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;

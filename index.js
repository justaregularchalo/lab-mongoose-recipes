const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

const allRecipes = require("./data.json")

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
    
    // return Recipe.create({
      
    //   title:"Arroz con Pato",
    //   level: "UltraPro Chef",
    //   ingredients: ["Arroz", "Pato", "Mantequilla", "Sal"],
    //   cuisine: "Perú",
    //   dishType: "main_course",
    //   image: "https://elcomercio.pe/resizer/cL10ZtGzYV5oJivcJ73D6hBFrfo=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OE55CYBZDFE3TI4GRKRYARCYPE.jpg",
    //   duration: 50,
    //   created: "Migue",
    //   created: "yesterday"
    
    // })
    
    // return Recipe.insertMany(allRecipes)

    // return Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"} ,{duration:100} )
      
    // return Recipe.deleteOne({title: "Carrot Cake"})

    mongoose.connection.close(() =>{
 console.log("Cerraíto");
      
    })
    
    
    
    
  })
  .then(() => {
    // console.log("ready",response)
    
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

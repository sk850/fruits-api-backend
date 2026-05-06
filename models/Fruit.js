// Handles the modelling of the data (Model)

const fruits = require("../fruits.json");

class Fruit {
    constructor(fruit){
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }
    static showAll(){
        return fruits.map(f => new Fruit(f));
    }
    static show(name){
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name)
        if (fruit){
            return new Fruit(fruit);
        }
        else{
            throw "The fruit doesn't exist.";
        }
        // return fruits.filter(f => (new Fruit(f).name === name))
    }

    static create(data){
        const newFruit = data;
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === data.name.toLowerCase())
        if(fruit){
            throw "The fruit already exists"
        }
        else{
            newFruit["id"] = fruits.length + 1;
            fruits.push(newFruit);
            return new Fruit(newFruit);
        }

    }

    update(data){
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if (updatedFruit){
            updatedFruit.name = data.name;
            updatedFruit.family = data.family;
            return new Fruit(updatedFruit)
        }
        else{
            throw "Fruit not found"
        }
    }
    
     destroy(){
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase());
        if (deletedFruit){
            const deletedIndex = fruits.indexOf(deletedFruit);
            fruits.splice(deletedIndex, 1);
        }
        else{
            throw "Fruit does not exist"
        }
    }

}

module.exports = Fruit;
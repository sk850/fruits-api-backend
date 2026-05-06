//Handles the requests (controller)

const Fruit = require("../models/Fruit");

//Reading data
const index = async(req, res) => {
    try{
        const fruits = await Fruit.showAll();
        res.status(200).send(fruits); //.json() convert to json
    }
    catch(err){
        res.status(500).send({error: err})
    }
}

const name = async(req, res) => {
    try{
        const fruitData = await Fruit.show(req.params.name.toLowerCase());
        res.status(200).send(fruitData)
    }
    catch(err){
        res.status(500).send({error: err})
    }
}
// Creating data
const create = async (req, res) => {
    try{
        const newFruit = await Fruit.create(req.body);
        res.status(201).send(newFruit)
    }
    catch(err){
        res.status(409).send({error: err})
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase();
    try{
        const fruit = await Fruit.show(name); //await only appears when calling the model
        const result = await fruit.update(req.body);
        res.status(200).send(result)
    } catch(err){
        res.status(404).send({error: err})
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase();
    try{
        const fruit = await Fruit.show(name);
        const result = await fruit.destroy();
        res.sendStatus(204) 
    }
    catch (err){
        res.status(404).send({error: err})
    }
}

module.exports = {index, name, create, update, destroy}
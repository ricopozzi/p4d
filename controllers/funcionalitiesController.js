const mongoose = require('mongoose')
const title = require('../models/gastoSchema')


const find = async (req, res) =>{
    const find = await title.find(req.body)
    

    res.json(find)
}

const update = async (req, res) =>{
    const update = await title.findByIdAndUpdate(req.params.id, req.body, {new: true} )

    res.json(update)
}

const newOne = async (req, res) =>{
    const response = await title.create(req.body)

    return res.json(response)
    
}
const destroy = async (req, res) =>{
    const  response = await title.findByIdAndDelete(req.params.id)

    res.json(response)
}

// const titlesAndId = async (req, res) =>{
//     const tito = await title.find(req.body)   
    
//     const tity = tito.map(tit => {
//        return `${tit.title},${tit._id},`  
//     });
//     const gambTity = tity.join(' ')
//     const tityId = gambTity.split(',')
//     res.json(tityId)
// }

//      const findByTitle = async (req, res) =>{
//      const productId = 

//      console.log(productId)
// }

module.exports = { newOne, destroy, find, update, /*titlesAndId, findByTitle  */};
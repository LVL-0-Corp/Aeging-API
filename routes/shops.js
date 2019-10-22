var express = require('express');
var router = express.Router();
var Shop = require('../schemas/shop'); 

router.get('/', function(req, res, next){
    res.json({coucou: "shops"})
});

router.post('/add', function(req, res, next){
    const {name, x, y, type} = req.body;
    const newShop = new Shop({name, position: {x, y}, type});
    newShop.save((errors)=>{
        if (errors){
            res.json({errors});
        }else{
            res.json({newShop: 'success.shop.add'})
        }
    });
});

router.get('/get', function(req, res, next){
    const {idShop} = req.body;
    Shop.findById(idShop, (err, result)=>{
        if(err){
            res.json({err});
        }else{
            res.json({result});
        }
    });
});

router.get('/get/name', function(req, res, next){
    const {idShop} = req.body;
    Shop.findById(idShop, (err, result)=>{
        if(err){
            res.json({err});
        }else{
            res.json({result: result.name});
        }
    });
});

module.exports = router;
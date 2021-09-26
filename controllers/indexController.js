const products = require('../data/products.json');
module.exports = {
    index : ( req,res) =>{
        return res.render('index', {
            title : "Pimienta & Sal",
            imageAbout : "principal.jpg",
            products});
    },
    
    detail : (req,res) =>{
        return res.render('detalleMenu' ,{
            product : products.find(product => product.id === +req.params.id)
        });
    }
    
}


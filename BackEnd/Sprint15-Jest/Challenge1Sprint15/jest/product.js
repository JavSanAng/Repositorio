
    let products = [];
    let idOriginal = 0;
    
    function resetProducts() {
        products = [
            {
                id: 0,
                name: 'Gold',
                price: 6000
            },
            {
                id: 1,
                name: 'Silver',
                price: 30000
            },
            {
                id: 2,
                name: 'Adamantium',
                price: 1000000
            }
        ];
        idOriginal = products[products.length - 1].id + 1; 
    }
    
    function addProduct(nameProduct, priceProduct) {
        if (typeof nameProduct === 'undefined' || typeof priceProduct === 'undefined') {
            throw new Error('One of the parameters is not defined');
        }
        if (products.some(product => product.name === nameProduct)) {
            throw new Error('This product exists in the database');
        }
    
        const newProduct = {
            id: idOriginal++,
            name: nameProduct,
            price: priceProduct 
        };
        products.push(newProduct);
        return newProduct;
    }
    
    function removeProduct(productId) {
        const productIndex = products.findIndex(product => product.id === productId);
        if (productIndex === -1) {
            throw new Error('This product does not exist');
        }
        const removedProduct = products.splice(productIndex, 1)[0];
        return removedProduct;
    }
    
    function getProduct(productId) {
        const product = products.find(product => product.id === productId);
        if (!product) {
            throw new Error('This product does not exist');
        }
        return product;
    }
    
    function updateProduct(productId, newName, newPrice) {
        const product = products.find(product => product.id === productId);
        if (!product) {
            throw new Error('This product does not exist');
        }
        if (typeof newName !== 'undefined' && newName !== '') {
            product.name = newName;
        }
        if (typeof newPrice !== 'undefined' && !isNaN(newPrice)) {
            product.price = newPrice;
        }
        return product;
    }
    
    module.exports = { products, addProduct, removeProduct, getProduct, updateProduct, resetProducts };
    

const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');
afterEach(() => {
    resetProducts();
});

// El primer test que vamos a hacer es el de crear un producto. Para ello, vamos a usar la función **addProduct**. 
// Esta función recibe dos parámetros: el nombre del producto y el precio. Si alguno de los dos parámetros no está definido, la función lanzará un error. 
// Si el producto ya existe, la función también lanzará un error.

describe ('addProduct', ()=>{

    test('Should return a product with name and price if a new product is added to the database.', ()=>{
        const expected = {
            name: expect.any(String),
            price: expect.any(Number)
        }
        const result = addProduct('mac',100);
        expect(result).toMatchObject(expected);
    })
    test('Dont have the two parameters',()=>{
        expect(()=> addProduct('ipad')).toThrow('One of the parameters is not defined')
    })
    test('Product shouldn`t already exist in the database', ()=>{
        addProduct('iphone',50);
        expect(()=> addProduct('iphone',50)).toThrow('This product exists')
        });
    })

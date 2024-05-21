const { resetProducts, addProduct, removeProduct, getProduct, updateProduct } = require('./product');

describe('addProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    test('Should return a product with name and price if a new product is added to the database.', () => {
        const expected = {
            id: expect.any(Number),
            name: 'mac',
            price: 100
        };
        const result = addProduct('mac', 100);
        expect(result).toMatchObject(expected);
    });

    test('Should throw an error if one of the parameters is not defined', () => {
        expect(() => addProduct('ipad')).toThrow('One of the parameters is not defined');
        expect(() => addProduct(undefined, 50)).toThrow('One of the parameters is not defined');
    });

    test('Should throw an error if the product already exists in the database', () => {
        addProduct('iphone', 50);
        expect(() => addProduct('iphone', 50)).toThrow('This product exists');
    });
});

describe('removeProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    test('Should return the removed product if it exists in the database', () => {
        const expected = {
            id: 1,
            name: 'Silver',
            price: 30000
        };
        const result = removeProduct(1);
        expect(result).toMatchObject(expected);
    });

    test('Should throw an error if the product does not exist in the database', () => {
        expect(() => removeProduct(10000)).toThrow('This product does not exist');
    });
});

describe('getProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    test('Should return an object with the data of the product', () => {
        const productId = 1;
        const expectedProduct = {
            id: 1,
            name: 'Silver',
            price: 30000
        };

        const product = getProduct(productId);
        expect(product).toEqual(expectedProduct);
    });

    test('Should throw an error if the product does not exist in the database', () => {
        expect(() => getProduct(10000)).toThrow('This product does not exist');
    });
});

describe('updateProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    test('Should return the updated product with new name and price', () => {
        const expected = {
            id: 2,
            name: 'mac',
            price: 100
        };
        const result = updateProduct(2, 'mac', 100);
        expect(result).toMatchObject(expected);
    });

    test('Should throw an error if the product does not exist in the database', () => {
        expect(() => updateProduct(900, 'Shit', 13)).toThrow('This product does not exist');
    });

    test('Should update only the name if price is not defined', () => {
        const expected = {
            id: 1,
            name: 'Sheep',
            price: 30000
        };
        const result = updateProduct(1, 'Sheep');
        expect(result).toMatchObject(expected);
    });

    test('Should update only the price if name is not defined', () => {
        const expected = {
            id: 2,
            name: 'Adamantium',
            price: 14
        };
        const result = updateProduct(2, '', 14);
        expect(result).toMatchObject(expected);
    });
});

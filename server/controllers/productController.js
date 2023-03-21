const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.getAllProducts = catchAsync(async (req, res, next) => {
    let products = await Product.find();

    products = products.map((item) => {
        const imgCover = item.imageCover;
        let temp = item.imageCover;
        const start = temp.indexOf('/d/') + 3;
        const end = temp.indexOf('/view');
        const id = temp.slice(start, end);
        item.imageCover = `https://drive.google.com/uc?export=view&id=${id}`;
        item.images.forEach((img, index) => {
            temp = img;
            const start = temp.indexOf('/d/') + 3;
            const end = temp.indexOf('/view');
            const id = temp.slice(start, end);
            item.images[
                index
            ] = `https://drive.google.com/uc?export=view&id=${id}`;
        });
        return item;
    });
    const data = {
        results: products.length,
        products,
    };

    res.status(200).json({
        status: 'success',
        data,
    });
});

exports.getOneProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.productID);

    const imgCover = product.imageCover;
    let temp = product.imageCover;
    const start = temp.indexOf('/d/') + 3;
    const end = temp.indexOf('/view');
    const id = temp.slice(start, end);
    product.imageCover = `https://drive.google.com/uc?export=view&id=${id}`;
    // IF PRODUCT IS NOT FOUND THEN GIVE ERROR
    if (!product) {
        return next(new AppError('No Product found with given ID', 404));
    }

    const data = {
        product,
    };

    res.status(200).json({
        status: 'success',
        data,
    });
});

exports.createOneProduct = catchAsync(async (req, res, next) => {
    const newProduct = await Product.create(req.body);

    const data = {
        product: newProduct,
    };

    res.status(200).json({
        status: 'success',
        data,
    });
});

exports.updateOneProduct = catchAsync(async (req, res, next) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.productID,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    const data = {
        product: updatedProduct,
    };

    res.status(200).json({
        status: 'success',
        data,
    });
});

exports.deleteOneProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.productID);

    if (!product) {
        return next(new AppError('No Product found with given ID', 404));
    }

    const data = {
        product,
    };

    res.status(200).json({
        status: 'success',
        data,
    });
});

exports.deleteAllProducts = catchAsync(async (req, res, next) => {
    const result = await Product.deleteMany();

    res.status(200).json({
        status: 'success',
        data: result,
    });
});

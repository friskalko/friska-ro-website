const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.getAllProducts = catchAsync(async (req, res, next) => {
    const products = await Product.find();
    const data = {
        results: products.length,
        products,
    };

    setTimeout(
        () =>
            res.status(200).json({
                status: 'success',
                data,
            }),
        1000
    );
});

exports.getOneProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.productID);

    // IF PRODUCT IS NOT FOUND THEN GIVE ERROR
    if (!product) {
        return next(new AppError('No Product found with given ID', 404));
    }

    const data = {
        product,
    };

    setTimeout(
        () =>
            res.status(200).json({
                status: 'success',
                data,
            }),
        1000
    );
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

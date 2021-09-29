const Product = require("../models/product.model");
//const { hashPassword } = require("../helpers/passwordHash");

const getAllProducts = async (request, response) => {
	try {
		const allProducts = await Product.find();
		response.status(200).json({ products: allProducts });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const addProduct = async (request, response) => {
	if (request.body) {
		//request.body.password = await hashPassword(request.body.password);
		const newProduct = new Product(request.body);
		try {
			await newProduct.save();
			response.status(200).json({ id: newProduct.id });
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

const getProducts = async (request, response) => {
	try {
		const { id, title, description, price, images, catergory } =
			await Product.findById(request.userId);
		const products = { id, title, description, price, images, catergory };
		response.status(200).json({ buyer: products });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

module.exports = { getAllProducts, addProduct, getProducts };
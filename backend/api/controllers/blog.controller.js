const getAllBlogs = async (request, response) => {
	try {
		const allBlogs = await getAll();
		response.status(200).json(allBlogs);
	} catch (error) {
		response.status(401).json({ message: error.message });
	}
};

module.exports = { getAllBlogs };

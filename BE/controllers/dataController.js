const cloudinary = require("../cloudinary");
const dataModel = require("../models/Data");
const userModel = require("../models/User");
const convert = require("../converter");

module.exports = {
	// addData function for posts addition to the db

	async addData(req, res) {
		try {
			const imageContent = convert(req.file.originalname, req.file.buffer);
			const image = await cloudinary.uploader.upload(imageContent);
			req.body.image = image.secure_url;
			const newData = new dataModel(req.body);
			const user = await userModel.findOne({where: {id: req.user.id}});
			const uploadedData = await newData.save();
			user.dataValues.posts.push(uploadedData.dataValues.id);
			// const updatedUser = await user.update(
			// 	{posts: user.dataValues.posts},
			// 	{where: {id: req.user.id}},
			// );
			await user.save();
			// console.log("Updated User =", updatedUser);
			res.status(201).send({msg: "Sucessfully Uploaded", data: uploadedData});
		} catch (err) {
			console.log(err);
			res.status(400).send({ErrorMessage: err.message});
		}
	},

	async getAllPublicPosts(req, res) {
		try {
			const allPublicPosts = await dataModel.findAll({
				where: {privacystatus: "public"},
			});
			if (allPublicPosts.length !== 0)
				return res.status(200).send({allPublicPosts: allPublicPosts});
			return res.status(200).send({msg: `There is no public posts avilable`});
		} catch (err) {
			return res.status(200).send({msg: err.message});
		}
	},
};

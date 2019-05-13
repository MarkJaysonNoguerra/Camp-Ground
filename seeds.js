var mongoose = require("mongoose")
var Campground = require("./models/campground")
var Comment = require("./models/comment")

data = [
	{
		name : "Cloud's Rest",
		image : "https://www.photosforclass.com/download/flickr-2770447094",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi libero quibusdam voluptatum illo, asperiores aliquam blanditiis quaerat dignissimos, deleniti ullam quasi ipsam dolorum unde consequatur aliquid alias incidunt, excepturi ipsa."
	},

	{
		name : "Desert Mesa",
		image : "https://www.photosforclass.com/download/flickr-7121865553",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, assumenda, harum. Praesentium repellat quam iusto dolores perferendis eveniet porro maxime, accusantium voluptatem quod! Tenetur voluptatum placeat vel unde laudantium aperiam."
	},
	{
		name : "Canyon Floor",
		image : "https://www.photosforclass.com/download/flickr-1430198323",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum accusantium officia sit et inventore. Quo dolore, quae asperiores, recusandae architecto debitis quaerat corrupti. Asperiores rerum dolorum delectus, expedita dignissimos. Dicta."
	}

]


function seedDB(){
	Campground.remove({}, function(err){
		// if(err){
		// 	console.log(err);
		// } 
		// 	console.log("removed campgrounds")
		// 	//add a few campgrounds
		// 	data.forEach(function(seed){
		// 		Campground.create(seed, function(err, campground){
		// 			if(err){
		// 				console.log(err)
		// 			} else{
		// 				console.log("added a campground")
		// 				//create a comment
		// 				Comment.create({
		// 					text : "This place is great, but I wish there was Internet",
		// 					author : "Homer"
		// 				}, function(err, comment){
		// 					if(err){
		// 						console.log(err)
		// 					} else {
		// 						campground.comments.push(comment);
		// 						campground.save();
		// 						console.log("Created new comments")
								
		// 					}
		// 				})

		// 			}
		// 		})

		// 	});
	});
}

module.exports = seedDB;
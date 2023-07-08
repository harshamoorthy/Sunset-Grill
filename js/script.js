"use strict";
$(document).ready(() => {

	// create an array of the slide images
	let imageCache = [];
	$("#slides img").each((index, img) => {
		const image = new Image();
		image.src = $(img).attr("src");
		image.title = $(img).attr("alt");
		imageCache[index] = image;
	});

	// start slide show
	let imageCounter = 0;
	setInterval(() => {
		$("#caption").fadeOut(1000);
		$("#slide").fadeOut(1000,
			() => {
				imageCounter = (imageCounter + 1) % imageCache.length;
				const nextImage = imageCache[imageCounter];
				$("#slide").attr("src", nextImage.src).fadeIn(1000);
				$("#caption").text(nextImage.title).fadeIn(1000);
			});    // end fadeOut() method
	},
		3000);    // end setInterval() method


	//image swap animation
	// preload images
	$("#image_list a").each((index, img) => {
		const swappedImage = new Image();
		swappedImage.src = $(img).attr("href");
	});

	// set up event handlers for links    
	$("#image_list a").hover(
		evt => {
			// animate thumbnail
			const thumb = evt.currentTarget;
			$(thumb).stop(true).animate({ top: 15 }, "fast");

			// swap image
			const imageURL = $(thumb).attr("href");
			$("#image").attr("src", imageURL);

			//swap caption
			const caption = $(thumb).attr("title");
			$("#caption").text(caption);
		},
		evt => {
			// animate thumbnail
			const thumb = evt.currentTarget;
			$(thumb).stop(true).animate({ top: 0 }, "fast");

		}
	);

	// cancel the default action of the link
	$("#image_list a").click(evt => evt.preventDefault());

	// move focus to first thumbnail
	$("image_list:first-child:first-child").focus();
});
//Javascript array: to store a collection of images
let images = ["Media/slideshow/img01.jpg", 
			  "Media/slideshow/img02.jpg", 
			  "Media/slideshow/img03.jpg" 
			 ];

//Declare a variable to store index
let index = 0;

//Write the code to create automatic slideshow
function autoSlideShow() {
	//Increase the index by 1 only if it's not reaching the last image
	if (index == images.length - 1 ) {
		index = 0;//Move to the first image
	} else {
		index = index + 1;//Increase the index by 1
	}
	
	//Display the current image based on its index to html
	//Change the source of img element on HTML fileCreatedDate
	//Find the image with id="slideShowImage" and change its source
	document.getElementById("slideShowImage").src = images[index];
	
	
	//Wait 1.5second and then call the function to display next image
	setTimeout(autoSlideShow, 7000);//wait 1500ms = 1.5 second
}

//Call to Execute this autoSlideShow() function
autoSlideShow();

 


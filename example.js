try {
    var filter = new WebGLImageFilter();
    var filter2 = new WebGLImageFilter();
}
catch( err ) {
    // Handle browsers that don't support WebGL
    console.error("No WebGL", err);
}



filter.addFilter('detectEdges');
filter2.addFilter('detectEdges2');


var img = document.getElementById("image");
img.onload = (e) => {
    console.log("image loaded", e, img);
    var filteredImage = filter.apply(img);
    console.log("filtered image", filteredImage);
    img.parentNode.appendChild(filteredImage);

    filter.reset();

    var filteredImage2 = filter2.apply(img);
    console.log("filtered image 2", filteredImage2);
    img.parentNode.appendChild(filteredImage2);
}


// The 'filteredImage' is a canvas element. You can draw it on a 2D canvas
// or just add it to your DOM

// Use .reset() to clear the current filter chain. This is faster than creating a new
// WebGLImageFilter instance
// filter.reset();
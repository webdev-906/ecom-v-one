// Image Slider Setup Array
// ---------------------------- // 

let i = 0; // setting intializer to 0 
let images = []; // empty array 
let time = 3000; // time set to 3000 or 3 seconds
images[0] = '../imgs/slide-one.webp'; // image with index 0
images[1] = '../imgs/slide-two.webp'; // image with index 1
images[2] = '../imgs/slide-three.webp'; // image with index 2





// Function name: changeImg
// Params: 0 
// Functionality: Calling our id of slide which is img and referecning src and assignining that to images with i that's set to 0.
// 
// ------------------------------ // 
function changeImg(){
  document.querySelector('#slide').src = images[i];
  // if i = 0 is less than images.length - 1 it's going to increment 
  if (i < images.length - 1){;
    i++
  }else {
    // reseting itself to go through images.length again, if this was changed to 9, the slider would go 9 times for example without any images to reference it
    i = 0; 
  }
  // takes in our function and our variable that holds 3000 or 3 seconds
  setTimeout("changeImg()", time)
}

// function changeImg fires immediately after the whole page is loaded; without this the slider won't work 
window.onload = changeImg; 


// JSON Products 
// assigning our variable to http to new XMLHTTPRequest which is retriving data from either a server or url
let http = new XMLHttpRequest();

// getting our url and setting that to true so it can sucesfully read our products.json file 
// if set to false it won't output our data
http.open('GET', '../products.json', true);

// initializes our request 
http.send();

// after our page has been loaded it will check for if a request has been finished and the response is ready with readyState == 4 and this.status checks to see if the request was sucessful or not 
http.onload = function(){
  if (this.readyState == 4 && this.status == 200 ){
    // assiging our products to a string data type since it's a array holding our objects 
    // this.reponseText will throw a invalidStateError is not a empty string or text
    let products = JSON.parse(this.responseText);

    // setting our output to be a empty string
    let output = "";
    
    // executing a loop to loop over our products and setting output to a template literal that holds html and adding our dot notations to access our products 
    for (let item of products){
      output += `
      <div class="product">
      <img src="${item.image}" alt="${item.image}">
      <p class="title">${item.name}</p>
      <p class="description">${item.description}</p>
      <p class="price">${item.price}</p>
      </div>
      `
    }
    // sending our results to our class products so it can be displayed 
    document.querySelector(".products").innerHTML = output;
  }
}


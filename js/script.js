// Image Slider Setup Array
// ---------------------------- // 
let i = 0;
let images = [];
let time = 3000; 
images[0] = '../imgs/slide-one.webp';
images[1] = '../imgs/slide-two.webp';
images[2] = '../imgs/slide-three.webp';





// Function to change the images 
// ------------------------------ // 
function changeImg(){
  document.querySelector('#slide').src = images[i];

  if (i < images.length - 1){
    i++
  }else {
    i = 0; 
  }
  setTimeout("changeImg()", time)
}

window.onload = changeImg; 


// JSON Products 
// -------------------------------- // 
let http = new XMLHttpRequest();

http.open('GET', '../products.json', true);


http.send();


http.onload = function(){
  if (this.readyState == 4 && this.status == 200 ){
    let products = JSON.parse(this.responseText);

    let output = "";

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
    document.querySelector(".products").innerHTML = output;
  }
}


let img = document.querySelector("#myPic");
let attr  = img.getAttribute("src");
console.log(attr);
img.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nV5HX-sT5M9Magwp8s7VtxN8E54DIXLOo-y-dbG4Rw&s=10");
let getattr = img.getAttribute("src");
console.log(getattr);


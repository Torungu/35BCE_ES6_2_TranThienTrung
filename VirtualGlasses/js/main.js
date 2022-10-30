import { GlassList } from './OOP/GlassList.js'
import { Glass } from './OOP/Glass.js'
let glassList = new GlassList()
let data = glassList.dataGlasses
let glass = new Glass();
glassList.listGlasses(data)

let arrImg = document.querySelectorAll('img');
for (let img of arrImg) {
    let content = '';
    let info = '';
    img.onclick = function () {
        let id = img.getAttribute('id')
        glassList.findGlass(id);
        glass = glassList.glassItem
        content = `<img src=${glass.virtualImg} height=100%  width=100%>`
        info = `
             <div class="card text-white bg-dark">
             <div class="card-body">
                 <h4 class="card-title text-danger">Brand: ${glass.brand}</h4>
                 <h5 class="text-primary">Name: ${glass.name}</h5>
                 <p class="card-text text-success">Price: ${glass.price} $</p>
                 <p class="card-text">${glass.description}</p>
             </div>
         </div> `
        document.querySelector('#avatar').innerHTML = content;
        document.querySelector('#glassesInfo').style.display = 'block';
        document.querySelector('#glassesInfo').innerHTML = info;
    }
}
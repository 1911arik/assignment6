function loadphone(){
 
 
 
 
   fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
   .then(response => response.json())
   .then(data => phonedisplay(data)) 
 
 
}


const phonedisplay = phone =>{





 const b = phone.data




 b.forEach(allphone => 

   {
   

   
   const pdiv = document.getElementById('phones')

   const h3 = document.createElement('h3'); 

   const div = document.createElement('div');


   div.classList.add('phone-box');  

   div.innerText = allphone.brand; 

   div.appendChild(h3);

   const p = document.createElement('p'); 

   p.innerText = allphone.phone_name;

   div.appendChild(p);

 

   var h4 = document.createElement('h4'); 

   h4.innerText = allphone.slug;

   div.appendChild(h4); 



   var h4 = document.createElement('h4'); 

   h4.innerText = allphone.image;

   div.appendChild(h4);


   pdiv.appendChild(div);


});

} 

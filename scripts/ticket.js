

const addBtn =document.getElementsByClassName('add');
let count =0;

for (const btn  of addBtn){
     btn.addEventListener('click', function(e){
      count =count +1;
    
      const seatName =e.target.parentNode.childNodes[1].innerText;

      const selectedContainer = document.getElementById('select-container');
       const li =document.createElement('li')
       const p=document.createElement('p')
       p.innerText =seatName
       
       li.appendChild(p)
       selectedContainer.appendChild(li);

     

      setInnerText('seat-quantity',count)
      setInnerText('ticket-price',seatName)
     })
}


function setInnerText (id , value){
   document.getElementById(id).innerText=value;
 
}

function  btnClick (){
   
   const phSection2 =document.getElementById('ph-poribahan');
   phSection2.classList.remove('hidden');
}
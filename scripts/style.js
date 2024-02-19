function tap(){

showElementById('3rd')
hideElementById('header')
}
 function showElementById(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('hidden');

 }
 function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')   
   }
// const seatPress = document.getElementsByClassName('seat')
// for(const seat of seatPress){
//    seat.addEventListener('click',function(){
//     seat.style.backgroundColor='green'
//    })
// }
// 
const seatPress = document.getElementsByClassName('seat');
let selectedSeats = 0;

for (let i = 0; i < seatPress.length; i++) {
    seatPress[i].addEventListener('click', function() {
        if (selectedSeats < 4 || this.style.backgroundColor === 'green') {
            if (this.style.backgroundColor === 'green') {
                this.style.backgroundColor = '';
                seatPress[i].removeEventListener();
                selectedSeats--;
            


            } else {
                this.style.backgroundColor = 'green' ;
                selectedSeats++;
            }
        }
        const selectionDecrease = document.getElementById('decrease-seat');

        selectionDecrease.innerText=Number(selectionDecrease.innerText)-1; 
    
    
        const seatNotification = document.getElementById('seat-count');
             seatNotification.innerText =Number(seatNotification.innerText)+1;
    
        const totalSum = document.getElementById('count-total');
             totalSum.innerText =Number(totalSum.innerText)+550 ;

             
  

        const priceList = document.getElementById('append-id');
const td = document.createElement('td');
const p1= document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
p1.innerText= seatPress[i].innerText;
p2.innerText= 'Economy';
p3.innerText='550';
td.appendChild(p1);
td.appendChild(p2);
td.appendChild(p3);
priceList.appendChild(td);

    });
}

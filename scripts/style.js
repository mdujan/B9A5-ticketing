function tap() {

    showElementById('3rd')
    hideElementById('header')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

const selectSeat = [];
const seatPress = document.getElementsByClassName('seat');
let selectedSeats = 0;


for (let i = 0; i < seatPress.length; i++) {

    seatPress[i].addEventListener('click', function () {
        if (selectedSeats < 4 || this.style.backgroundColor === 'green') {
            if (this.style.backgroundColor === 'Limegreen') {
                this.style.backgroundColor = '';
                seatPress[i].removeEventListener();
                selectedSeats--;

            } else {
                this.style.backgroundColor = 'LimeGreen';
                selectedSeats++;
            }

            //  seat decreasing from total :---> 
            const selectionDecrease = document.getElementById('decrease-seat');
            selectionDecrease.innerText = Number(selectionDecrease.innerText) - 1;
            // seat notification add :-->
            const seatNotification = document.getElementById('seat-count');
            seatNotification.innerText = Number(seatNotification.innerText) + 1;
            // price total add :-->
            const totalSum = document.getElementById('count-total');
            totalSum.innerText = Number(totalSum.innerText) + 550;
            // grand total--->
            // const grandSum = document.getElementById('grand');
            // totalSum.innerText = Number(grandSum.innerText) + 550;
            const grandSum = document.getElementById('grand');
            grandSum.innerText = totalSum.innerText;
            
            // append after setection:--->
            const priceList = document.getElementById('append-id');
            const td = document.createElement('td');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            p1.innerText = seatPress[i].innerText;
            p2.innerText = 'Economy';
            p3.innerText = '550';
            td.appendChild(p1);
            td.appendChild(p2);
            td.appendChild(p3);
            priceList.appendChild(td);

        }

    });
}

// disable button:-->
const input = document.getElementById('num');
const submitButton = document.getElementById('submit');
console.log(input);
input.addEventListener("keyup", (e) => {
    console.log(input.value);
    if (input.value.length > 0) {
        submitButton.removeAttribute('disabled')
        // submitButton.disabled = false;
    }
});
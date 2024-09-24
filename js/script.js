
let allTotal = 5500;
const donationButton1 = document.getElementById("donationButton1");
donationButton1.addEventListener('click', function () {
    const donationInput1 = parseFloat(document.getElementById('donationInput1').value);
    if (isNaN(donationInput1)) {
        alert('Please give the number for donation!');
        return;
    }
    alert('congratulation you have donate successfully!!');

    const balanceElement1 = document.getElementById("balance1");
    const balance1 = parseFloat(balanceElement1.innerText);
    const total = donationInput1 + balance1;
    balanceElement1.innerText = total.toFixed(2); 
   allTotal=allTotal-donationInput1;
   document.getElementById("allTotal").innerText = allTotal.toFixed(2);
//    click time
var clickTime = new Date();
var formattedTime = clickTime.toLocaleTimeString();
console.log(formattedTime);

   const historyItem = document.createElement('div');
   historyItem.innerHTML=`<div class= "card-side bg-base-100 shadow-xl w-3/5 mx-auto p-5">
    <p class="text-xl font-semibold">${total} Taka is Donated for famine-2024 at Feni, Bangladesh</p> <br>
    <p> Date : ${formattedTime} (Bangladesh Standard Time)</p>
</div>`
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
   
});

const donationButton2 = document.getElementById("donationButton2");
donationButton2.addEventListener('click', function () {
    const donationInput2 = parseFloat(document.getElementById('donationInput2').value);
    if (isNaN(donationInput2)) {
        alert('Please give the number for donation!');
        return;
    }
    alert('congratulation you have donate successfully!!');

    const balanceElement2 = document.getElementById("balance2");
    const balance2 = parseFloat(balanceElement2.innerText);
    const total = donationInput2 + balance2;
    balanceElement2.innerText = total.toFixed(2);

    allTotal=allTotal-donationInput2;
   document.getElementById("allTotal").innerText = allTotal.toFixed(2);

   //    click time
var clickTime = new Date();
var formattedTime = clickTime.toLocaleTimeString();
console.log(formattedTime);


   const historyItem = document.createElement('div');
   historyItem.innerHTML=`<div class= "card-side bg-base-100 shadow-xl w-3/5 mx-auto p-5">
    <p class="text-xl font-semibold">${total} Taka is Donated for famine-2024 at Feni, Bangladesh</p> <br>
    <p> Date : ${formattedTime} (Bangladesh Standard Time)</p>
</div>`
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
});

const donationButton3 = document.getElementById("donationButton3");
donationButton3.addEventListener('click', function () {
    const donationInput3 = parseFloat(document.getElementById('donationInput3').value);
    if (isNaN(donationInput3)) {
        alert('Please give the number for donation!');
        return;
    }
    alert('congratulation you have donate successfully!!');

    const balanceElement3 = document.getElementById("balance3");
    const balance3 = parseFloat(balanceElement3.innerText);
    const total = donationInput3 + balance3;
    balanceElement3.innerText = total.toFixed(2);
    allTotal=allTotal-donationInput3;
   document.getElementById("allTotal").innerText = allTotal.toFixed(2);

   //    click time
var clickTime = new Date();
var formattedTime = clickTime.toLocaleTimeString();
console.log(formattedTime);

   const historyItem = document.createElement('div');
   historyItem.innerHTML=`<div class= "card-side bg-base-100 shadow-xl w-3/5 mx-auto p-5">
    <p class="text-xl font-semibold">${total} Taka is Donated for famine-2024 at Feni, Bangladesh</p> <br>
    <p> Date : ${formattedTime} (Bangladesh Standard Time)</p>
</div>`
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
});




// history tab
const historyBtn =document.getElementById('historyBtn');
const donationBtn =document.getElementById('donationBtn');
historyBtn.addEventListener('click', function () {
    historyBtn.classList.add('bg-lime-500','text-xl','font-semibold');
    donationBtn.classList.remove('bg-lime-500','text-xl','font-semibold');
    document.getElementById('card').classList.add('hidden');
    document.getElementById('history-list').classList.remove('hidden');

})
donationBtn.addEventListener('click',function () {
   donationBtn.classList.add('bg-lime-500','text-xl','font-semibold');
   historyBtn.classList.remove('bg-lime-500','text-xl','font-semibold');
   document.getElementById('card').classList.remove('hidden');
   document.getElementById('history-list').classList.add('hidden');
   
})

// click to switch 
var button = document.getElementById('header');

    button.addEventListener('click', function() {

      window.location.href = 'anotherPage.html'; 
    });
// to home


    
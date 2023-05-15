let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let counter = 1;
let item = "";
let price = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn15 = document.getElementById("btn15");



btn1.addEventListener("click", function(){
	window.location.href = 'btn1.html';
	
});


btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
		
	}
	else {
		tg.MainButton.setText("Товар был добавлен в коризну!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	window.location.href = 'btn3.html';

});

btn4.addEventListener("click", function(){
	window.location.href = 'btn4.html';

});

btn5.addEventListener("click", function(){
	window.location.href = 'btn5.html';

});

btn6.addEventListener("click", function(){
	window.location.href = 'btn6.html';

});
btn7.addEventListener("click", function(){
	window.location.href = 'btn7.html';

});
btn8.addEventListener("click", function(){
	window.location.href = 'btn8.html';

});
btn9.addEventListener("click", function(){
	window.location.href = 'btn9.html';

});btn10.addEventListener("click", function(){
	window.location.href = 'btn10.html';

});btn11.addEventListener("click", function(){
	window.location.href = 'btn11.html';

});
btn12.addEventListener("click", function(){
	window.location.href = 'btn12.html';

});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 


document.getElementById("count").innerHTML = counter + 'ШТ';



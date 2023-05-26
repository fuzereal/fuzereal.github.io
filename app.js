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
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");
let btn15 = document.getElementById("btn15");
let btn16 = document.getElementById("btn16");
let btn17 = document.getElementById("btn17");
let btn18 = document.getElementById("btn18");
let btn19 = document.getElementById("btn19");
let btn20 = document.getElementById("btn20");
let btn21 = document.getElementById("btn21");


btn15.addEventListener("click", function(){
	window.location.href = 'btn15.html';
	
});
btn21.addEventListener("click", function(){
	window.location.href = 'btn21.html';
	
});

btn20.addEventListener("click", function(){
	window.location.href = 'btn20.html';
	
});
btn19.addEventListener("click", function(){
	window.location.href = 'btn19.html';
	
});
btn18.addEventListener("click", function(){
	window.location.href = 'btn18.html';
	
});
btn17.addEventListener("click", function(){
	window.location.href = 'btn17.html';
	
});
btn16.addEventListener("click", function(){
	window.location.href = 'btn16.html';
	
});
btn1.addEventListener("click", function(){
	window.location.href = 'btn1.html';
	
});
btn13.addEventListener("click", function(){
	window.location.href = 'btn13.html';
	
});

btn14.addEventListener("click", function(){
	window.location.href = 'btn14.html';
	
});

btn2.addEventListener("click", function(){
	window.location.href = 'btn2.html';
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



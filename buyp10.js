let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let counter = 1;
let item = "";
let price = "";

let btnbuyp1 = document.getElementById("btnbuyp1");
let btnnazad = document.getElementById("btnnazad");

btnnazad.addEventListener("click", function(){
	window.location.href = 'index.html';
});



btnbuyp1.addEventListener("click", function(){
	var e = document.getElementById("listbox");
	var value = e.value;
	var text = e.options[e.selectedIndex].text;
	if(text == "Выбрать размер")
	{
	
	}
	else
	{
			item = "10";
			price = "5100";
			tg.sendData("5100");
			tg.SendData(item);
	}
});

btn15.addEventListener("click", function(){
	counter += 1;
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



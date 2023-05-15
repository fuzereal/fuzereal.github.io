let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let counter = 1;
let item = "";
let price = "";

let btnbuyp1 = document.getElementById("btnbuyp1");




btnbuyp1.addEventListener("click", function(){
	//var sel = document.getElementById("listbox"); 
  //  var val = sel.options[sel.selectedIndex].text;
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {

			tg.MainButton.setText("Нажмите что бы перейти к оплате");
			item = "Shoes1";
			price = "3500";
			tg.sendData("3500");
		//	tg.MainButton.show();
		
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



/**
 * 
 */

function stampaSoluzione(i, stringa){
	console.log("Esercizio " + i + ", soluzione: " + stringa);
}

function spazio(){
	console.log("-----------------------------");
}

function somma(a,b){
	return a+b;
}

function raddoppio(a){
	return a*2;
}

function lunghezza(s){
	return s.length;
}

function posizione(s, c){
	return s.indexOf(c);
}

function massimo(a,b){
	if(a>b) return a;
	if(b>a) return b;
	return -1;
}

function contrario(s){
	return s.split("").reverse().join("");
}

function arraySomma(a){
	let somma = 0;
	for(elem in a){
		somma += Number(elem);
	}
	return somma;
}



 function esercizio1(){
	 let a = 10;
	 let b = 22;
	 stampaSoluzione(1, a + "+" + b + "=" + (a+b));
	 a = 4;
	 b = 8;
	 stampaSoluzione(1, a + "+" + b + "=" + (a+b));
	 console.log("-----------------------------");
 }
 
 function esercizio2(){
	 let a = 10;
	 let b = 22;
	 stampaSoluzione(2, a + "-" + b + "=" + (a-b));
	 a = 4;
	 b = 8;
	 stampaSoluzione(2, a + "-" + b + "=" + (a-b));
	 console.log("-----------------------------");
 }
 
 function esercizio3(){
	 let a = 10;
	 let b = 22;
	 stampaSoluzione(3, a + "*" + b + "=" + (a*b));
	 a = 4;
	 b = 8;
	 stampaSoluzione(3, a + "*" + b + "=" + (a*b));
	 console.log("-----------------------------");
 }
 
 function esercizio4(){
	 let a = 10;
	 let b = 22;
	 stampaSoluzione(4, a + "/" + b + "=" + (a/b));
	 a = 4;
	 b = 8;
	 stampaSoluzione(4, a + "/" + b + "=" + (a/b));
	 console.log("-----------------------------");
 }
 
 function esercizio5(){
	 let a = 45;
	 let b = 22;
	 stampaSoluzione(5, a + " % " + b + "=" + (a%b));
	 a = 58;
	 b = 8;
	 stampaSoluzione(5, a + " % " + b + "=" + (a%b));
	 console.log("-----------------------------");
 }
 
 function esercizio6(){
	 const array = [1,2,3,4,5,6,7,8,9,10];
	 let avg = 0;
	 let stringa = "avg([";
	 
	 for(elem in array){
		 avg = Number(avg) + Number(elem);
	 }
	 avg = avg / array.length;
	 stringa += array + "]) = " + avg;
	 
	 stampaSoluzione(6, stringa);
	 console.log("-----------------------------");
 }
 
 function esercizio7(){
	 let a = 20;
	 
	 if(a%2 == 0){
		 stampaSoluzione(7, a + " è pari");
	 }else{
		 stampaSoluzione(7, a + " è dispari");
	 }
	 
	 a = 13;
	 
	 if(a%2 == 0){
		 stampaSoluzione(7, a + " è pari");
	 }else{
		 stampaSoluzione(7, a + " è dispari");
	 }
	 console.log("-----------------------------");
 }
 
 function esercizio8(){
	 let a = 12;
	 let b = 9;
	 
	 if(a<b){
		 stampaSoluzione(8, a + "<" + b);
	 }
	 if(a==b){
		 stampaSoluzione(8, a + "==" + b);
	 }
	 if(a>b){
		 stampaSoluzione(8, a + ">" + b);
	 }
	 
	 a = 8;
	 b = 8;
	 
	 if(a<b){
		 stampaSoluzione(8, a + "<" + b);
	 }
	 if(a==b){
		 stampaSoluzione(8, a + "==" + b);
	 }
	 if(a>b){
		 stampaSoluzione(8, a + ">" + b);
	 }
	 
	 spazio();
 }
 
 function esercizio9(){
	 let stringa = "";
	 if(stringa == ""){
		 stampaSoluzione(9, "La stringa   è vuota.");
	 }else{
		 stampaSoluzione(9, "La stringa " + stringa + " è piena.");
	 }
	 
	 stringa = "provaStringaPiena";
	 if(stringa == ""){
		 stampaSoluzione(9, "La stringa   è vuota.");
	 }else{
		 stampaSoluzione(9, "La stringa " + stringa + " è piena.");
	 }
	 
	 spazio();
 }
 
 function esercizio10(){
	 let stringa = "Hello World!";
	 let sottostringa = "World";
	 let sottostringa2 = "?";
	 
	 if(stringa.includes(sottostringa)){
		 stampaSoluzione(10, "La stringa " + stringa + " include la sottostringa " + sottostringa);
	 }else{
		 stampaSoluzione(10, "La stringa " + stringa + " non include la sottostringa " + sottostringa);
	 }
	 
	 if(stringa.includes(sottostringa2)){
		 stampaSoluzione(10, "La stringa " + stringa + " include la sottostringa " + sottostringa2);
	 }else{
		 stampaSoluzione(10, "La stringa " + stringa + " non include la sottostringa " + sottostringa2);
	 }
	 
	 spazio();
 }
 
 function esercizio11(){
	 let lettera = "b";
	 let lettera2 = "e";
	 
	 if(lettera == "a" || lettera == "e" || lettera == "i" || lettera == "o" || lettera == "u"){
		 stampaSoluzione(11, "La lettera " + lettera + " è una vocale.");
	 }else{
		 stampaSoluzione(11, "La lettera " + lettera + " è una consonante.");
	 }
	 
	 if(lettera2 == "a" || lettera2 == "e" || lettera2 == "i" || lettera2 == "o" || lettera2 == "u"){
		 stampaSoluzione(11, "La lettera " + lettera2 + " è una vocale.");
	 }else{
		 stampaSoluzione(11, "La lettera " + lettera2 + " è una consonante.");
	 }
	 
	 spazio();
 }
 
 function esercizio12(){
	 let numero = 15;
	 let numero2 = 18;
	 
	 if(numero%5 == 0 && numero%3 == 0){
		 stampaSoluzione(12, "Il numero " + numero + " è divisibile sia per 5 che per 3.");
	 }else{
		 if(numero%5 == 0){
			 stampaSoluzione(12, "Il numero " + numero + " è divisibile solo per 5.");
		 }
		 if(numero%3 == 0){
			 stampaSoluzione(12, "Il numero " + numero + " è divisibile solo per 3.");
		 }
	 }
	 
	 if(numero2%5 == 0 && numero2%3 == 0){
		 stampaSoluzione(12, "Il numero " + numero2 + " è divisibile sia per 5 che per 3.");
	 }else{
		 if(numero2%5 == 0){
			 stampaSoluzione(12, "Il numero " + numero2 + " è divisibile solo per 5.");
		 }
		 if(numero2%3 == 0){
			 stampaSoluzione(12, "Il numero " + numero2 + " è divisibile solo per 3.");
		 }
	 }
 }
 
 function esercizio13(){
	 const array = [1,2,3,4,5,6,7,8,9,10];
	 
	 stampaSoluzione(13, array);
	 spazio();
 }
 
 function trovaElem(elem){
	 return elem == 5;
 } 
 
 function esercizio14(){
	 const array = [1,2,3,4,5,6,7,8,9,10];
	 
	 //TODO formattare meglio l'output
	 
	 if(array.find(trovaElem) == undefined){
		 stampaSoluzione(14, "L'elemento non ci sta.");
	 }else{
		 stampaSoluzione(14, "L'elemento è presente.");
	 }
	 spazio();
 }
 
 function esercizio15(){
	 const array1 = ["Lunedì", "Martedì", "Mercoledì"];
	 const array2 = ["Giovedì", "Venerdì"];
	 const array3 = array1.concat(array2);
	 
	 stampaSoluzione(15, "[" + array1 + "] + [" + array2 + "] = [" + array3 + "]");
	 spazio();
 }
 
 function esercizio16(){
	 const array1 = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];
	 const array2 = array1.slice(2,4);
	 
	 stampaSoluzione(16, "Da l'array [" + array1 + "] estraggo il sotto array [" + array2 + "]");
	 spazio();
 }
 
 function esercizio17(){
	 const array = [1,2,3,4,5,6,7,8,9];
	 const array2 = array.filter(elem => elem>5);
	 
	 stampaSoluzione(17, "Nell'array [" + array + "] il numero di elementi maggiori di 5 è " + array2.length);
	 spazio();
 }
 
 
 
 function esercizio18(){
	 const car = {type:"Fiat", model:"500", color:"white"};
	 stampaSoluzione(18, "Tipo: " + car.type + ", Model: " + car.model + ", Colore: " + car.color);
	 spazio();
 }
 
  function esercizio19(){
	 const car = {type:"Fiat", model:"500", color:"white"};
	 stampaSoluzione(19,"Model: " + car.model);
	 spazio();
 }
 
 function esercizio20(){
	 const car = {type:"Fiat", model:"500", color:"white"};
	 stampaSoluzione(20, "Tipo: " + car.type + ", Model: " + car.model + ", Colore: " + car.color);
	 car.model = "Punto";
	 console.log("Tipo: " + car.type + ", Model: " + car.model + ", Colore: " + car.color);
	 spazio();
 }
 
 function esercizio21(){
	 stampaSoluzione(21, "La somma di 10 e 10 è " + somma(10,10));
	 spazio();
 }
 
 function esercizio22(){
	 stampaSoluzione(22, "Il raddoppio del numero 30 è " + raddoppio(30));
	 spazio();
 }
 
 function esercizio23(){
	 stampaSoluzione(22, "La lunghezza della stringa Hello World! è " + lunghezza("Hello World!"));
	 spazio();
 }
 
 function esercizio24(){
	 stampaSoluzione(22, "La lettera e, nella stringa Hello World! si trova nella posizione " + posizione("Hello World!", "e"));
	 spazio();
 }
 
 function esercizio25(){
	 stampaSoluzione(22, "Tra 4 e 5 il massimo è " + massimo(4,5));
	 spazio();
 }
 
 function esercizio26(){
	 stampaSoluzione(22, "Hello World! al contrario è " + contrario("Hello World!"));
	 spazio();
 }
 
 function esercizio27(){
	 stampaSoluzione(22, "La somma dell'array [1,2,3,4,5,6,7,8,9] è " + arraySomma([1,2,3,4,5,6,7,8,9]));
	 spazio();
 }
 
 
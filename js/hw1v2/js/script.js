//1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
let question = prompt('what day is it today?');
alert ('2day is - ' + question);



//2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
let you = prompt('Who r u?(Master:Guest:Leave empty)');
you == 'Master'?
	alert('Good ev.')
:
you == 'Guest'?
	 alert('Hi.')
:
you == ''?
	 alert('Poznakomims9?')
:alert('');	 



//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
let name =prompt('What is ofc name ov JavaScript?');
if (name=='EcmaScript') {
	alert('True!');
}
else{
	alert('Such a noob: -EcmaScript');
}



//444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
let person = prompt('Who r u?');
if (person=='Admin') {
	let pass= prompt('Password?');
	if (pass=='BlackMamba') {
		alert('Wellcome.');
	}

	else  	
		if (pass== null) {
			alert('Access denied.');
		}

	else
		alert('Wrong password.');
}
else 
	if (person== null) {
		alert('Access denied.');
	}
else
	alert('I dunno u.');

//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
var arr=[];
arr[0]=0;
arr[1]=1;
console.log(arr[0]);
console.log(arr[1]);
for(i=2; i<15; i++){
	arr[i]=arr[i-1]+arr[i-2];
	console.log(arr[i]);
}
//66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
var x;
var y;
var z=1;
while(z>0){
	x = Math.floor(Math.random() * (21 - 10)) + 10
	y = Math.floor(Math.random() * (21 - 10)) + 10	
	let q = prompt(x+'+'+y+'?');
	if(q == (x+y)){alert('Access granted');break;}}





/*var arr=[];
var i;
for (i=0;i<5;i++){
	var a = prompt('Score?');
	if(a<60){break;}
	else{
		alert('Passed.');
	}
}
while(true){
	var first = prompt('first?');
	if (first==='all') break;
	var second = prompt('second?');
	if (second==='all') break;
	var operator = prompt('operator?');
	if (operator==='all') break;
	switch(operator){
		case'+':alert(+first + +second);break;
		case'-':alert(+first - +second);break;
		case'*':alert(+first * +second);break;
		case'/':alert(+first / +second);break;
		default:alert('not an operator.');
	}
}while(1);
*/

var arr=[];

while(arr.length <5){
	var firm = prompt('firm?');
	var model = prompt('morel?');
	var ed= parseFloat(prompt('ed?'));
	 arr.push({firm:firm,model:model,ed:ed;});
}
var filtered = arr.filter(function(item){
	return item.ed>2;
}):

console.log(filtered);

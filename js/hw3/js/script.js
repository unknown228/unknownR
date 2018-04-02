//1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
/*var n;

 do 
 	{
 		n = prompt('N!- what N do u want to use?');
 		if(n<0){alert('incorrect number');}
 	}while(n<0);
 		 
function factorial(n){
	if (n==0) return 1;
	return n * factorial(n-1);
}
alert(factorial(n));*/
//2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
var arr = [5,-2,1,-3,-4];
var n;


/*do{
	n = prompt('Введите длинну массива:');
	if(n<=0){
		alert('Массив не может быть меньше или равным нулю.')
	}
}while(n<0);
	

for(var i=0; i<n; i++){
	arr[i]=prompt('Введите значение:');
}
alert('Ваш массив: '+arr.join(', '));
*/


function MinimalSum(arr){
	var Sum;
	var MinSum;
	var MinSubSum;
	for  ( var i=0; i<arr.length; i++){
		Sum=0;
		if (MinSubSum<MinSum) {MinSum = MinSubSum;}
		if (arr[i]<MinSum) {MinSum = arr[i];}

		for  ( var j=i; j<arr.length; j++){
			Sum=Sum+arr[j];
			if (Sum<MinSubSum) {MinSubSum=Sum;}
		}
	}
	return MinSum;
}
alert(MinimalSum(arr));






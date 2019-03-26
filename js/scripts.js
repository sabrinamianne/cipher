
var string=prompt("What is yout favorite color? ");
var jsF=function (string){
    return string.charAt(0).toUpperCase ()+string.slice(1,-1)+string.slice(-1).toUpperCase();
};
alert(jsF(string))
var str=prompt("What is your current job?");
var func2=function(str){
	var firstLetter=str.charAt(0);
  var middleLetter=str.slice(1,-1);
  var lastLetter=str.slice(-1);
  return lastLetter+middleLetter+firstLetter;
};
alert(func2(str))

var str1=prompt("What is your hobby?");
var func3=function(str1){
	alert(jsF(str1)); 
  alert(func2(str1));
};

alert(func3(str1))

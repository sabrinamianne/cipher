
var string=prompt("What is yout favorite color? ");
var jsF=function (string){
    return string.charAt(0).toUpperCase ()+string.slice(-1).toUpperCase();
};
alert(jsF(string))

var str=prompt("What is your current job?");

var func2=function(str){
  var firstLetter=str.charAt(0);
  var lastLetter=str.slice(-1);
  return lastLetter+firstLetter;
};
alert(func2(str))

var str1=prompt("What is your hobby?");

var func3=function(str1){
  alert(jsF(str1))
  var str=jsF(str1); 
  alert(func2(str));
  var result= func2(str);
  alert(str1.concat(result))
};
alert(func3(str1));

var func4=function (string){
  var nb=Math.round(string.length);
  var nb1=nb/2;
  var le=string.charAt(nb1);
  var str=jsF(string); 
  var result= func2(str);
  return le+string+result
};
alert(func4(string));

var rev=function (string){
  var strR=func4(string);
  return strR.split("").reverse().join("")
}
alert(rev(string))

jQuery(document).ready(function() {
jQuery("#lefth1").click(function() {
  alert("Original sentence");
 });

jQuery("#righth1").click(function() {
   alert(" <h1>Original sentence</h1>");
});

});

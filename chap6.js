
document.write("the value of a is:2" + "</br>")
document.write("the value of b is:1" + "</br>")

var a=2
var b=1
var Result=(--a - --b + ++b + b-- )
console.log(Result)
document.write("RESULTS" + "<br>" )
document.write("the value of --a - --b + ++b + b--" + "</br>")
document.write("the answer is: 3" + "</br>")


var a=2
var b=1
var Result=(--a - --b + ++b )
console.log(Result)
document.write("the value of --a - --b + ++b" + "</br>")
document.write("the answer is: 2" + "</br>")

var a=2
var b=1
var Result=(--a + ++b - ++a + b-- )
console.log(Result)
document.write("the value of --a + ++b - ++a - b--" + "</br>")
document.write("the answer is: 3" + "</br>")

var a=2
var b=1
var Result=(++a - --b - ++a - b++ )
console.log(Result)
document.write(" the value of  ++a - --b - ++a - b++" + "</br>")
document.write("the answer is: 3" + "</br>")

var a=2
var b=1
var Result=(++a + --b - a-- )
console.log(Result)
document.write(" ++a + --b - a--" + "</br>")
document.write("the answer is: 3" + "</br>")

var math = +prompt("enter your maths marks " );
var urdu = +prompt("enter your urdu marks " );
var eng = +prompt("enter your eng marks " );
var totalmarks= 300
var obtained= math + urdu + eng;
var pe=(obtained/totalmarks)*100;
document.write("<h1> marks sheet </h1>" + "</br>");
document.write(" <br> obtained marks=" + obtained);
document.write(" <br> total marks of subj=" + totalmarks);
document.write(" <br> percentage=" + pe);




















// document.write("math marks" + math + "</br>");
// document.write("urdu marks" + urdu + "</br>");
// document.write("eng marks" + eng + "</br>");
// document.write("total marks" + totalmarks + "</br>");
// document.write("obtained marks" + obtainedmarks   + "</br>");
// document.write("percentage" + (obtainedmarks + "/" + totalmarks) + "*100"   + "</br>");

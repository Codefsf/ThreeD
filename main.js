'user strict';

var a = 1;
console.log(typeof(a));

var b = "b";
console.log(typeof(b));

var c = {
    name: "c",
};
console.log(typeof(c));

var d = true;
console.log(typeof(d));

var e;
console.log(typeof(e));

var f = null;
console.log(typeof(f));

//how different with array and object?
let arr = ["a", "b", "c"];
console.log(typeof(arr));


for (var i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

arr.push("d");

var num = 0;
while(true)
{
    console.log("while" + num++);
}


var a=10;
var a=20;
a=30
console.log(a);

let b=10;
// let a=20; not possible
b=10; //possible
console.log(b);

const c=40;
// const c=50; not possible

// c=90; not possible
console.group(c)


// global scope

var d =10;
{
    console.log(d);
}
console.log(d);

// block sope
//1 with const
{
    const e=10;
    console.log(e);
}
// console.log(e); not possible

//2 with let
{
    let f=80;
    console.log(f);
}
// console.log(f); not possible

// hoisting 
//1

var x = 10;
function names(){
    console.log("good afternoon")
}
names();
console.log(x);

//2
names();
console.log(x);
var x = 10;
function names(){
    console.log("good afternoon")
}
// temporal dead zone let , const

y=10;
console.log(y);
var y;
// console.log(z) not possible before intilization in let and const
let z=20

//2
console.log(p);
console.log(q);
var p=10;
let q=10;

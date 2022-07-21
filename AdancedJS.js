var obj = {
    nums: 2
}

var obj2 = {
    nums: 5
}

var addToThis = function(a){
    return this.nums + a;
};

console.log(addToThis.call(obj, 3));

var addhere = function(b, c, d){
    return this.nums + b + c + d;
}

var arr = [3,5,6];
console.log(addhere.apply(obj, arr));

var bound = addhere.bind(obj);
console.log(bound(1,2,3));

var student = {
    age: 20
}
var print = function() {
    return this.age;
}


var printage = print.bind(student);
console.log(printage());

let multiply = function(x, y) {
    console.log(x * y);
}

let multiplyy = function (x) {
    return function (y) {
        console.log(x, y);
    }
}

let multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(5);

let multiplyByThree = multiply(this, 3);

let multiplyyByTwo = multiplyy(2);
multiplyyByTwo(3);

let multiplyyBy3 = multiplyy(3);
multiplyyBy3(10);
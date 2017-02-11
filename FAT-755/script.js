/*Classes.1:
Point

Write a class called Point, which represents a point in two-dimensional space. A point has x and y properties, given as arguments to its constructor.

It also has a single method plus, which takes another point and returns the sum of the two points, that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties.*/

// class Point {
//   constructor(x, y){
//    this.x = x;
//    this.y = y;
//   }

//   plus(obj){
// 	return `Point{x:${this.x + obj.x}, y:${this.y+obj.y}}`;
//   }
// }
// console.log(new Point(1, 2).plus(new Point(2, 1)))
// → Point{x: 3, y: 3}

////////////////////////////////////////////////////////////////


/*Getters

This is the way the solution to the previous exercise might look.

The way the verb property is set per instance rather than per class is kind of awkward. Refactor the code to use a getter (get verb() { ... }) instead of an instance property. */

// class SpeakerMe{
// 	constructor(name, verb){
// 		this.name = name;
// 		this.verb = verb || "says";
// 	}
// 	speak (text) {
// 		console.log(`${this.name} ${this.verb} '${text}'`)
// 	}
// }

// class ShouterMe extends SpeakerMe {
// 	constructor(name, verb = "shouts"){
// 		super(name, verb);
// 	}

// 	// speak(text){
//  // 		console.log(`${this.name} ${this.verb} '${text.toUpperCase()}'`);
// 	// }
// 	speak(text){
// 		super.speak(text.toUpperCase());
// 	}
// }

// new SpeakerMe("Dr. Loudmouth").speak('hello theres');
// →Dr. Loudmouth says 'hello there'
// new ShouterMe("Dr. Loudmouth").speak('hello there');
// → Dr. Loudmouth shouts 'HELLO THERE'


////////////////////////////////////////////////////////////////

// 	class Speaker {
// 		constructor(name, verb) {
// 			this.name = name
// 			this.verb = verb || "says"
// 		}

// 		speak(text) {
// 			console.log(this.name + " " + this.verb + " '" + text + "'")
// 		}

// 		get () {
// 			console.log(this.verb);
// 		}
// 	}

// class Shouter extends Speaker {
//   constructor(name) {
// 	super(name, "shouts");
//   }
//   speak(text) {
// 	super.speak(text.toUpperCase())
//   }
// }

// new Speaker("Dr. Loudmouth", 'Iglesias').get();
// new Shouter("Dr. Loudmouth").speak("hello there");

/*Fake point

Use a single object literal to create an object that is indistinguishable from a Point instance, without calling the Point constructor.*/

// class Point {
//   constructor(x, y) {
//     this.x = x, this.y = y
//   }
//   add(other) {
//     return new Point(this.x + other.x, this.y + other.y)
//   }
// }

// var fakePoint = new Point();
// console.log(fakePoint instanceof Point)


///////////////////////////////////////////////////////////////////

/*Configurable property

Fill in the startNode function using a single object literal. The function should return an object with type and value properties containing the value of the arguments by those names, and a third property, named by the sourceProperty option, set to the value of the sourceValue option.*/



function startNode(type, value, options) {
	let {type: type, value: value, options} = a;
  return a;
}

// console.log(startNode("Identifier", "foo", {
//   sourceProperty: "src",
//   sourceValue: "bar.js"
// }))
// → {type: "Identifier",
//    value: "foo",
//    src: "bar.js"}


///////////////////////////////////////////////////////////////////

/*Singleton

Add a get method to the ids object, which returns the next id and increments its next counter. Use the short method syntax.*/

// var ids = {
//   next: 0,
//   get () {
//   	return ids.next += 1;
//   }
// }

// console.log(ids.get())
// console.log(ids.get())
// console.log(ids.get())


///////////////////////////////////////////////////////////////////
/*Closing over scope

This is a typical mistake to make in JavaScript. We create a number of functions in a loop, and refer to an outside variable from these functions. All of them will end up referring to the same variable, which ends up being incremented to 10. Thus, callbacks[2] does not log 2. It logs 10, as do all functions in the array.

Do you know the solution for such situations in ES5? Does ES6 provide a cleaner solution?*/

// var callbacks = []
// for (let i = 0; i < 10; i++) {
//   callbacks.push(function() {
//   	console.log(i)
//   	 })
// }
// callbacks[2]();




///////////////////////////////////////////////////////////////////

/*Block scope.2:
Constant non-constance*/

// const account = {
//   username: "marijn",
//   password: "xyzzy"
// }

// account.password = "s3cret" // (*much* more secure)

// console.log(account.password)

/*Изменения возможны - т.к в данном случае - account является ссылкой на обьект - а не самим обьектом. когда мы меняем password - мы изменяем свойство обьекта а не значение самого обьекта.*/

///////////////////////////////////////////////////////////////////


/*Block scope.3:
Hoist the class

This code produces an error. So apparently, unlike functions, classes are not hoisted to the top of their scope. (They are block-scoped.)

What could be the reason for this?*/

// let s = new Something()

// class Something {}

/*не рпоисходит глобального засорения пространства имен.
Причина этого ограничения в том, что классы могут быть наследниками. Это поддерживается с помощью выражения «extends», значение которого может быть произвольным. Это выражение должно быть установлено в определенном месте, которое не может быть поднято.*/

///////////////////////////////////////////////////////////////////

/*Arrow functions.1:
Accounting

Write an expression using higher-order array methods (say, filter and reduce) to compute the total value of the machines in the inventory array.*/



const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
];
// let totalMachineValue = inventory.filter(valueCost);


// function valueCost(inventory){
// 	if(inventory.type  === "machine"){
// 		console.log(inventory.value);
// 			return inventory.value;
// 	}
// };


/*.reduce(function(sum, current) {
  return sum + current;
});*/

// console.log(totalMachineValue);


///////////////////////////////////////////////////////////////////

/*Arrow functions.2:
Sorted array

The code for this exercise implements a wrapper for working with sorted arrays. Its constructor takes a comparison function that compares two elements and returns a number, negative if the first is less than the second, zero when they are equal, and positive otherwise (similar to what the sort method on arrays expects).

Rewrite the code to use an ES6 class. Then, rewrite the loop to use the ES6 array method findIndex, which is like indexOf, but takes a function instead of an element as argument, and returns the index of the first element for which that function returns true (or returns -1 if no such element was found). For example [1, 2, 3].findIndex(x => x > 1) yields 1. Use arrow functions for all function expressions.*/



function SortedArray(compare) {
  this.compare = compare
  this.content = []
}
SortedArray.prototype.findPos = function(elt) {
  for (var i = 0; i < this.content.length; i++) {
    if (this.compare(elt, this.content[i]) < 0) break
  }
  return i
}
SortedArray.prototype.insert = function(elt) {
  this.content.splice(this.findPos(elt), 0, elt)
}

var sorted = new SortedArray(function(a, b) { return a - b })
sorted.insert(5)
sorted.insert(1)
sorted.insert(2)
sorted.insert(4)
sorted.insert(3)
// console.log("array:", sorted.content)



//////////////////////////////////////////////////////

/*Arrow functions.3:
Precedence

Where does an arrow function end? At a closing bracket or semicolon, of course. But does a comma denote the end? Is the body of the function in this example x + y, 0, or just x + y?

Is there anything else that will end an arrow function body? Experiment.*/

// console.log([1, 2, 3].reduce((x, y) => x + y, 0))

function lastIndexOf(arr, elt, start) {
  for (let i = start - 1; i >= 0; i--)
    if (arr[i] === elt) return i
  return -1
}

console.log(lastIndexOf([1, 2, 1, 2], 2))
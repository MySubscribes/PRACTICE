
// function Student (name, age){
// 	let self = this;
// 	this.name = name;
// 	this.age = age;
// 	this.sayHello = function () {
// 		alert('hello from ' + this.name)
// 	}
// 	this.getAge = function(){
// 		alert(calc())
// 	}
// 	var CONST = 80;
// 	let calc = function(){
// 		return CONST - self.age;
// 	}
// }

// let student2 = new Student();
// student2.name = 'Genry';
// student2.sayHello();

// let student2 = new Student('alex', 35);
// // student2.sayHello();
// // student2.getAge();
// // console.log(student2.calc());

// function HTMLElem (id, tag, content, bg) {
// 	let self = this;
// 	this.bg = bg;
// 	this.id = id;
// 	this.tag = tag;
// 	this.content = content;
// 	let elem = document.createElement(self.tag);

// // console.log(this.id);
// 	let search = function() {
// 		let newTag = document.getElementById(self.id);
// 		elem.innerHTML = self.content;
// 		elem.style.background = self.bg;
// 		newTag.appendChild(elem)

// 	}

// 	this.show = function(){
// 		search();
// 	}
// 	this.remove = function(){
// 		let search2 = document.getElementById(this.id);
// 		search2.removeChild(elem);
// 	}
// }


// function add (options) {

// 	this.context = options.context;
// 	this.position = options.position;
// 	let elem = document.createElement('div');
// 		elem.innerHTML = this.context;
// 		elem.classList.add('popup');
// 	addPosition(this.position);

// 	this.createContext = function() {
// 		let newContext = document.getElementById('one');
// 			newContext.addEventListener('click', fun);
// 			function fun() {
// 				newContext.appendChild(elem);
// 				toggle();
// 			}
// 	}

// 	function toggle() {
// 		elem.classList.toggle('active');
// 	}

// 	function addPosition(position) {
// 		switch(position){
// 			case 'left':
// 				elem.style.left = '-100px';
// 				elem.style.top = '5px';
// 				break;
// 			case 'right':
// 				elem.style.right = '-100px';
// 				elem.style.top = '5px';
// 				break;
// 			case 'top':
// 				elem.style.left = '0px';
// 				elem.style.top = '-50px';
// 				break;
// 			case 'bottom':
// 				elem.style.left = '0px';
// 				elem.style.bottom = '-50px';
// 				break;
// 		}
// 	}
// }

// a = new add ({
// 	context: 'Привет',
// 	position: 'right'
// });

// a.createContext();

//
// let user = {
// 	name: 'Герыч',
// 	say: function(){console.log(this.name)}
// }

// function fun(){
// 	console.log(this.name)
// }

// let user1 = {
// 	name:'Герыч'
// }
// let user2 = {
// 	name:'Алла'
// }
// let me = {
// 	name: "Рома",
// 	age: 25,
// 	getage: function(){
// 		console.log(this.age)
// 	}
// }
// user1.sayName = fun;
// user2.sayName = fun;
// me.sayName = fun;

// user1.sayName();
// user2.sayName();
// me.sayName();
// me.getage();

// var name = "";

// var user = {
//   name: "Василий",

//   export: function() {
//     return {
//       value: this
//     };
//   }

// };

// alert( user.export().value)

// let calculator = {
//  	 read: function(){
// 	 	calculator.firstNumber = +prompt('введите первое значение', 0);
// 	 	calculator.secondNumber = +prompt('введите второе значение', 0)
// 	 },
// 	 sum: function(){
// 	 	return this.firstNumber + this.secondNumber;
// 	 },
// 	 mul: function(){
// 	 	return this.firstNumber * this.secondNumber;
// 	 }

// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
// 	step:0,
// 	up: function(){
// 		this.step++;
// 		return this

// 	},
// 	down: function(){
// 		ladder.step--
// 	},
// 	showStep: function(){
// 		// this.ste
// 		console.log(ladder.step)
// 		return this
// 	}
// }

// ladder.up().up().showStep();

// ladder.;

// function Neo(){
// 	alert("Избранный рожден. В матрице, его имя Neo");
// 	Neo = function(){
// 	alert("В матрице, может быть только один избранный");
// 	}
// }

// var humanNeo = new Neo();
// var Agent1 = new Neo();
// var Agent2 = new Neo();
// var AgentSmith = new Neo();

// Обьекты

// let day = {
// 	day: 5,
// 	toString: function(){
// 		return this.day;
// 	},
// 	valueOf: function(){
// 		return this.day
// 	}


// }
// alert(+day);

// let cat = {
// 	catName: 'Gerka',
// 	toString: function(){
// 		return this.catName;
// 	}

// };

// alert(cat);
// alert( new Date );

// function Animal(name){
// 	this.name = name;
// 	this.canWalc = function(){
// 		console.log('he can walk')
// 	}
// };

// let cat = new Animal('harik');
// cat.canWalc();
// console.log(cat.name);

// function Calculator() {

// 	// console.log(secondNumber);
// 	this.read = function () {
// 		this.firstNumber = +prompt('firstNumber', 0);
// 		this.secondNumber = +prompt('secondNumber', 0);
// 	};

// 	this.sum = function () {
// 		return this.firstNumber + this.secondNumber;
// 	};

// 	this.mul = function () {
// 		return this.firstNumber * this.secondNumber;
// 	};
// };



// let calculator = new Calculator();
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// function User(firstName, lastName) {
//   // вспомогательная переменная
//   var phrase = "Привет";

//   //  вспомогательная вложенная функция
//   function getFullName() {
//       return firstName + " " + lastName;
//     }

//   this.sayHi = function() {
//     alert( phrase + ", " + getFullName() ); // использование
//   };
// }

// var vasya = new User("Вася", "Петров");
// vasya.sayHi();

// function Accumulator (startingValue) {
// 	this.value = startingValue;

// 	this.read = function (){
// 		let prom = +prompt('Enter your number');
// 		return this.value += prom;
// 	};
// };

// let accumulator = new Accumulator(5);
// console.log(accumulator.read());
// console.log(accumulator.read());
// console.log(accumulator.value)

// function Calculator () {
// 	signArray = ['-'];
// 	console.log(signArray);
// 	// console.log(this.signArray);
// 	let arrayOfNumbers;
// 	// let self = this;
// 	// this.str;
// 	// this.valueOf = function(){
// 	// 	return this.str;
// 	// }
// 	this.addMethod = function(signNew, functionAdd) {
// 			signArray = signArray.push(signNew);
// 		};



	// function changeSign (signArray) {
	// 	switch(this.signArray){
	// 		case "-":
	// 		console.log(3);
	// 		this.summ();
	// 		break;
	// 	}
	// // };

	// // changeSign();


	// this.summ = function(){
	// 	console.log(1);
	// };


// let calc = new Calculator();
// // alert(calc.calculate("3 + 7"));

// let powerCalc = new Calculator();
// powerCalc.addMethod("+", function(a, b) {
//   return a * b;
// });

// function Calculator() {

// 	this.methods = {

// 		'+': function(a , b){
// 			return a + b;
// 		},
// 		'-': function(a , b){
// 			return a + b;
// 		}
// 	};

// 	this.calculate = function (str){
// 		let arr = str.split(' ');
// 		let a = +arr[0];
// 		let sign = arr[1];
// 		let b = +arr[2];
// 		return this.methods[sign](a, b);
// 	};

// 	this.addMethod = function(name, func) {
// 		this.methods[name] = func;
// 	};
// }

// var calc = new Calculator;

// calc.addMethod("*", function(a, b) {
//   return a * b;
// });
// calc.addMethod("/", function(a, b) {
//   return a / b;
// });
// calc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = calc.calculate("2 / 3");
// console.log( result );


// let user = {
// 	firstName:'Vasiz',
// 	lastName: 'Geeo',
// 	age: 5,
// 	get fullName(){
// 		return this.firstName + ' ' + this.lastName;
// 	},

// 	set fullName(value){
// 		let arr = value.split(' ');
// 		this.firstName = arr[0];
// 		this.lastName = arr[1];
// 	}
// };
// // alert(user.fullName);
// user.fullName = 'Роман Волянский';
// alert(1);
// alert(user.fullName);


// function User(fullName) {
// 	this.fullName = fullName;

// 	Object.defineProperties(this, {
// 		firstName: {
// 			get: function() {
// 				let arrNames = this.fullName.split(' ');
// 				return arrNames[0];
// 				// this.lastName = arrNames[1];
// 				console.log(arrNames[0])
// 			},

// 			set: function(newFirstName){
// 				this.fullName = newFirstName + " " + this.lastName;

// 			}
// 		},
// 		lastName: {
// 			get: function(){
// 				let arrNames = this.fullName.split(' ');
// 				return arrNames[1];
// 				// this.lastName = arrNames[1];
// 				console.log(arrNames[1])
// 			},

// 			set: function(newLastName) {
// 				return this.fullName = this.firstName + ' ' + newLastName;
// 			}
// 		}

// 	})
// }
// var vasya = new User("Василий Попкин");
// console.log( vasya.firstName );
// console.log( vasya.lastName );
// vasya.lastName = 'Peta';
// console.log( vasya.fullName );

// function Article (){
// 	Article.count++;
// }

// Article.count = 1;
// Article.show = function(){
// 	console.log(this.count);
// }
// new Article();
// new Article();
// new Article();
// Article.show();


// function CoffeeMachine(power, capacity){
// 	let waterAmount = 0;
// 	const waterHeatCapacity = 4200;
// 	let timerId;
// 	let datePrint = new Date;
// 	let self = this;
// 	let setOnReady;



// 	this.setWaterAmount = function(amount){
// 		if(amount < 0){
// 			console.log('not enough water');
// 		}
// 		else if(amount > capacity){
// 			console.log('water too much' + capacity);
// 		}
// 		waterAmount = amount;

// 	};

// 	this.getWaterAmount = function(){
// 		return waterAmount;
// 	};
// 	this.addWater = function (amount) {
// 		this.setWaterAmount(waterAmount + amount);

// 	};

// 	function getBoiledTime() {

// 		return waterAmount * waterHeatCapacity*80 / power;
// 	};

// 	this.getPower = function(){
// 		return power;
// 	};


// 	function onReady () {
// 		console.log('Coffee is Done!   ' + 'time for prepare ' + ((new Date - datePrint)/1000).toFixed(2) + 's')
// 	};

// 	this.setOnReady = function(newOnReady){
// 		onReady = newOnReady;
// 	}


// 	this.run = function() {
// 		timerId = setTimeout(function(){onReady()},
// 			getBoiledTime());
// 		};

// 	this.stop = function(){
// 		clearTimeout(timerId);
// 		console.log('Coffe error');
// 	};

// };


// var coffeeMachine = new CoffeeMachine(100000, 1000);
// coffeeMachine.setWaterAmount(150);
// // // console.log(coffeeMachine.getWaterAmount())
// // coffeeMachine.addWater(150);
// coffeeMachine.setOnReady(function() {
//   var amount = coffeeMachine.getWaterAmount();
//   alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
// });
// coffeeMachine.run();

// coffeeMachine.addWater(100);
// coffeeMachine.addWater(200);

// console.log(coffeeMachine.getPower());
// coffeeMachine.run();




// function User() {
// 	let self = this;
// 	let firstName = 'Ivan';
// 	let surname = 'Oooo';

// 	this.setFirstName = function(newFirstName) {
// 		firstName = newFirstName;
// 	}

// 	this.setSurname = function(newSurname) {
// 		surname = newSurname;
// 	}

// 	this.getFullName = function () {
// 		return firstName + ' ' + surname;
// 	}
// }

// var user = new User();
// // user.setFirstName("Петя");
// // user.setSurname("Иванов");

// console.log( user.getFullName() ); // Петя Иванов


// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;

//   var WATER_HEAT_CAPACITY = 4200;

//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }

//   this.setWaterAmount = function(amount) {
//     if (amount < 0) {
//       console.log("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       console.log("Нельзя залить больше, чем " + capacity);
//     }

//     waterAmount = amount;
//   };

//   this.addWater = function(amount) {
//     this.setWaterAmount(waterAmount + amount);js
//   };

//   function onReady() {
//     alert( 'Кофе готов!' );
//   }

//   this.run = function() {
//     setTimeout(onReady, getTimeToBoil());
//   };

// }

// var coffeeMachine = new CoffeeMachine(100000, 600);
// coffeeMachine.addWater(200);
// coffeeMachine.addWater(100);
// coffeeMachine.addWater(300); // Нельзя залить больше..
// coffeeMachine.run();



// class Task{
// 	constructor(title){
// 		this.title = title;
// 		done = false;
// 		console.log('Создание задачи');
// 	}

// 	complete(){
// 		this.done = true;
// 		console.log( `Задача "${this.title}" выполнена`);
// 	}



// };

// class SubTask extends Task {
// 	constructor(title, parent){
// 		super(title);
// 		this.parent = parent;
// 		console.log('Создание подзадачи');
// 	}

// 	complete(){
// 		super.complete();
// 		console.log(`Подзадача "${this.title}" выполнена`)
// 	}

// };

// let task = new Task('Изучить javascript');
// let subtask = new SubTask('Изучить JS 6', task);

// task.complete();
// subtask.complete();
// console.log(task);
// console.log(subtask);


// // console.log(div1);
// let div1 = document.getElementById('div1');

// class newClass {
// 	constructor(div1, date){
// 		div1.addEventListener('click', this.func);
// 		this.div = div1;
// 		this.date = date;

// 	}

// 	func () {

// 		this.color = 'red';
// 		document.getElementById('div2').style.background = this.color;
// 		return this.date;
// 	}
// }

// var getColor = new newClass(div1, new Date());

// console.log(getColor.func());


// shit.func();

// function newClass(rev, rel){

//   this.func = function(){
//     document.getElementById(rel).style.background = color;
//   };
// };




// function newClass(rev, rel){
// 	let color = 'red';
//   this.func = function(){
//     document.getElementById(rel).style.background = color;
//   };
//   document.getElementById(rev).onmouseover =   this.func;



// };

// var  = new newClass('div1', 'div2');



// let animal ={
// 	eats: true
// };

// let rabbit = {
// 	jumps: true,
// 	__proto__: animal
// };

// // rabbit.__proto__ = animal;
// for (var key in rabbit) {
// 	if(!rabbit.hasOwnProperty(key)) continue;
// 	console.log( key + '=' + rabbit[key]);
// }

// let data = Object.create(null);

// Object.create(null);

// data.text = 'hello';

// console.log(data.text);
// console.log(data.toString)

// console.log(rabbit.hasOwnProperty('jumps'));
// console.log(rabbit.hasOwnProperty('eats'))
// alert(rabbit.jumps);
// // alert(rabbit.eats);

// var animal = {
// 	eats: true
// };

// function Rabbit(name){
// 	this.name = name;
// }
// Rabbit.prototype = animal;

// let rabbit = new Rabbit('Cela');
// console.log(rabbit.eats)

// function Rabbit(name) {
// 	this.name = name;
// 	console.log(name);
// }

// let rabbit = new Rabbit('krolq');
// let rabbit2 = new Rabbit.constructor('krolixa');

class Classroom {
	constructor(){
		this.students = [];
		this.parents = [];
	}
	addStudent (...addStudent) {
		this.students.push(...addStudent);
	}
	removeStudent () {
		this.students.pop();
	}
}


let People = (function(){
	let privateProps = new WeakMap();

	class People {
		constructor(name, surname, gender){
			privateProps.set(this, {nationality: "ukrainian"});
			this.name = name;
			this.surname = surname;
			if(gender == 'man' || gender == 'woman'){
				this.gender = gender;
			}
		}


		get nationality(){
			console.log(privateProps.get(this).nationality);
		}

		set nationality (nationality) {
			privateProps.set(this, {nationality: nationality});
		}

		sayMyName() {
			if(this.gender == 'man'){
				console.log(`My name Mr. ${this.name} ${this.surname} and I'm ${privateProps.get(this).nationality}`);
			}
			if (this.gender == 'woman'){
				console.log(`My name Mrs. ${this.name} ${this.surname} and I'm ${privateProps.get(this).nationality}`);
			}
		}
	}
	return People;
})();



class Student extends People {
	constructor(name, surname, gender){
		super(name, surname, gender);
		this.subject = [];
	}

	addSubject (...subject) {
		this.subject.push(...subject);
	}
	removeSubject () {
		this.subject.pop();
	}
}



class Parent extends People {
	constructor(name, surname, gender, rigor){
		super(name, surname, gender);
		if(rigor > 0 && rigor < 11){
			this.rigor = rigor;
		}
		else {
			console.log('Cтрогость родителя от 0 до 10');
		}
	}
}

let student = new Student('Igor', 'Samborskiy', 'man');
let student2 = new Student('Alex', 'Vetrov', 'man');
let student3 = new Student('Alla', 'Parshina', 'woman');


student.sayMyName();
student.addSubject('Mathematics', 'Geometry');
student.nationality = 'mexican';

student.sayMyName();
student3.sayMyName();
student3.nationality;
student3.nationality = 'american';
student3.nationality;

console.log(student.subject);

let parent = new Parent('Nik', 'Vetrov', 'man', 5);
parent.sayMyName();
parent.nationality = 'american';
parent.sayMyName();

let classroom = new Classroom();
classroom.addStudent(student, student2, student3);
console.log(classroom.students);
console.dir(parent);
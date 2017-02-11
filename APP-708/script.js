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
// addStudent
// removeStudent
// есть поле students(массив из студентов)
// есть поле parents (массив из родителей студентов)
}


let People = (function(){
	let privateProps = new WeakMap();

	class People {
		constructor(name, surname, gender){
			privateProps.set(this, {nationality: "ukrainian"});
			// nationality (это будет приватное поле, его изменять нельзя будет из вне)
			this.name = name;
			this.surname = surname;
			if(gender == 'man' || gender == 'woman'){
				this.gender = gender;
			}
		}

		changeNationality(nationality) {
			this.nationality = nationality;
			privateProps.set(this, {nationality: this.nationality});
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
	// у класса student  есть поля от родителя и еще
	// subjects (список предметов на которые он ходит, типа математика, физика и тд)
	// есть методы
	// addSubject
	// и
	// removeSubject
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

//     parent наследуется от people
// у класса parent есть поля от родителя и еще
// rigor (строгость от 1 до 10 баллов)
}


// let student = new Student('Igor', 'Samborskiy', 'man');
// let student2 = new Student('Alex', 'Vetrov', 'man');
// let student3 = new Student('Alla', 'Parshina', 'woman');


// student.sayMyName();
// student.addSubject('Mathematics', 'Geometry');
// student.changeNationality('american');

// student.sayMyName();
// student3.sayMyName();

// console.log(student.subject);

// let parent = new Parent('Nik', 'Vetrov', 'man', 5);
// parent.sayMyName();
// parent.changeNationality('american');
// parent.sayMyName();

// let classroom = new Classroom();
// classroom.addStudent(student, student2, student3);
// console.log(classroom.students);
// console.dir(parent);
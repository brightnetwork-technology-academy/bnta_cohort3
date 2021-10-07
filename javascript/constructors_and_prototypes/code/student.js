const Student = function(name, laptop){
    this.name = name;
    this.laptop = laptop;
}

Student.prototype.greet = function(){
    console.log(`Hi! My name is ${this.name}`);
}

Student.prototype.updateLaptop = function (program) { // NEW
    const message = `${this.name} updated ${this.laptop.model} with ${program}`;
    console.log(message);
    this.laptop.install(program);
}

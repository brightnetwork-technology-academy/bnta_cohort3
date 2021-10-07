const Laptop = function (manufacturer, model, operatingSystem) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.operatingSystem = operatingSystem
}

Laptop.prototype.install = function (program) {
    console.log(`${this.model} installed ${program}`);
}

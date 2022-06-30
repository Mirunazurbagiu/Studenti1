class Student {
    constructor(name, address, phone, course) {
        this.name = name,
            this.address = address,
            this.phone = phone,
            this.course = course
    }
    getInfo() {
        console.log("Name: " + this.name + ",", "Address: " +
            this.address + ",", "Phone Number: " + this.phone + ",", "Course: " +
            this.course)
    }

}

let StudentOne = new Student("Popescu Irina", "Bucuresti Strada 2", 0787654331, "Matematica")
let StudentTwo = new Student("Petre Marian", "Craiova Strada 4", 0736666666, "Biologie")
let StudentThree = new Student("Stoicescu Ionut", "Cluj-Napoca Strada 3", 0765413243, "Geografie")

StudentOne.getInfo()
StudentTwo.getInfo()
StudentThree.getInfo()

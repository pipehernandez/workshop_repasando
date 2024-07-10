class Person {
    static users = [];
    static bookings = [];
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // createUser es igual a register
    // static createUser(newUser) {
    //     Person.users.push(newUser)
    // }

    static registerUser(newUser){
        Person.users.push(newUser);
    }

    static logIn(email, password){
        const user = Person.users.find(user => user.email === email && user.password === password);
        return user;
    }

    static createBooking(user, destination, date){
        const booking = {
            user: user,
            destination: destination,
            date: date
        }
        Person.bookings.push(booking);
        return booking;
    }
}

// const daniel = new Person("daniel", 15, "sjdkhfgjh@gmail.com")
// const javier = new Person("javier", 24) // genera email undefined

// Person.createUser(daniel);
// Person.createUser(javier);
// console.log(Person.users);

class RegularUser extends Person {
    constructor(name, age, adress, email,password, role) {
        super(registerUser, logIn(), createBooking())
        super(name, age, adress);
        this.email = email;
        this.password = password;
        this.role = role;
    }

    
}
const daniel = new RegularUser("Deniel")
console.log(RegularUser.registerUser(daniel))

class AdminUser extends Person {
    static #adminKey = 123456
    constructor(name, age, adress, email, password, role, adminKey) {
        super(name, age, adress);
        this.email = email;
        this.password = password;
        this.role = role;
        this.adminKey = adminKey;
    }
}



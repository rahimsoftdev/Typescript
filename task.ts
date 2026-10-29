
//task 1:
interface Student {
    name: string,
    age: number,
    isStudent: boolean
}

const student1: Student = {
    name: "Md Rahim Sikdar",
    age: 20,
    isStudent: true
}
function printStudent(studentInfo: Student) {
    console.log(`Name: ${studentInfo.name}`)
    console.log(`Age: ${studentInfo.age}`)
    console.log(`isStudent: ${studentInfo.isStudent}`)
}
printStudent(student1)


// Task 2:
const prices: number[] = [10, 20, 30, 580, 38, 22]

const totalPrice = (numbers: number[]): number => {
    let total: number = 0
    for (let num of numbers) {
        total += num
    }
    return total
}

console.log('Total Price is: ', totalPrice(prices))



//task 3:
interface UserInfoType {
    id: number,
    name: string,
    age: number
}

const users: UserInfoType[] = [
    {
        id: 87987,
        name: "Md Rahim Sikdar",
        age: 20
    },
    {
        id: 87987,
        name: "Md Alomgir Sikdar",
        age: 28
    },
    {
        id: 87987,
        name: "Md Rofiq Sikdar",
        age: 25
    },
]

const filterUser = (usersData: UserInfoType[]): UserInfoType[] => {


    const result = usersData.filter((user) => user.age > 20)


    return result
}

console.log('User Result is: ', filterUser(users))


//task 4:

interface Product {
    name: string,
    price: number,
    quantity: number;
}


const products: Product[] = [
    {
        name: "Key Board",
        price: 210,
        quantity: 2
    },
    {
        name: "Mouse",
        price: 280,
        quantity: 4
    },
    {
        name: "Laptop",
        price: 21000,
        quantity: 10
    },
]


const totalPriceOfProduct = (productsInfo: Product[]): number => {
    let totalPrice = 0;

    for (let product of products) {
        let result: number = product.price * product.quantity
        totalPrice += result
    }
    return totalPrice
}

console.log('Total Price is: ', totalPriceOfProduct(products))


//task 5:

interface Employee {
    id: number,
    name: string,
    salary: number,
    isActive: boolean
}


const employees: Employee[] = [
    {
        id: 88,
        name: "Rahim Sikdar",
        salary: 75000,
        isActive: true
    },
    {
        id: 8343,
        name: "Alomgir Sikdar",
        salary: 30000,
        isActive: true
    },
    {
        id: 88788,
        name: "Sabbir Sikdar",
        salary: 15000,
        isActive: false
    },
    {
        id: 808988,
        name: "Sakib Sikdar",
        salary: 45000,
        isActive: true
    },
    {
        id: 999388,
        name: "Hassan Sikdar",
        salary: 55000,
        isActive: false
    },
]

const getActiveEmployees = (employeInfo: Employee[]) => {
    return employeInfo.filter((emply) => emply.isActive)
}
console.log('Active Employ is: ', getActiveEmployees(employees))

const getHighSalaryEmployees = (employeeInfo: Employee[]) => {
    return employeeInfo.filter((emply) => emply.salary >= 30000)
}
console.log("high salary employ is: ", getHighSalaryEmployees(employees))


const calculateTotalSalary = (employeeInfo: Employee[]) => {
    let activeEmployee= employeeInfo.filter((emply) => emply.isActive)
    return activeEmployee.reduce((acc,current)=> {
        return acc + current.salary
    },0)
}
console.log('Active employee salary: ', calculateTotalSalary(employees))
let numberArray: number[] = [46]
console.log(numberArray)

let stringArray: string[] = ['true']
console.log(stringArray)

let booleanArray: boolean[] = [true, false]
console.log(booleanArray)

interface UserInfo {
    name: string,
    age: number,
    department: string
}

const userArray: UserInfo[] = [
    {
        name: "Rahim Sikdar",
        age: 20,
        department: "Computer"
    }
]

console.log(userArray)

const newArray: Array<number> = [87]
console.log(newArray)

const multiArray: (string | number)[] = [789, '']
multiArray

const fixArray: [string, ...number[]] = ['st', 8, 88, 988, 7]
console.log(fixArray)

const optionalArray : [string, number?] = ['dfd']
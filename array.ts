let friends: string[] = ['Rahim sikdar', 'Abir', 'Kawsar', 'Musarof', 'Alfi', 'Musfiqe', 'Sabbir'];

let ids: number[] = [768924, 768973]

type student = {
    name: string,
    readonly id: number,
    department: 'Computer'
}
let students: student[] = [
    { name: "Rahim Sikdar", id: 768924, department: "Computer" }
]

let array: [string[], number] = [['rahim'], 7]
console.log(array)

let array2: string[][] = [
    ['rahim', 'hadi', 'bashar', 'sajid'],
    ['alfi', 'mus']
]

let array3 : Array<number[]> = [
    [3,5,6,67,7],
    [87,34,23,65,864,34]
]

let readonlyArray : readonly number[]= [1,23,4,5,66,78]
console.log(readonlyArray)
// readonlyArray.push(3)   Error

let namedTuple : [name:string, id:number] = ['rahim',7]
namedTuple.push('ha')
console.log(namedTuple)
let a: string = 'This is apple';
let b: number = 789798;
let c: boolean = true;

console.log(a, b, c)


let d : string [] = ['rahim', 'kawsar', 'musarof'];
console.log(d)

let e : number [] = [34, 87]
console.log(e)

let f : boolean [] = [true, false, true]
console.log(f)

interface StudentInterface<T> {
    name:string
    readonly id: string | number
    department: "computer" | 'mechanical' | 'telecommunication'
    group: string
    semester:T
}

let students: StudentInterface<number> [] = [
    {
        name:'Rahim sikdar',
        id:87987,
        department:"computer",
        group:'A',
        semester:8
    }
]
console.log(students)


let fun = (a:number, b:number): number=> {
    return a + b
}

console.log(fun(40, 10))



function func (name:string):string{
    return `hello MR ${name}`
}

console.log(func('Rahim Sikdar'))
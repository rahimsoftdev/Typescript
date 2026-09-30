
// const id: string | number = 'dfjdkfj8'
// const Id: string | number = 87878;
// console.log(id, " ", Id)

// type idType = string | number;

// const myId : idType = 'this is string';
// const yourId : idType = 9787;

// console.log('Type union: ', myId, yourId)

// type name = idType | boolean

let id: string | number = 'dhakakhilkhet'

let array: string[] | number[] = ['dfdf', 'jdf']

interface Student {
    name: string
    id: number | string
}
interface StudentInfo {
    name: string
    id: number
}

type studentTotal = Student | StudentInfo


type role = 'user' | 'admin' | 'manager'


function unionTypeFun(a: string | number): string | number {
    return a
}


console.log(unionTypeFun(7897))



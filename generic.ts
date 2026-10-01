function fun2<T>(a: T): T {
    return a;
}

console.log(fun2<number>(12));
console.log(fun2<string>("Rahim"));

function arrayFun <T>(items:T[]):T{
    return items[0]
}
console.log(arrayFun([343,534]))


type ObjectStructure<T> = {
    name:T
    roll:T
}
let me:ObjectStructure<string> = {
    name:'Rahim',
    roll:'67687687'
}

interface StudentINFO <T>{
    name:T
    readonly Id: T
}
let myStudent: StudentINFO<string>= {
    name:"Rahim Sikdar",
    Id:"dfdkj9"
}

interface teacherInfo <N extends {length:number},I>{
    name:N
    Id:I
}
let musarofSir: teacherInfo<string, number> ={
    name:"Musarof",
    Id:97987
}
console.log("Mus sir: ", musarofSir)
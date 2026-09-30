const fun = (num1:number, num2:number):number=>{
    return num1 + num2   
}

console.log(fun(20,30))

let add: (num1:number, num2:number)=> number;

add = (num1,num2)=>{
    return num1 + num2
}
console.log('Add: ', add(20,30))


let mult = (a:number,b?:string)=>{
    console.log(a,b)
}
mult(1)


type funcType = (a:number, b:number, callback: (a:number, b:number)=> number)=>number;

const addTypeFun : funcType = (a,b, callback)=>{
    callback()
    return a + b
}
function ths(){
    console.log('df')
}
console.log(addTypeFun(50,60,ths))
let funV: (a:number, b:number)=> number = (a,b)=>{
    return a + b
}

console.log(funV(10, 50))


function func():void{
    console.log('this is void type function')
}
func()
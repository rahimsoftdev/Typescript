let message:any = 'what is your name';
console.log(message)

let myName:unknown = 'Rahim';
if(typeof myName === 'string'){
    myName.toUpperCase()
}
console.log(myName)

function fun():void{
    console.log('this is void function')
}
fun()
function fun():void{
    console.log('console in fun')
}
console.log('console out fun: ', fun())


async function fun2(): Promise<void> {
    console.log('async fun')
}
console.log('async out console: ',fun2())
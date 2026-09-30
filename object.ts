const studentInfo: {
    name: string,
    age: number,
    readonly roll: number,
    bottarId?:number
} = {
    name:"MD Rahim Sikdar",
    age:20,
    roll:768924
}
studentInfo.name = 'Abdur Rahim';

console.log(studentInfo)


const studentInfo2 :{
    name:string,
    readonly Id: number,
    department?:string ,
    address:{
        city:string
    }
} = {
    name:'Rahim Sikdar',
    Id:23434,
    department:'Computer',
    address:{
        city:"Dhaka"
    }
}
console.log("studentIndfo2", studentInfo2)


const me:{
    fvFood:string[]
} = {
    fvFood:['mango', 'banana']
}
console.log(me)
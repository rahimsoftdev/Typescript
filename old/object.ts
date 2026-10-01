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


type studentType = {
    name:string
    readonly Id: number
    department:string
}

const studentInfo3: studentType ={
    name:"Student 3",
    Id:8778787,
    department:'Computer'
}
console.log('S3', studentInfo3)

interface studentStructure {
    name:string
    readonly Id : number
    department: string
}
const rahimInfo : studentStructure = {
    name:"Rahim",
    Id:7897987,
    department:"Computer"
}
console.log('RAhim info: ', rahimInfo)


type User =
  | {
      role: "student";
      course: string;
    }
  | {
      role: "teacher";
      subject: string;
    };
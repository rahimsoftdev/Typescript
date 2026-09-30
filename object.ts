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
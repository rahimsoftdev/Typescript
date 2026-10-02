type StudentType = {
    name: string;
    readonly id: string | number;
    department: 'computer' | 'construction' | 'telecommunication';
    institute: 'Tangail Polytechnic';
}

function CheckId(student: StudentType) {
    console.log('student Name is: ', student.name)
    console.log('student department is: ', student.department)
    console.log('student id is: ', student.id)
    console.log('student institute is: ', student.institute)
}

CheckId({ name: "Rahim sikdar", id: 768924, department: "computer", institute: "Tangail Polytechnic" })


interface type1 {
    name?: string
    // readonly id:number
}
type type2=  {
    id?: number
}
type totalType = type1 & type2;
let me : totalType = {
    
}
console.log(me)

interface StudentN{
    name:string
    readonly id: string | number
}

let student1 :StudentN = {
    name:"Rahim Sikdar",
    id:768924
}
console.log("student now: ", student1)

student1.name = 'Abdur Rahim';
console.log("student now: ", student1)

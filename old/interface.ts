interface StudentInformation {
    name: string
    id: string | number
    department: string;
    role: 'teacher' | 'admin' | 'student' | 'instructor' | 'principal'
}

const me: StudentInformation = {
    name: "Rahim Sikdar",
    id: 987897987,
    department: 'Computer',
    role: "student"
}
console.log(me)

interface User {
    name: string,
    id: string | number
}

interface Admin extends User {
    role: "admin";
}

let AdminInfo: Admin = {
    name:"Admin Sahaeb",
    id : 7987897,
    role:"admin"
}

console.log(AdminInfo)
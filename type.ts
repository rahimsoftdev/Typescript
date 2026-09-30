type studentObj = {
    name: string,
    readonly id: number | string
}

// type role = 'admin' | 'user' | 'manager';



type Admin = studentObj & {
    role: 'Admin'
}
let adminINfo:Admin = {
    name:'Admin',
    id:987987,
    role:'Admin'
}

console.log(adminINfo)
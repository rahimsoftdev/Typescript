// let a: string = 'i love my father';
// let b: number = 768924;
// let c: boolean = true;

// console.log(a, b, c)
// type Role = 'admin' | 'user' | 'teacher' | 'student'

// let role : Role = 'admin';
// console.log(role)

// function fun(a : 'admin' | 'user' | 'teacher'){
//     if(a === 'admin'){
//         console.log('this is our admin')
//     }
// }
// fun("admin")


// function entryRome(old:'child' | 'boy' | 'man' | number){
//     if(old === 'boy'){
//         return 'you can come'
//     }
//     if(old === 'child'){
//         return 'you can come'
//     }
//     if(old === 'man'){
//         return 'not allow'
//     }
//     if(old <= 21){
//         return 'not allow'
//     }
//     return 'you can come'
// }

// console.log(entryRome('boy'))


// type student = {
//     name: string
//     id: number
// }

// function checkStudent(value: any): value is student {
//     return (
//         typeof value === 'object'  &&
//         value !== null && 
//         typeof value.name === 'string' && 
//         typeof value.id === 'number'
//     )
// }


// type me = {
//     name:'Rahim',
//     id?:768924,
// }
// type kaswar= {
//     name:'Kawsar',
//     id?:768905
// }
// type musarof = {
//     name:"Musarof", 
//     id?:768959
// }

// type total = me | kaswar | musarof;

// function isStudent (value:total){
//     if(value.name === 'Kawsar'){
//         console.log('kawsar role is' + value.id)
//     }
//     if(value.name === 'Rahim'){
//         console.log(`rahim roll is ${value.id}`)
//     }
//     console.log(`musarof roll is ${ value.id}`)
// }


// type admin1 = {
//     name: 'rahim'
//     id: 1
// }
// type admin2 = {
//     name: "kawsar"
//     id: 2
// }
// type admin3 = {
//     name: "musaorf"
//     id: 3
// }
// type admin = admin1 | admin2 | admin3;

// let workAdmin: string;

// function adminChecker(value: admin) {
//     if (value.name === 'rahim') {
//         workAdmin = 'rahim';
//         console.log(workAdmin + ' change the code')
//     }
//     if (value.name === 'kawsar') {
//         workAdmin = 'kawsar';
//         console.log(workAdmin + ' change the code')
//     }
//     if (value.name === 'musaorf') {
//         workAdmin = 'musarof';
//         console.log(workAdmin + ' change the code')
//     }
// }

// adminChecker({ name: "kawsar", id: 2 })
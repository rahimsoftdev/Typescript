type UserRole = 'user' | 'admin' | 'manager';
let role : UserRole = 'admin';
console.log('Role is: ',role)

type id = 100 | 99 | 98;
let mark:id = 100;
console.log('Mark is: ', mark)



function fun( marks: [12,23] | [12, 230]){
    console.log(marks)
}

fun([12,230])
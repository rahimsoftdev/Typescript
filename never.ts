type Role = 'admin' | 'user';

function roleChecker(role:Role){
    if(role === 'admin'){
        console.log('admin change the side')
        return
    }
    if(role === 'user'){
        console.log('user change the side')
        return
    }
    role
}


function funInfinit():never{
    while(true){
        console.log('its runnning')
    }
}
funInfinit()
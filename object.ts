interface about {
    name: string,
    profetion: string,
    foods: string[]
}

let me2: about = {
    name: "MD Rahim Sikdar",
    profetion: "Programming",
    foods: []
}
let mus = {
    name:"Rahim",
    profetion:"pro",
    foods:['apple'],
    love:"Aissa"
}
me2 = mus;


interface User{
    name?:string,
    role?:string,
    department?:string
}
type OmitObj = Omit<User, 'department'>

let obj2: OmitObj = {
    name:"rahim",
    role:'user',
}
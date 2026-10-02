let obj = {
    name:"rahim",
    met:function(){
        console.log(this.name)
    }
}
obj.met()

class Student {
    name  = 'rahim'
}
let Student1 = new Student()
console.log(Student1)
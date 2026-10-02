interface Student {
    name:string;
    id:number | string;
    department: 'computer'
}
class StudentClass implements Student {
    name: string= 'rahim sikdar'
    id: string | number= '768924'
    department: "computer" = 'computer'
}


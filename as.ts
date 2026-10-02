function fun(value: unknown) {
    let a = value as string;
    if (typeof value === 'string') {
        console.log(value.toUpperCase())
    }
}
fun('rahim sikdar')
function fun2(value: unknown) {
    let a =(value as string).toUpperCase()
    console.log(a)
}
fun2('rahim sikdar')
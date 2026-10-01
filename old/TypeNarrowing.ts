function fun(value: string | number) {
    if (typeof value === 'string') {
        value.toUpperCase()
        console.log(value.toUpperCase())

    }
    if (typeof value === 'number') {

        console.log(value.toFixed(2))

    }
}

fun('rahim sikdar')
fun(3434.34343)
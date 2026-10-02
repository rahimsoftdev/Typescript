try {
    throw new SyntaxError('this is error')
} catch (error) {
    if(error instanceof SyntaxError){
        console.log(error.message)
    }
    if(error instanceof Error){
        console.log(error.message)
    }
}
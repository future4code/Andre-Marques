function MathOperation (num1:number, num2:number):void{
    
    const sum1 = num1 + num2
    const sum2 = num1 - num2
    const sum3 = num1 * num2
    const bigger = () => {
        if(num1 > num2){
            return "O maior número é o " + num1
        } else {
            return "O maior número é o " + num2
        }
    }

    console.log(sum1, sum2, sum3, bigger())
}

MathOperation(14, 16)
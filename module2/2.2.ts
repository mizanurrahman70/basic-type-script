{
    interface roll1  {
        [index : number ] : number
    }
    const rollNumber : roll1 = [1,5,7,]
    interface add {
        (num1:number ,num2 :number) : Number
    }
    const add1 : add = (num1 ,num2) => num1 + num2
}
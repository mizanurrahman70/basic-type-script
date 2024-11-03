{
    type Vehicle = {
        bike :string,
        car : string,
        ship : string
    }
    type owner2 = keyof Vehicle
    const persion1 :owner2 = 'bike'
    const getPropertyValue = <X,Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }
    const car = {
        model : 'toyato ',
        year :200
    }
    const result1 =getPropertyValue(car,'year')

}
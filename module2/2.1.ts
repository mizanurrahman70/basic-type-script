{
// typw assertion 

let anyThing : any ;
anyThing = 'Next Level web development' ,
(anyThing as string)

const kgToGm = (value :string | number) : number | string | undefined=>{
    if( typeof value === 'string'){
        const converted =parseFloat(value)*1000 ;
        return `The converted value is : ${converted} converted`
    }
    if( typeof value === 'number'){
        return value * 1000
    }
}

const result1 = kgToGm(100) as number

type customError ={
    message :string
}
try{

}
catch(error){
console.log((error as customError).message)
};


}
type student ={
    name : string ;
    age : number ;
    gender : string ;

}
const student1 : student = {
    name : 'Mizanur' ,
    age : 54 ,
    gender : 'mail'
}
const students2 : student = {
    name : 'rahmin' ,
    age : 54 ,
    gender : 'femel'
}

type add = (num1 : number , num2 :number) => number
const number : add = (num1 ,num2)=> num1 + num2
{

    type genericArray<X,Y> = [X, Y] ;

    const mentorName : genericArray<string ,string> =['mizan ', 'rahim'];
    const student : genericArray<number,{studentName:string,age : number}> =[25,{
        studentName:'mizan',
        age: 34 ,
    }]
}
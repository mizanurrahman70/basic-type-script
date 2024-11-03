{
    interface developer<t>{
        name :string ;
        computer :{
            brand:string ;
            model:string ;
            releaseYear : number ;
        }
        smartWatch : t
    }
    const poorDevoloper :developer<{brand:string,name:string}> ={
        name :'mizanur rahman',
        computer : {
            brand :'Asush',
            model : 'core i 5',
            releaseYear : 2005 
        },
        smartWatch:{
       brand:'applo',
       name:'yealooo'
        }

    }
}
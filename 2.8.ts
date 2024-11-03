{
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'something';
            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        });
    };
    const showData = async () : Promise<string> =>{
        const data:string = await createPromise()
        return data
    }
    showData()

    // promise 
    const getData =async ()=>{
        const response =await fetch('https://jsonplaceholder.org/users')
        const data =response.json()
        return data
    }

}
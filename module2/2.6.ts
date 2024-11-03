{

    const addCourseToStudent = <T extends {id: number ; name : string ; email :string}>(
        student : T
    )=>{
        return {...student}
    }
    const student1 =addCourseToStudent({
        id:44,
        name : 'mr',
        email: '@gmail.com'
    })
}
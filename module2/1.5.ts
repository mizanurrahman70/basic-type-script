{
    const createArrayWithGeneric = <T> (param :T ) :T[] => {
        return [param]
    }
    const redGeneric =createArrayWithGeneric<boolean>(true)
}
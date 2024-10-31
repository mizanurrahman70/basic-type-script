const bost1 :string[]=['mizan','nahid','kabir'];
const bost2 :string[]=['solimulla','kabir','rakib'];
bost1.push(...bost2)
const mentor1={
    typescripe:'mizanur',
    redux:'rahim',
    next:'apon',
}
const mentor2 = {
    typeScript : 'abdullah',
    redux:'korim',
}
const mentorList = {
    ...mentor1,
    ...mentor2
}
const myfriends =(...friends:string[])=>{
friends.forEach((friend:string)=>console.log(`hi iam ${friend}`))
}
myfriends('rahim','karim','jabbar')
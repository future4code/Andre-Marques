enum ROLE {
    ADMIN = "admin",
    USER = "user"
}

type User = {
    name:string,
    email:string,
    role: ROLE
}

const users:User[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function arrayUsers(array:User[]):string[]{
    return array.filter((user) => {
        return user.role === ROLE.ADMIN
    }).map((user) => {
        return user.email
    })
}

console.log(arrayUsers(users))
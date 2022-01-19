function reverse (){
    const stringReverse:string = process.argv[2].split("").reverse().join("")

    return stringReverse
}

console.log(reverse())
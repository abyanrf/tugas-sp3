const sum =(...b) =>{
    let sum = 0
    for(let i=0; i < b.length;i++){
        sum += b[i]
    }
    return sum
};

const  identitas =(name,age) => {
    return console.log(`nama saya ${name} umur saya ${age}`)
    };
    

    export{sum,identitas}
const { readFile, writeFile } = require('fs');

readFile('./source/hello.txt', 'utf8', (err, data) =>{
    if(err){
        console.log(err)
    } else{
        console.log(data);
    }
});

writeFile('./source/mama.txt','welcome to mamas world', (err, data) =>{
    if(err){
        console.log(err)
    } else{
        console.log(data)
    }
});
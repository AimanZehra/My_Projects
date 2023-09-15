const { error } = require('console');
const fs = require('fs');

// read file

/* fs.readFile("./abc.txt", (error,data)=>{
    if (error) {
        console.log("error");
        console.log(error);
    }
    else {
        console.log(data.toString());

    }
});

console.log("terminated");*/


// write file
/*let content = "This is a dynamic content"
fs.writeFile('new_file.txt', content, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("saved");
    }
});*/


// append file

/*fs.appendFile("./abc.txt", "new content", (err) =>{
    if(err) {
        console.log("error" + err);
    } else {
        console.log("saved");
    }
});*/


// delete fie
/*fs.unlink("./abc.txt", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("deleted");
    }
})*/


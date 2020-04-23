// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input){
//     if (input === "Alex") {
//        return "Hello, Alex!";
//     } else if (input === "Jane") {
//         return "Hello, Jane!";
//     } else {
//         return "Hello, Pat!";
//     }
// }

function sayHello(input) {
    if (typeof input === "string") {
        return "Hello, " + input + "!";
    } else {
        return "false";
    }
}

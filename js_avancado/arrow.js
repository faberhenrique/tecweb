
var fs2 = [];
for(let i = 0; i < 10; i++) {
    fs2.push(function (){
        console.log(i); // 0 1 2 3 4 5 6 7 8 9
    })
}

fs2.forEach(function (f) {
    f();
})

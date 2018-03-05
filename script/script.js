console.log("Test");

var name;
name = 'Hello';

console.log(name);

/*if(name==='Hello') {
    alert("Witaj");
}*/

var logged = false;


function logiIn(username) {
    logged=true;
    console.log('You are logged in ' + username);
    alert('You are logged in ' + username);
}

logiIn('Arek');
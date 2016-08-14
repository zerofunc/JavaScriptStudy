
function sum() {
    var i, sum = 0;
    for(i = 0 ; i < arguments.length; ++i) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    return sum;
    
}

function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}

function one(arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}


function two(arg1, arg2) {
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}

zero();
one('val1','val2')
two('val1');
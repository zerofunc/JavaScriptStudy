function equal2() {
    alert(1 == 2);
    alert(1 == 1);
    alert("one" == "two");
    alert("one" == "one");
}

function equal3() {
    alert(1 == '1');
    alert(1 === '1');
}

function equal4() {
    alert(null == undefined);
    alert(null === undefined);
    alert(true == 1);
    alert(true === 1);
    alert(true == '1');
    alert(true === '1');

    alert(0 === -0);
    alert(NaN === NaN);
}

function notEqual() {
    alert(1 != 2);
    alert(1 != 1);
    alert("one" != "two");
    alert("one" != "one");
}

function leftBig() {
    alert(10 > 20);
    alert(10 > 1);
    alert(10 > 10);
}

function leftBigOrEqual() {
    alert(10 >= 20);
    alert(10 >= 1);
    alert(10 >= 10);
}
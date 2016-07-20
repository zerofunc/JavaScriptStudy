/**
 * Created by YooHyeongJu on 2016-07-21.
 */
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }

    }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
//0
alert(Counter1.value());
Counter1.increment();
Counter1.increment();
//2
alert(Counter1.value());
Counter1.decrement();
//1
alert(Counter1.value());
//0
alert(Counter2.value());

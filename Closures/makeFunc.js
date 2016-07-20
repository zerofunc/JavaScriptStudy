/**
 * Created by YooHyeongJu on 2016-07-21.
 */
function makeFunc() {
    var name = "크롬_closures";
    function displayName() {
        alert(name);
    }
    return displayName();
}

var myFunc = makeFunc();
myFunc();


var regex = {
    r : function(str) {
        var re = /\w+\s/g;
        var str = "fee fi fo fum";
        var myArray = str.match(re);
        console.log(myArray);
    }
};


var data = "zerofunc@naver.com"

regex.r(data);
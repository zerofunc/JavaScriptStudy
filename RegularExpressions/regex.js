var regex = {
    isPhoneNumber: function (str) {
        return regex.chk(/^\d{3}-\d{3,4}-\d{4}$/,str, "폰번호 형식이 아닙니다.");
    },
    chk: function (re, str, msg) {
        if(!re.test(str)) {
            alert(msg);
            return false;
        } else {
            return true;
        }
    }
};


var data = "010-123-4567"

console.log(regex.isPhoneNumber(data));
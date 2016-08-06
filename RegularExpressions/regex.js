var regex = {
    isKorean : function(str) {
        return regex.chk(/^[가-힣]+$/,str, "한글이 아닙니다.");
    },
    
    isNumber : function(str) {
        return regex.chk(/^[0-9]+$/,str, "숫자가 아닙니다.");
    },
    
    isAlphabet : function(str) {
        return regex.chk(/^[a-zA-Z]+$/,str, "영문이 아닙니다.");
    },
    
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


var data = "안녕"

console.log(regex.isKorean(data));
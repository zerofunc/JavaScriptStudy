function push() {
    var li = ['a', 'b','c','d','e'];
    // 맨 뒤에 추가
    li.push('f');
    alert(li);
}

function concat() {
    var li = ['a', 'b','c','d','e'];
    li.concat(['f','g']);
    alert(li);
}

function unshift() {
    var li = ['a', 'b','c','d','e'];
    // 맨 앞에 추가
    li.unshift('z');
    alert(li);
}

function splice() {
    var li = ['a', 'b','c','d','e'];
    /*
    첫 번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 숫자만큼의 값을 
    배열로부터 제거한 후에 리턴한다.
    그리고 세번째 인자부터 전달된 인자들을 첫번째 인자의 원소 뒤에 추가한다.
    */
    li.splice(2,0,'B','D');
    alert(li);
}

function shift() {
    var li = ['a', 'b','c','d','e'];
    // 첫 번째 원소 제거
    li.shift();
    alert(li);
}

function pop() {
    var li = ['a', 'b','c','d','e'];
    // 마지막 원소 제거
    li.pop();
    alert(li);
}

function sort() {
    var li = ['c', 'e','a','b','d'];
    // 정렬
    li.sort();
    alert(li);
}

function reverse() {
    var li = ['c', 'e','a','b','d'];
    // 역순으로 정렬
    li.reverse();
    alert(li);
}
reverse();

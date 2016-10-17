/**
 * @param {string} s
 * @param {string} t
 * @return {character} res
 */
var findTheDifference = function(s, t) {
    var tlen = t.length;
    var slen = s.length;
    var res = 0;
    for(var i = 0; i < slen; i++){
        res ^= s.charCodeAt(i);
    }
    for(i = 0; i < tlen; i++){
        res ^= t.charCodeAt(i);
    }
    return String.fromCharCode(res);
};

// use node command to test output in terminal
console.log(findTheDifference('bcd', 'abcd'));
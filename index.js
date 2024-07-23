function solution(S) {
    let chars = S.split('');
    let questionMarks = [];

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '?') {
            questionMarks.push(i);
        }
    }

    for (let i of questionMarks) {
        if (chars.length - i - 1 < i) {
            chars[i] = chars[chars.length - i - 1];
        } else {
            chars[i] = 'a';
        }
    }

    let palindrome = chars.join('');
    if (palindrome === palindrome.split('').reverse().join('')) {
        return palindrome;
    } else {
        return "NO";
    }
}
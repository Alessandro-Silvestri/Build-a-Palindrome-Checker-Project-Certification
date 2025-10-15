function isPalindrome(txt){
    txt = txt.toUpperCase();
    let cycles = Math.floor(txt.length / 2);
    let pt2 = txt.length - 1;
    let isPalindrome = true;
    for (pt1 = 0; pt1 < cycles; pt1++) {
        if (txt[pt1] !== txt[pt2]) {
            isPalindrome = false;
            break;
        }
        pt2--;
    }
    return isPalindrome;
}

console.log(isPalindrome("ciccio"));

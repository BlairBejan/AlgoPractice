// Given a string containing only the characters x and y, find whether there are the same number of xs and ys.

// balanced("xxxyyy") => true
// balanced("yyyxxx") => true
// balanced("xxxyyyy") => false
// balanced("yyxyxxyxxyyyyxxxyxyx") => true
// balanced("xyxxxxyyyxyxxyxxyy") => false
// balanced("") => true
// balanced("x") => false

const balanced = (string) => {
    if(string.length % 2){
        return false;
    };
    let counter = 0;
    for(const i of string){
        if(i == "x"){counter ++}
        else{counter --};
    }
    if(counter){return false}
    else{return true};
}

// Given a string containing only lowercase letters, find whether every letter that appears in the string appears the same number of times. Don't forget to handle the empty string ("") correctly!

// balanced_bonus("xxxyyyzzz") => true
// balanced_bonus("abccbaabccba") => true
// balanced_bonus("xxxyyyzzzz") => false
// balanced_bonus("abcdefghijklmnopqrstuvwxyz") => true
// balanced_bonus("pqq") => false
// balanced_bonus("fdedfdeffeddefeeeefddf") => false
// balanced_bonus("www") => true
// balanced_bonus("x") => true
// balanced_bonus("") => true

const balancedBonus = (string) => {
    let letterCount = {};
    for(const i of string){
        if(letterCount[i]){
            letterCount[i]++
        }
        else{
            letterCount[i] = 1;
        }
    }
    let checker = string.charAt(0);
    for(const key in letterCount){
        if(letterCount[key] !== letterCount[checker]){
            return false
        }
    }
    return true
}
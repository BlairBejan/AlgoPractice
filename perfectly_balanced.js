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
    for(let i in string){
        if(i == "x"){counter ++}
        else{counter --};
    }
    if(counter){return false}
    else{return true};
}
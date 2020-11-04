let a= prompt(String("Nhap chuoi thu nhat"));
let b= prompt(String("Nhap chuoi thu hai"))
function merge2String(a,b ) {
    let finalStr = ``;
    let totalLength = 0;
    if (a.length > b.length) {
        totalLength = a.length;
    } else {
        totalLength = b.length;
    }
    for (let i = 0; i < totalLength; i++) {
        let char1 = a[i];
        let char2 = b[i];
        if (a[i] == undefined) {
            char1 = ``;
        } else if (b[i] == undefined) {
            char2 = ``;
        }
        finalStr += char1 + char2;
    }``
    return finalStr;
}
console.log(merge2String(a,b));
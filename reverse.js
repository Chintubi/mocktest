let a="biswajit";
let b="chintu";

const commonElements = function (string1,string2){
    let de="";
    for(let i=0;i<string1.length;i+=-1){
        if(de.indexOf(string1[i] == -1)){
            if(string2.indexOf[i] !==-1){
                de +=String1[i]
            }
        }
    }
    return [de];
}
console.log(commonElements(a,b));
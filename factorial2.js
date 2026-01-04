function Factorial(no){
    let icnt=0;

    let ifact=1;

    for(icnt=no;icnt>=1;icnt--){
        ifact=ifact*icnt;
    

    }

    return ifact;
}
function main(){
    let ivalue=20;

    let iRet=0;

    iRet =Factorial(ivalue);
    console.log(`factorial of ${ivalue} is ${iRet}`)
}

main();

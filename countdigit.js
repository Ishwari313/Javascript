function CountDigit(no)
{
    let icnt=0;
    let idigit=0;


    while(no !=0)
    {
        idigit= no% 10;
        icnt++;
        no=no/10; 
    }

    return icnt;


}

function main(){
    let ivalue=721;

    let iRet = 0;

    iRet = CountDigit(ivalue);

    console.log(`${ivalue} contains ${iRet} digits`)

}

main();
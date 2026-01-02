function contdigit(no){
    let icount =0;
    let idigit =0;

    while(no !=0){
        idigit = no % 10;
        icount++;
        no =Math.floor(no/10);
    }

    return icount;
}

function main()
{
    let ivalue =721;

    let iRet=0;

    iRet= contdigit(ivalue);

    console.log(`${ivalue} contains ${iRet} digits`);
}

main();
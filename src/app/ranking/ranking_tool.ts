
export const duplicationRank = (ea:number):number => {
    let size:number = 0;
    if(ea === 1) {
        size = 100;
    } else if(ea === 2) {
        size = 80;
    } else {
        size = 50;
    } 
    return size;
}
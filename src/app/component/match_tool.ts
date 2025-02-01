
export const duplicationRank = (ea:number):number => {
    let size:number = 0;
    if(ea === 1) {
        size = 100;
    } else if(ea === 2) {
        size = 75;
    } else if(ea ===3) {
        size = 50;
    } else {
        size = 40;
    }
    return size;
}
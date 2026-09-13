
export type CategoryData = {
    id: number;
    title: string;
    value: string; 
};

export type DemolisherData = {
    inhibitor: number;
    tower: number;
    towerDamage: number;
};

export type VisionData = {
    visionScore: number;
    visionWard: number;
    wardPlaced: number;
    wardKill: number;
};

export type ObjectData = {
    jungleObjectScore: number;
    dragon: number;
    baron: number;
    horde: number;
    herald: number;
};

export type MultikillData = {
    multiKillScore: number;
    doubleKill: number;
    tripleKill: number;
    quadraKill: number;
    pentaKill: number;
};
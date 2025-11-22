
// objectives : Key , Port
// enemies : b,p,o
// player : P
// PowerUps : C, A, M




export const tileMap = [
    "XXXXXXXXXXXXXXXXXXX", // top wall
    "XP  F    r     AE X", // player top-left, exit top-right, some bricks
    "X XBXBXBXBXBXBXBX X", // alternating indestructible walls
    "X B             B X", // destructible bricks
    "X X XBXBXBXBXBX X X",
    "X B B   b     B B X",
    "X X X X X X X X X X",
    "X B B         B B X",
    "X X X XRXRXRX X X X",
    "X B B R     R B B X",
    "X X X X  F  X X X X",
    "X B B R     R B B X",
    "X X X XRXRXRX X X X",
    "X B B         B B X",
    "X X X X X X X X X X",
    "X B B   o     B B X",
    "X X XBXBXBXBXBX X X",
    "X B   r   C     B X",
    "X XBXBXBXBXBXBXBX X",
    "X M               X", // some power-ups
    "XXXXXXXXXXXXXXXXXXX"  // bottom wall
]


// export const tileMap = [
//     "XXXXXXXXXXXXXXXXXXX", // top wall
//     "XP    B  r  B  AEXX", // player top-left, exit top-right, some bricks
//     "X X X X X X X X X X", // alternating indestructible walls
//     "X B   B   B   B   X", // destructible bricks
//     "X X X X X X X X X X",
//     "X   B   B b B X B X",
//     "X X X X X X X X X X",
//     "X B   B   B   B   X",
//     "X X X X X X X X X X",
//     "X   B   B p B   B X",
//     "X X X X X X X X X X",
//     "X B   B   B   B   X",
//     "X X X X X X X X X X",
//     "X   B X B   B   B X",
//     "X X X X X X X X X X",
//     "X B   B o B   B   X",
//     "X X X X X X X X X X",
//     "X   B   B C B   B X",
//     "X X X X X X X X X X",
//     "XXM       X       X", // some power-ups
//     "XXXXXXXXXXXXXXXXXXX"  // bottom wall
// ];

export let tileMap2D = tileMap.map(row => row.split(''));


// Utility to deep copy the map
export function getFreshTileMap2D() {
    return tileMap.map(row => row.split(''))
}
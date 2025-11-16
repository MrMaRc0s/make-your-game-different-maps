
// objectives : Key , Port
// enemies : b,p,o
// player : P
// PowerUps : C, A, M
// Brick : B(orange),R (red)
// Wall : X


export const tileMap = [
    "XXXXXXXXXXXXXXXXXXX", // top wall
    "XPR   B  r  B  AEXX", // player top-left, exit top-right, some bricks
    "X X X X X X X X X X", // alternating indestructible walls
    "X B   B   B   B   X", // destructible bricks
    "X X X X X X X X X X",
    "X   B   B b B X B X",
    "X X X X X X X X X X",
    "X B   B   B   B   X",
    "X X X XRXRXRX X X X",
    "X   B R     R   B X",
    "X X X X     X X X X",
    "X B   R     R X   X",
    "X X X XRXRXRX X X X",
    "X   B X B   B   B X",
    "X X X X X X X X X X",
    "X B   B o B   B   X",
    "X X X X X X X X X X",
    "X   B   B C B   B X",
    "X X X X X X X X X X",
    "XXM       X       X", // some power-ups
    "XXXXXXXXXXXXXXXXXXX"  // bottom wall
];

export let tileMap2D = tileMap.map(row => row.split(''));


// Utility to deep copy the map
export function getFreshTileMap2D() {
    // Map2()
    return tileMap.map(row => row.split(''))
}

export function Map2() {

    // 1. Convert tileMap → mutable 2D array
    let map2D = tileMap.map(row => row.split(''));

    for (let y = 0; y < map2D.length; y++) {
        for (let x = 0; x < map2D[y].length; x++) {

            // Border walls -> 'X'
            if (
                x === 0 ||
                x === map2D[y].length - 1 ||
                y === 0 ||
                y === map2D.length - 1
            ) {
                map2D[y][x] = 'X';
                continue;
            }

            // Checker pattern logic
            if (y % 2 !== 0 && x % 2 === 0) {
                map2D[y][x] = 'B';
            } else if (y % 2 === 0 && x % 2 !== 0) {
                map2D[y][x] = 'X';
            } else {
                map2D[y][x] = ' ';
            }
        }
    }

    // 2. Convert back to array of strings
    for (let y = 0; y < map2D.length; y++) {
        tileMap[y] = map2D[y].join("");
    }
}

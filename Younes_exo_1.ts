const list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function somme(S:number[]) {
    return S.reduce((a:number, b:number) => a + b)
}

console.log(somme(list));

// Qu'en penses tu ? <3
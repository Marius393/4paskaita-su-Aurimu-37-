
const puodelioKaina = 1.50;
const puodeliuKiekis = prompt('Kiek puodelių kavos');
let suma = 0;


for (let cup = 1; cup <= puodeliuKiekis; cup++) {
    const cukrausKiekis = prompt(`Kiek saukstelių cukraus ${cup} puodelyje?`);

    for (let cukrus = 1; cukrus <= cukrausKiekis; cukrus++) {
        const sakinys = `Pilu ${cukrus} šaukštelį cukraus į ${cup} puodelį`;
        console.log(sakinys);
    }


    suma = suma + puodelioKaina;
}

alert(`Suma ${suma} eur`);
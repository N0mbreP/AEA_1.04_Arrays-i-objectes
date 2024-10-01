//Part 1
const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};

const coordenades = [12, 5, 8];

function ex1(){
    console.log(estudiant.nom + 'te ' + estudiant.edat + ' anys i ha tret un '+ estudiant.notes.matematiques + ' en matematiques');
}

function ex2(){
    console.log(`Les coordenades són x=${coordenades[0]}, y=${coordenades[1]}, z=${coordenades[2]}`)
}

//Part 2
const preus = [100, 200, 300, 400];

const edats = [16, 21, 18, 24, 12, 30];

const notes = [7, 9, 5, 10, 8];

function ex3(){
    var preusAct= preus.map(num=> num*1.10);
    console.log(preusAct);
}

function ex4(){
    var edatFilt= edats.filter(edat => edat>18);
    console.log(edatFilt);
}

function ex5() {
    var mitja= notes.reduce(function (total, valorActual) {
        return total + valorActual;
    });
    console.log(mitja/notes.length);
}

//Part 3
const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000
};


function ex6(){
    var producte= {
        nom:"Portàtil",
        preu: 950,
        quantitat: 3
    }
    console.log(producte);
    // Exemple de sortida: { nom: "Portàtil", preu: 950, quantitat: 3 }
}

function ex7(){
    Object.defineProperty(cotxe, "any", {value: 2000});
    console.log(cotxe);
}

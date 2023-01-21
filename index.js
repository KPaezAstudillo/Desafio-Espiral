//Inicializando variables, en este caso tamaño de matriz 
const size = 1001
let matrix = [];


//Inicializando matriz de tamaño 1001x1001
for (var i = 0; i < size; i++) {
    matrix.push([]);
    for (var j = 0; j < size; j++) {
        matrix[i].push(0);
    }
}

//console.log(matrix)

//función para encontrar el elemento central de la matriz
function centroMatriz() {
    const mitad = size / 2;
    centro = Math.floor(mitad + 1); //así calculé la ubicación del elemento central, mas adelante se utilizará para comenzar el espiral
    return centro;
}

//Ahora recorremos la matriz para posicionar el valor 1 en el centro de la matriz
function colocarCentro(matrix) {
    let i = 1;
    let j = 1;
    let count = 2;
    const limit = 1001 * 1001; // es el limite de los valores que puede tomar la matriz 
    while (count <= limit) {
        while (i <= 1001) {
            while (j <= 1001) {
                if (i === centroMatriz() && j === centroMatriz()) {
                    matrix[i][j] = 1; //ubicamos un 1 en el centro de la matriz
                    return;
                }
                j++;
            }
            i++;
        }
        count++;
    }
    //hasta el momento la matriz tiene un 1 en el centro
    return matrix;
}

//La parte donde comenzamos a rellenar la matriz, partiendo desde la posición donde está el valor 1.
function rellenarMatriz(matrix) {
    let completarMatrix = colocarCentro(matrix);
    let i = 1;
    let j = 1;
    let count = 2;
    const limit = 1001 * 1001; // es el limite de los valores que puede tomar la matriz 
    //console.log(completarMatrix)
    while (count <= limit) {
        while (i <= 1001) {
            while (j <= 1001) {
                if (completarMatrix[i][j] === 1) {
                    completarMatrix[i + 1][j] = count;
                    count += count;
                }
                if (!completarMatrix[i + 1][j] || completarMatrix[i + 1][j] === 0 && !completarMatrix[i + 1][j + 1] || completarMatrix[i + 1][j + 1] === 0 && !completarMatrix[i][j + 1] || completarMatrix[i][j + 1] === 0) {
                    completarMatrix[i][j + 1] = count;
                    count += count;
                }



                j++;
            }
            i++;
        }

    }
    return completarMatrix;
}

// En esta función sumamos los valores que están en las posiciones donde i=j y donde i+j=tamaño de la matriz-1.
// Lo anterior corresponde a las diagonales de la matriz
function sumaDiagonales(matrix) {
   let matrixFinal= rellenarMatriz(matrix);
    let suma = 0;
    let i = 0;
    let j = 0;

    while (i <= 1001) {
        while (j <= 1001) {
            if (i === j || i + j === size - 1) {
                suma += matrixFinal[i][j];
            }
            j++;
        }
        i++;
    }
    return suma;
}

//mostramos la suma de las diagonales en la matriz ya completa
// console.log(sumaDiagonales(matrix)) 
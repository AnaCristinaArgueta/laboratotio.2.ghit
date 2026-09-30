//Ana Cristina Argueta Rodriguez
//Manuel De Jesus Villalobos Meza


// Datos de los empleados
const nombreAna: string = "Ana";
const salarioAna: number = 450;
const horasAna: number[] = [5, 2];
const antiguedadAna: number = 4;
const descuentoAna: number = 46.16;

const nombreLuis: string = "Luis";
const salarioLuis: number = 550;
const horasLuis: number[] = [];
const antiguedadLuis: number = 1;
const descuentoLuis: number = 56.38;

const nombreMarta: string = "Marta";
const salarioMarta: number = 480;
const horasMarta: number[] = [2];
const antiguedadMarta: number = 5;
const descuentoMarta: number = 49.20;

//Calcular pago de horas extra
function calcularHorasExtra(
    tarifa: number = 4,
    ...horas: number[]
): number {
    let total: number = 0;

    for (const hora of horas) {
        total += hora * tarifa;
    }

    return total;
}

//Calcular salario bruto
function calcularSalarioBruto(
    salarioBase: number,
    pagoHorasExtra: number
): number {
    return salarioBase + pagoHorasExtra;
}

//Calcular bono

function calcularBono(antiguedad: number): number {
    if (antiguedad >= 3) {
        return 20;
    }

    return 0;
}

function aplicarBono(
    antiguedad: number,
    callback: (años: number) => number
): number {
    return callback(antiguedad);
}

//Calcular salario neto con descuento opcional
function calcularSalarioNeto(
    salarioBruto: number,
    bono: number,
    descuento?: number
): number {
    const salarioConBono: number = salarioBruto + bono;

    if (descuento !== undefined) {
        return salarioConBono - descuento;
    }

    return salarioConBono;
}

//Acumular nómina mediante recursividad
function acumularNomina(
    salarios: number[]
): number {
    if (salarios.length === 0) {
        return 0;
    }

    return salarios[0] + acumularNomina(salarios.slice(1));
}

//Ana
const pagoExtraAna: number = calcularHorasExtra(4, ...horasAna);
const brutoAna: number = calcularSalarioBruto(salarioAna, pagoExtraAna);
const bonoAna: number = aplicarBono(antiguedadAna, calcularBono);
const netoAna: number = calcularSalarioNeto(
    brutoAna,
    bonoAna,
    descuentoAna
);

//Luis
const pagoExtraLuis: number = calcularHorasExtra(4, ...horasLuis);
const brutoLuis: number = calcularSalarioBruto(salarioLuis, pagoExtraLuis);
const bonoLuis: number = aplicarBono(antiguedadLuis, calcularBono);
const netoLuis: number = calcularSalarioNeto(
    brutoLuis,
    bonoLuis,
    descuentoLuis
);

//Marta
const pagoExtraMarta: number = calcularHorasExtra(4, ...horasMarta);
const brutoMarta: number = calcularSalarioBruto(salarioMarta, pagoExtraMarta);
const bonoMarta: number = aplicarBono(antiguedadMarta, calcularBono);
const netoMarta: number = calcularSalarioNeto(
    brutoMarta,
    bonoMarta,
    descuentoMarta
);

const salariosNetos: number[] = [
    netoAna,
    netoLuis,
    netoMarta
];

//Total de la nómina
const totalNomina: number = acumularNomina(salariosNetos);


//Resultados
console.log("===== NÓMINA DE EMPLEADOS =====");

console.log(
    `${nombreAna}: $${netoAna.toFixed(2)}`
);

console.log(
    `${nombreLuis}: $${netoLuis.toFixed(2)}`
);

console.log(
    `${nombreMarta}: $${netoMarta.toFixed(2)}`
);

console.log(
    `Total de la nómina: $${totalNomina.toFixed(2)}`
);


//Comprobaciones

console.log("\n===== COMPROBACIONES =====");

// Empleado sin horas extra
console.log(
    `Horas extra de Luis: $${pagoExtraLuis.toFixed(2)}`
);

const ejemploSinDescuento: number = calcularSalarioNeto(
    500,
    20
);

console.log(
    `Salario sin descuento: $${ejemploSinDescuento.toFixed(2)}`
);

//Arreglo vacío
const nominaVacia: number[] = [];

console.log(
    `Nómina vacía: $${acumularNomina(nominaVacia).toFixed(2)}`
);
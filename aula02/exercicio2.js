const tecnologia = "React";
const tecnologia2 = "Javascript";

function objetivoDoCurso(nomeDaTecnologia) {

    return `O objetivo do curso é aprender ${nomeDaTecnologia} `;

}

const objetivoDoCurso2 = (nomeDaTecnologia) => {

    return `O objetivo do curso é aprender ${nomeDaTecnologia} `;

}


console.log(objetivoDoCurso(tecnologia));
console.log(objetivoDoCurso2(tecnologia2));
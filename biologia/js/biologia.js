let mensagem = prompt('Digite a organela que te interessa:');
let celulaAnimal = [
    'membrana plasmatica',
    'ribossomos',
    'reticulo endoplasmatico liso',
    'reticulo endoplasmatico rugoso',
    'complexo goginiense',
    'lissomos',
    'peroxissomos',
    'mitocondrias',
    'centriolos',
    'vacuolos',
    'nucleo',
    'nucleolo',
];
 
let organelas;
for (let i = 0; i < celulaAnimal.length; i++){
    if (celulaAnimal [i] == 'membrana plasmatica' && mensagem == 'membrana plasmatica')
    document.write('Membrana Plasmática: É a camada externa que envolve a célula animal, separando o conteúdo interno da célula do ambiente externo. Ela regula a entrada e saída de substâncias da célula, permitindo a comunicação e interação com o ambiente.');
    document.write(`membrana plasmatic <img src='mitocondria.webp'`)
}

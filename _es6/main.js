// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 7.5 },
    { nome: 'Carlos', nota: 5.8 },
    { nome: 'Bruno', nota: 8.2 },
    { nome: 'Mariana', nota: 4.9 },
    { nome: 'Júlia', nota: 6.0 },
    { nome: 'Pedro', nota: 3.4 }
];

// Função que retorna apenas os alunos com nota maior ou igual a 6
function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Usando a função para obter os alunos aprovados
const alunosAprovados = filtrarAprovados(alunos);

console.log(alunosAprovados);

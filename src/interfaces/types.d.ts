export type Aluno = {
    foto?: string,
    sigla: string,
    nome: string,
    idade: string,
    peso: string,
    objetivo: string
}

export type Treino = {
    categoria: string,
    exercicios: Exercicios[],
}

export type Exercicios = {
    imagem?: string,
    nome?: string,
    series?: number,
    duracao?: number,
    repeticoes?: number,
    descanso?: number
}
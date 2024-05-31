import { Treino } from "@/interfaces/types";

const treinoD: Treino = {
    categoria: "Força + Aeróbico",
    exercicios: [
      { imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-barra-fixa-pegada-aberta-palma-para-frente-chinup.gif", nome: "Barra fixa", series: 4, repeticoes: 10, descanso: 60 },
      { imagem: "https://www.hipertrofia.org/blog/wp-content/uploads/2021/12/full-stretch-for-hyperextension.gif", nome: "Extensão lombar", series: 4, repeticoes: 10, descanso: 60 },
      { imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/01431301-Bridge-straight-arm_Waist_360_logo.gif", nome: "Prancha", series: 3, duracao: 1, descanso: 60 },
      { imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif", nome: "Abdominal", series: 3, repeticoes: 15, descanso: 60 },
      { imagem: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/corrida-na-esteira-inclinada-1.gif", nome: "Cardio", duracao: 30}
    ]
  };
  
  export default treinoD;
  
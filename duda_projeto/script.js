function solicitarInfo() 
{
    let nome = prompt("Digite seu nome: ");
    let titulo = prompt ("Qual título do São Paulo você considera o mais importante?");
    let estadio = prompt ("Você já foi ao Morumbi?");
    let desempenho = prompt ("O que você acha do desempenho atual do time?");

   alert ("Olá, " + nome + "! Aqui estão suas respostas: \n" +
        "Título mais importante: " + titulo + "\n" +
        "Já foi ao Morumbi: " + estadio + "\n" +
        "Opinião sobre o desempenho atual: " + desempenho);

        console.log("Nome do usuario", nome);
        console.log("Qual titulo?",  titulo);
        console.log("Foi ao estadio?",  estadio);
        console.log("Opinião sobre o desempenho",  desempenho);

}
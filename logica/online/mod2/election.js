// Desenvolva um código que simule uma eleição com três candidatos.
// - candidato_X => 889
// - candidato_Y => 847
// - candidato_Z => 515
// - branco => 0

// O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

// Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.

const position = {
  candidateX: 0,
  candidateY: 0,
  candidateZ: 0,
  branco: 0,
  nulo: 0,
};

let vote = false;

do {
  let selectElection = prompt(
    "Selecione a opção desejada: \n1: NOVA VOTAÇÃO \n2: APURAÇÃO \n"
  );

  switch (selectElection) {
    case "1":
      window.alert("Vamos começar nossa votação!");
      window.alert(
        `
        CANDIDATOS:\n
        1: CANDIDATO X
        2: CANDIDATO Y
        3: CANDIDATO Z
        4: BRANCO
        `
      );
      let option = prompt("Escolha seu candidato: ");

      switch (option) {
        case "1":
          let confirmX = prompt(
            "Confirma seu voto no CANDIDATO X (S/N)?"
          ).toLocaleUpperCase();
          if (confirmX === "S") {
            position.candidateX++;
            window.alert("Voto computado com SUCESSO!");
          } else {
            window.alert("Vamos recomeçar novamente!");
            vote = false;
          }
          break;

        case "2":
          let confirmY = prompt(
            "Confirma seu voto no CANDIDATO Y (S/N)?"
          ).toLocaleUpperCase();
          if (confirmY === "S") {
            position.candidateY++;
            window.alert("Voto computado com SUCESSO!");
          } else {
            window.alert("Vamos recomeçar novamente!");
            vote = false;
          }
          break;

        case "3":
          let confirmZ = prompt(
            "Confirma seu voto no CANDIDATO Z (S/N)?"
          ).toLocaleUpperCase();
          if (confirmZ === "S") {
            position.candidateZ++;
            window.alert("Voto computado com SUCESSO!");
          } else {
            window.alert("Vamos recomeçar novamente!");
            vote = false;
          }
          break;

        case "4":
          let confirmBranco = prompt(
            "Confirma seu voto em BRANCO (S/N)?"
          ).toLocaleUpperCase();
          if (confirmBranco === "S") {
            position.branco++;
            window.alert("Voto computado com SUCESSO!");
          } else {
            window.alert("Vamos recomeçar novamente!");
            vote = false;
          }
          break;

        default:
          let confirmNulo = prompt(
            "Você não escolheu nenhuma opção válida. Deseja computar seu voto como NULO (S/N)?"
          ).toLocaleUpperCase();
          if (confirmNulo === "S") {
            position.nulo++;
          } else {
            window.alert("Vamos recomeçar novamente!");
          }
          break;
      }
      break;

    case "2":
      let totalVotes =
        position.candidateX +
        position.candidateY +
        position.candidateZ +
        position.branco +
        position.nulo;

      window.alert(
        `
          RESULTADOS DA APURAÇÃO:\n
          CANDIDATO X: Recebeu ${position.candidateX} votos de um total de ${totalVotes}.
          CANDIDATO Z: Recebeu ${position.candidateZ} votos de um total de ${totalVotes}.
          CANDIDATO Y: Recebeu ${position.candidateY} votos de um total de ${totalVotes}.
          BRANCO: Recebeu ${position.branco} votos de um total de ${totalVotes}.
          NULOS: Recebeu ${position.nulo} votos de um total de ${totalVotes}.
          `
      );

      // Classificação dos candidatos a funcao abaixo pega o candidato com maior nota
      let maxVotes = Math.max(
        position.candidateX,
        position.candidateY,
        position.candidateZ
      );
      let winner;
      if (maxVotes === position.candidateX) {
        winner = "CANDIDATO X";
        window.alert(`\nVENCEDOR: ${winner}\n`);
      } else if (maxVotes === position.candidateY) {
        winner = "CANDIDATO Y";
        window.alert(`\nVENCEDOR: ${winner}\n`);
      } else if (maxVotes === position.candidateZ) {
        winner = "CANDIDATO Z";
        window.alert(`\nVENCEDOR: ${winner}\n`);
      } else {
        winner = "Nenhum vencedor";
      }

      vote = true;
      break;

    default:
      window.alert("Opção inválida. Por favor, escolha uma opção válida.");
      break;
  }
} while (!vote);
window.alert("Agradecemos sua participação nessas eleições.");

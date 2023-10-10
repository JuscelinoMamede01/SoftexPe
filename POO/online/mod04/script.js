const banco = {
  conta: 12345,
  saldo: 1000,
  tipoConta: "Corrente",
  agencia: "000123-3",
};

function buscarSaldo() {
  return banco.saldo.toFixed(2);
}

function deposito(valor) {
  let parsedvalor = parseFloat(valor);
  if (parsedvalor >= 0) {
    banco.saldo += parsedvalor;
    return `Depósito de R$${parsedvalor.toFixed(
      2
    )} realizado com sucesso!\n Saldo atual: R$${banco.saldo.toFixed(2)}`;
  } else {
    return "Valor de depósito inválido.";
  }
}

function saque(valor) {
  let parsedvalor = parseFloat(valor);
  if (parsedvalor > 0 && parsedvalor <= banco.saldo) {
    banco.saldo -= parsedvalor;
    return `Saque de R$${parsedvalor.toFixed(
      2
    )} realizado com sucesso!\n Saldo atual: R$${banco.saldo.toFixed(2)}`;
  } else {
    return "Saldo insuficiente ou valor de saque inválido.";
  }
}

function numeroDaConta() {
  return `Conta: ${banco.conta}\nAgência: ${banco.agencia}\nTipo de Conta: ${banco.tipoConta}`;
}

function sistemaBanco() {
  const operacao = document.getElementById("operacao").value;
  const valor = parseFloat(document.getElementById("valor").value);

  let resultado = "";

  switch (operacao) {
    case "saldo":
      resultado = `Saldo atual: R$${buscarSaldo()}`;
      break;
    case "deposito":
      resultado = deposito(valor);
      break;
    case "saque":
      resultado = saque(valor);
      break;
    case "numero_conta":
      resultado = `Número da conta: ${numeroDaConta()}`;
      break;
    default:
      resultado = "Operação inválida.";
      break;
  }

  document.getElementById("resultado").textContent = resultado;
}

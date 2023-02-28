const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} Passou!`);
  } catch {
    console.error(`${titulo} Não passou!`);
  }
};

// eslint-disable-next-line quotes
teste("somaHorasExtras", () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

// eslint-disable-next-line quotes
teste("calculaDesconto", () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 200);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

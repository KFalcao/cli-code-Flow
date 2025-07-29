#!/usr/bin/env node
import fs from 'fs';
import readline from 'readline';

// Interface para receber entradas do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntar = (texto) => {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => resolve(resposta));
  });
};

async function gerarReadme() {
  const nome = await perguntar("Nome do Projeto: ");
  const descricao = await perguntar("Descrição: ");
  const autor = await perguntar("Autor: ");

  const conteudo = `# ${nome}

${descricao}

## Autor

${autor}
`;

  fs.writeFileSync("README.md", conteudo);
  console.log("README.md criado com sucesso!");
  rl.close();
}

gerarReadme();

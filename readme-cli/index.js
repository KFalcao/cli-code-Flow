import inquirer from 'inquirer';
import fs from 'fs';

const perguntas = [
  { name: 'nome', message: 'Nome do projeto:' },
  { name: 'descricao', message: 'Descrição do projeto:' },
  { name: 'autor', message: 'Nome do autor:' },
  { name: 'instalacao', message: 'Instruções para instalação:' },
  { name: 'uso', message: 'Como usar o projeto:' },
  { 
    type: 'list',
    name: 'licenca',
    message: 'Escolha uma licença:',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'Nenhuma']
  },
  { name: 'contribuicao', message: 'Como contribuir:' },
  { name: 'testes', message: 'Como rodar os testes:' }
];

function gerarMarkdown(respostas) {
  return `# ${respostas.nome}

## Descrição
${respostas.descricao}

## Instalação
${respostas.instalacao}

## Uso
${respostas.uso}

## Licença
${respostas.licenca === 'Nenhuma' ? 'Sem licença específica.' : respostas.licenca}

## Como contribuir
${respostas.contribuicao}

## Testes
${respostas.testes}

---

Feito por ${respostas.autor}
`;
}

async function main() {
  const respostas = await inquirer.prompt(perguntas);
  const conteudo = gerarMarkdown(respostas);

  fs.writeFileSync('README.md', conteudo);
  console.log('README.md gerado com sucesso!');
}

main();

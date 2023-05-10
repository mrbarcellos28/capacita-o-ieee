const pessoas = [
    { nome: 'joão', idade: 25 },
    { nome: 'josé', idade: 30 },
    {nome: 'maria', idade: 24},
    {nome: 'joana', idade: 23},
    {nome: 'julia', idade: 26},
    {nome: 'adelia', idade:18},
    {nome: 'cleber', idade: 27},
    {nome: 'rose', idade: 30},
    {nome: 'yago', idade: 27},
    {nome: 'johari', idade: 24},
    { nome: 'juliana', idade: 28 },
    { nome: 'Felipe', idade: 35 },
  ];
  const nomesComj = pessoas.filter(pessoa => pessoa.nome.startsWith('j')).map(pessoa => pessoa.nome);
  //const nomesComj = pessoas.filter(pessoa => pessoa.nome[0].substring(0) =="j") essa seria sem o comando (startswith)
  //.map(pessoa => pessoa.nome); para funcionar com a linha de cima
    if(nomesComj == 0) {
    console.log ("Não ha nome com a inicial j")}; // para quando nao há nomes com a inicial j 
  
console.log( (nomesComj)); // vai escrever o nome que possuem a letra "j"
  
  const mediaidadesnomescomj = pessoas
    .filter(pessoa => pessoa.nome.startsWith('j')) 
    //.filter(pessoa => pessoa.nome) para funcionar sem o comando (starswith) 
    .reduce((total, pessoa, indice, array) => {
      total += pessoa.idade;
      if (indice === array.length - 1) {
        return total / array.length;
      }
      return total;
    }, 0);
  
  console.log(mediaidadesnomescomj); 
  if (mediaidadesnomescomj === 0){
    console.log("Não existe media")
  };
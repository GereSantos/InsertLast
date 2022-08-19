function nextInLine(arr, item) {
    //Função push que remove o número do array selecionado e o retorna no final do array
    arr.push(item)
     return arr.shift()
  }
  
  // Configuração
  const testArr = [1, 3, 2, 4, 5];
  
  // Exibir o código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 1));
  console.log("After: " + JSON.stringify(testArr));
  console.log(nextInLine([2],1))
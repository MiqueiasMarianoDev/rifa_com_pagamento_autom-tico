// Gera um número aleatório entre 1 e 1000
function generateNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }
  
  // Obtém o valor inserido na caixa de texto
  function getInputNumber() {
    return document.getElementById("input-number").value;
  }
  
  // Verifica se o valor inserido é um CPF válido
  function isCpfValid(cpf) {
    // Implementação de validação de CPF aqui
    return true;
  }
  
  // Verifica se o valor inserido é um CNPJ válido
  function isCnpjValid(cnpj) {
    // Implementação de validação de CNPJ aqui
    return true;
  }
  
  // Verifica se o valor inserido é um número de telefone válido
  function isPhoneValid(phone) {
    // Implementação de validação de número de telefone aqui
    return true;
  }
  
  // Exibe o número gerado na tela
  function showGeneratedNumber(number) {
    var generatedNumberLabel = document.getElementById("generated-number-label");
    var generatedNumberDiv = document.getElementById("generated-number");
  
    generatedNumberLabel.classList.remove("hidden");
    generatedNumberDiv.classList.remove("hidden");
    generatedNumberDiv.innerHTML = number;
  }
  
  // Exibe uma mensagem na tela indicando se o valor inserido é válido ou não
  function showValidationMessage(isValid) {
    if (isValid) {
      alert("Valor válido!");
    } else {
      alert("Valor inválido!");
    }
  }
  
  // Adiciona os eventos aos botões
  document.getElementById("generate-number-btn").addEventListener("click", function() {
    var generatedNumber = generateNumber();
    showGeneratedNumber(generatedNumber);
  });
  
  document.getElementById("submit-number-btn").addEventListener("click", function() {
    var inputNumber = getInputNumber();
    var isValid;
  
    // Verifica se o valor inserido é um CPF válido
    if (/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(inputNumber)) {
      isValid = isCpfValid(inputNumber);
    }
  
    // Verifica se o valor inserido é um CNPJ válido
    else if (/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(inputNumber)) {
      isValid = isCnpjValid(inputNumber);
    }
  
    // Verifica se o valor inserido é um número de telefone válido
    else if (/^\(\d{2}\) \d{4,5}-\d{4}$/.test(inputNumber)) {
      isValid = isPhoneValid(inputNumber);
    }
  
    // Caso contrário, o valor é inválido
    else {
      isValid = false;
    }
  
    showValidationMessage(isValid);
  });
  
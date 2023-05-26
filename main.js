/*
Esse codigo foi escrito para satisfazer exercico de javascript DOM 
da EBAC.

o Exercicio pedia: 
2 - "Crie uma validação no JavaScript, onde o formulário
será válido caso o número B seja maior que o número
A."

Nesse codigo o numero B é "valid thru" do cartão de credito, e o numero A é "Since"

3 - "Exiba uma mensagem positiva quando o formulário for
válido e uma mensagem negativa quando for inválido."

Mensagem negativa: Feedback visual com realçe vermelho, alerta sobre data invalida
Mensagem positiva: Habilitação do botão "cadastrar", alerta de cadastro realizado com sucesso 
*/

//Form - Variables
const form_cvc = document.getElementById("form_cvc");
const form_number = document.getElementById("form_number");
const form_name = document.getElementById("form_name");
const form_sinceDate = document.getElementById("form_sinceDate");
const form_validDate = document.getElementById("form_validDate");
const form_button = document.getElementById("submit_button");
//Card - Variables
const card_container = document.getElementById("cardContainer");
const card_info = document.getElementById("cardInfo");
const card_number = document.getElementById("cardNumber");
const card_name = document.getElementById("cardName");
const card_since = document.getElementById("cardSince");
const card_valid = document.getElementById("cardValid");
const card_cvc = document.getElementById("cardCvc");

//Validation - variables
const regEx = /[a-zA-Z\D\s]/g;
const max_card_digits = 16;
const year_prefix = 2000; //2000 + XX = 20XX

let isDatesValid = false;
let isNumberValid = false;
let isCvcValid = false;
let isNameValid = false;

//#region Utils

function FormHighLightElement(htmlElement, doHighLighting) {
  try {
    if (typeof htmlElement == "undefined") {
      throw Error("Function HighLightElement: Frist param is undefined");
    }

    if (typeof doHighLighting != "boolean") {
      throw Error("Function HighLightElement: Second param most be boolean");
    }

    if (doHighLighting) {
      if (!htmlElement.classList.contains("highlightBorder")) {
        htmlElement.classList.add("highlightBorder");
      }
    } else {
      if (htmlElement.classList.contains("highlightBorder")) {
        htmlElement.classList.remove("highlightBorder");
      }
    }
  } catch (error) {
    console.log(Error);
  }
}

//#endregion

//#region Form Date Handling

function fomartedDateToMMYY(date) {
  try {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    year = year.toString().substring(2, year.length);
    return month + "/" + year;
  } catch (error) {
    console.log(error);
  }
}

//Function that cleans up inserted date and return a Date element for validation
function parseTxtToDate(elementDate) {
  try {
    if (typeof elementDate == "undefined") {
      throw Error("Function parseTxtToDate: Passed Param is undefined");
    }

    let insertedDate = elementDate.value;
    insertedDate = insertedDate.replaceAll(regEx, "");

    if (insertedDate.length >= 3 && insertedDate.length <= 4) {
      let month_lastIndex = 2;

      if (insertedDate.length == 3) {
        month_lastIndex = 1;
      }

      let insertMonth = insertedDate.substring(0, month_lastIndex);
      let insertYear = insertedDate.substring(
        month_lastIndex,
        insertedDate.length
      );

      if (insertMonth != "" && insertYear != "") {
        return new Date(
          year_prefix + parseInt(insertYear),
          parseInt(insertMonth - 1)
        );
      } else {
        FormHighLightElement(elementDate, true);
        return undefined;
      }
    } else {
      FormHighLightElement(elementDate, true);
      return undefined;
    }
  } catch (error) {
    console.log(error);
  }
}

//Validação das datas
//datesince = Numero A
//datevalid = Numero B
function validateCardDates() {
  try {
    if (
      typeof form_sinceDate == "undefined" ||
      typeof form_validDate == "undefined" ||
      typeof card_since == "undefined" ||
      typeof card_valid == "undefined"
    ) {
      throw Error(
        "Function validateCardDates: One or more HTML elements are undefined!"
      );
    }

    let dateSince = parseTxtToDate(form_sinceDate);
    let dateValid = parseTxtToDate(form_validDate);

    if (typeof dateSince != "undefined" || typeof dateValid != "undefined") {
      let formatedDate = "";
      if (typeof dateSince != "undefined") {
        formatedDate = fomartedDateToMMYY(dateSince);
        card_since.innerText = formatedDate;
        form_sinceDate.value = formatedDate;
      }

      if (typeof dateValid != "undefined") {
        formatedDate = fomartedDateToMMYY(dateValid);
        card_valid.innerText = formatedDate;
        form_validDate.value = formatedDate;
      }
    }

    if (typeof dateSince != "undefined" && typeof dateValid != "undefined") {
      if (dateValid >= dateSince) {
        FormHighLightElement(form_sinceDate, false);
        FormHighLightElement(form_validDate, false);
        isDatesValid = true;
      } else {
        FormHighLightElement(form_sinceDate, true);
        FormHighLightElement(form_validDate, true);
        isDatesValid = false;
        alert("A data de Expedição não pode ser maior que a data de validade!");
      }
    } else {
      FormHighLightElement(form_sinceDate, false);
      FormHighLightElement(form_validDate, false);
      isDatesValid = false;
    }

    enableSendButton();
  } catch (error) {
    console.log(error);
  }
}
form_sinceDate.addEventListener("change", validateCardDates);
form_validDate.addEventListener("change", validateCardDates);

//#endregion

//#region Form Buttom Handling

// Botão do formulário
function enableSendButton() {
  try {
    if (typeof form_button != "undefined") {
      if (isNumberValid && isDatesValid && isCvcValid && isNameValid) {
        form_button.disabled = false;
      } else {
        form_button.disabled = true;
      }
    } else {
      throw Error(
        "Function toggleSendButton: HTML element with id=submit_button not found!"
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function validate() {
  if (isNumberValid && isDatesValid && isCvcValid && isNameValid) {
    alert("Cartão registrado com sucesso!");
  } else {
    if (!isDatesValid) {
      alert(
        "Os valores inseridos para data de expiração e/ou validade, são invalidos!"
      );
    }
    if (!isCvcValid) {
      alert("O Numero inserido para o cvc esta incorreto!");
    }
    if (!isNumberValid) {
      alert("O Numero inserido para o cartão esta incorreto!");
    }
    if (!isNameValid) {
      alert("O Nome inserido é invalido!");
    }
  }
}
form_button.addEventListener("click", validate);
enableSendButton();

//#endregion

//#region Card Number Handling
//Card Number
function formatedCardNumber(val) {
  try {
    if (typeof form_number == undefined) {
      throw Error("Function formatedCardNumber: form_number is undefined!");
    } else {
      let newval = "";
      for (let index = 0; index < val.length; index++) {
        if (index % 4 == 0 && index > 0) {
          newval = newval.concat(" ");
        }
        newval = newval.concat(val[index]);
      }
      return newval;
    }
  } catch (error) {}
}

function validateCardNumber() {
  try {
    if (typeof card_number != "undefined") {
      let val = form_number.value;
      val = val.replaceAll(regEx, "");
      if (val.length == max_card_digits && /[0-9]/g.test(val)) {
        let formatedNumber = formatedCardNumber(val);
        card_number.innerText = formatedNumber;
        form_number.value = formatedNumber;
        isNumberValid = true;
        FormHighLightElement(form_number, false);
      } else {
        if (val.length == 0) {
          FormHighLightElement(form_number, false);
        } else {
          console.log("Chamando");
          FormHighLightElement(form_number, true);
        }
        isNumberValid = false;
      }
      enableSendButton();
    } else {
      throw Error(
        "Function formatCardNumber: variable card_number is undefined"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
form_number.addEventListener("change", validateCardNumber);
//#endregion

//#region Card CVC Handling

function validateCvc() {
  try {
    if (typeof form_cvc == "undefined" || card_cvc == "undefined") {
      throw Error(
        "Function validateCvc: one or more html elements are undefined!"
      );
    } else {
      let insertedCvc = form_cvc.value;
      insertedCvc = insertedCvc.replace(regEx, "");

      if (insertedCvc.length != 3 && insertedCvc.length > 0) {
        FormHighLightElement(form_cvc, true);
        isCvcValid = false;
        alert("O cvc deve consister de 3 numeros!");
      } else {
        FormHighLightElement(form_cvc, false);
        isCvcValid = true;
      }
    }

    enableSendButton();
  } catch (error) {
    console.log(error);
  }
}
form_cvc.addEventListener("change", validateCvc);

//#endregion

//#region Card Name Handling

function validateName() {
  try {
    isNameValid = false;
    if (typeof form_name == "undefined" || typeof card_name == "undefined") {
      throw Error(
        "function validateName: One or more required HTML element are undefined!"
      );
    } else {
      let name = form_name.value;
      if (name == "" || name.length <= 3) {
        isNameValid = false;
        FormHighLightElement(form_name, true);
      } else {
        FormHighLightElement(form_name, false);
        isNameValid = true;
        card_name.innerHTML = form_name.value;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
form_name.addEventListener("change", validateName);

//#endregion

//#region Card Flip Anim

//Card Flip Animations
function flipcard() {
  try {
    if (
      typeof card_container != "undefined" &&
      typeof card_info != "undefined"
    ) {
      card_info.classList.toggle("flipping");
    } else {
      throw Error(
        "Function flipcard(): HTML elements with id 'cardInfo' not Found!"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
form_cvc.addEventListener("focusin", flipcard);
form_cvc.addEventListener("focusout", flipcard);

//#endregion

//#region Card Elements HighLight

//Card Elements HighLight
function cardHighLightElement(element) {
  try {
    if (typeof element != "undefined") {
      switch (element) {
        case card_number:
          card_number.classList.toggle("highlightBorder");
          break;
        case card_name:
          card_name.classList.toggle("highlightBorder");
          break;
        case card_since:
          card_since.classList.toggle("highlightBorder");
          break;
        case card_valid:
          card_valid.classList.toggle("highlightBorder");
          break;
        case card_cvc:
          card_cvc.classList.toggle("highlightBorder");
          break;
        default:
          break;
      }
    } else {
      throw Error(`Function cardHighLightElement: ${element} is undefined!`);
    }
  } catch (error) {
    console.log(error);
  }
}
form_number.addEventListener("focusin", function () {
  cardHighLightElement(card_number);
});
form_number.addEventListener("focusout", function () {
  cardHighLightElement(card_number);
});

form_name.addEventListener("focusin", function () {
  cardHighLightElement(card_name);
});
form_name.addEventListener("focusout", function () {
  cardHighLightElement(card_name);
});

form_sinceDate.addEventListener("focusin", function () {
  cardHighLightElement(card_since);
});
form_sinceDate.addEventListener("focusout", function () {
  cardHighLightElement(card_since);
});

form_validDate.addEventListener("focusin", function () {
  cardHighLightElement(card_valid);
});
form_validDate.addEventListener("focusout", function () {
  cardHighLightElement(card_valid);
});

form_cvc.addEventListener("focusin", function () {
  cardHighLightElement(card_cvc);
});
form_cvc.addEventListener("focusout", function () {
  cardHighLightElement(card_cvc);
});
//#endregion

export const esvalido = (e) => {
  //   const objeto = new Object();
  e.preventDefault();
  const obj = {};
  const campos = [...e.target].filter((elemento) => {
    return elemento.hasAttribute("required");
  });

  //   console.log(e.target.children);

  const radios = [...campos].filter((elemento) => {
    return elemento.type === "radio";
  });

  const campo_radio = radios.find((radio) => radio.checked) || [];
  console.log(checkbox);
  
  if (campo_radio.length === 0) {
    obj[radios[0].name] = "";
  } else {
    obj[campo_radio.name] = campo_radio.value;
  }

//   const campo_checkbox = checkbox.filter((e)) => e.checked

  campos.forEach((campo) => {
    switch (campo.tagName) {
      case "INPUT":
        // console.log(campo.value);
        if (campo.type) {
            
        }
        if (campo.value.trim() === "") {
          campo.classList.add("error-message");
          objeto[campo.name] = campo.type;
        }

        break;

      case "SELECT":
        // console.log(campo.value);
        if (campo.selectedIndex == 0) {
          campo.classList.add("error-message");
          objeto[campo.name] = campo.type;
        }

      default:
        break;
    }
    // console.log(objeto);

    // console.log(campo);
    // if (campo.value === "") {
    //   campo.classList.add("error");
    // }

    // console.log(campo.selectedIndex);
  });
  return obj;
};

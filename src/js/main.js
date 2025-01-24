document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const toggleButton = document.getElementById("theme-toggle"); // Botão para alternar o tema
  
    // Função para aplicar ou remover a classe light-mode
    const applyTheme = (theme) => {
      // Aplica ou remove a classe light-mode no body e nos filhos
      if (theme === "light") {
        body.classList.add("light-mode");
        toggleButton.innerHTML = '<i class="bi bi-moon"></i>';
      } else {
        body.classList.remove("light-mode");
        toggleButton.innerHTML = '<i class="bi bi-brightness-high"></i>';
      }
  
      // Aplica a classe em todos os filhos do body
      const allElements = body.querySelectorAll('*'); // Todos os elementos filhos
      allElements.forEach((element) => {
        if (theme === "light") {
          element.classList.add("light-mode");
        } else {
          element.classList.remove("light-mode");
        }
      });
    };
  
    // Aplica o tema salvo no localStorage, se houver
    if (savedTheme === "light") {
      applyTheme("light");
    } else {
      applyTheme("dark");
    }
  
    // Exemplo de função para alternar o tema ao clicar no botão
    toggleButton.addEventListener("click", () => {
      const newTheme = body.classList.contains("light-mode") ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Salva o tema no localStorage
      applyTheme(newTheme); // Aplica o novo tema
    });
  });
  
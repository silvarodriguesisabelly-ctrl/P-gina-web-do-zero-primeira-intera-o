const botoes = document.querySelectorAll("article button");

        botoes.forEach(function(botao) {
            let curtiu = false;
            
            botao.addEventListener("click", function() {
                let texto = botao.querySelector("span");
                let valorAtual = parseInt(texto.textContent); 

                if (curtiu === false) {
                    valorAtual++;   
                    curtiu = true;
                    botao.style.backgroundColor = "#ffaa00"; 
                } else {
                    valorAtual--;   
                    curtiu = false;
                    botao.style.backgroundColor = "#ffcc00"; 
                }

                texto.textContent = valorAtual; 
            });
        });

        
        const btnTema = document.getElementById("theme-toggle");
        const body = document.body;

        
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark-mode");
        }

        btnTema.addEventListener("click", function() {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
// =========================
// RELÓGIO DIGITAL

// Função responsável por atualizar o horário na tela
function atualizarRelogio() {

  // Cria um objeto Date com a data e hora atuais do sistema
  const agora = new Date();

  // Obtém a hora atual (0–23) e garante dois dígitos
  const horas = String(agora.getHours()).padStart(2, '0');

  // Obtém os minutos atuais (0–59) e garante dois dígitos
  const minutos = String(agora.getMinutes()).padStart(2, '0');

  // Obtém os segundos atuais (0–59) e garante dois dígitos
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  // Junta horas, minutos e segundos no formato HH:MM:SS
  const relogio = `${horas}:${minutos}:${segundos}`;

  // Atualiza o texto do elemento <h1 id="clock"> com o horário atual
  document.getElementById('clock').textContent = relogio;
}

// Executa a função a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Executa a função imediatamente ao carregar a página
// (evita esperar 1 segundo para mostrar a hora)
atualizarRelogio();


// =========================
// TEMA CLARO / ESCURO

// Seleciona o botão responsável por alternar o tema
const toggleButton = document.getElementById('theme-toggle');

// Seleciona o ícone dentro do botão
const icon = toggleButton.querySelector('.material-icons');

// Adiciona um evento de clique ao botão
toggleButton.addEventListener('click', () => {

  // Alterna a classe "light" no elemento <body>
  // Se existir, remove; se não existir, adiciona
  document.body.classList.toggle('light');

  // Verifica qual tema está ativo
  if (document.body.classList.contains('light')) {

    // Se o tema claro estiver ativo, mostra o ícone de lua (modo escuro)
    icon.textContent = 'dark_mode';

  } else {

    // Se o tema escuro estiver ativo, mostra o ícone de sol (modo claro)
    icon.textContent = 'light_mode';
  }
});

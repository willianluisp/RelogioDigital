// Função que atualiza o relógio na tela
function atualizarRelogio() {
    // Cria um objeto Date com a data/hora atual
    const agora = new Date();
  
    // Pega a hora atual e formata com dois dígitos (ex: 08 em vez de 8)
    const horas = String(agora.getHours()).padStart(2, '0');
  
    // Pega os minutos e formata com dois dígitos
    const minutos = String(agora.getMinutes()).padStart(2, '0');
  
    // Pega os segundos e formata com dois dígitos
    const segundos = String(agora.getSeconds()).padStart(2, '0');
  
    // Monta uma string com o horário completo no formato HH:MM:SS
    const relogio = `${horas}:${minutos}:${segundos}`;
  
    // Atualiza o conteúdo do elemento <h1 id="clock"> com a hora atual
    document.getElementById('clock').textContent = relogio;
  }
  
  // Chama a função a cada 1000 milissegundos (1 segundo)
  setInterval(atualizarRelogio, 1000);
  
  // Executa a função imediatamente ao carregar a página (sem esperar 1 segundo)
  atualizarRelogio();
  
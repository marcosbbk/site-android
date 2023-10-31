// Mostra o botão de volta ao topo quando o usuário rola para baixo 20px da parte superior da página
window.onscroll = function() {mostrarBotao()};
function mostrarBotao() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("voltarAoTopo").style.display = "block";
  } else {
    document.getElementById("voltarAoTopo").style.display = "none";
  }
}

// Quando o usuário clica no botão, vá para o topo da página
function voltarAoTopo() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
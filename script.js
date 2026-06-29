// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('formContato').addEventListener('submit', function(event) {
    // Impede o recarregamento da página ao enviar
    event.preventDefault(); 
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica, verifica se os campos estão preenchidos
    if(nome && email && mensagem) {
        // Simulação de envio com sucesso conforme solicitado
        alert("Mensagem enviada com sucesso!");
        
        // Limpa o formulário depois da confirmação
        this.reset(); 
    } else {
        // Alerta de erro caso algum campo esteja vazio
        alert("Por favor, preencha todos os campos.");
    }
});
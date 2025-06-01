function enviar() {
    //nao carregar a pagina ao clicar no botao
    event.preventDefault()
    
    Swal.fire({
        title: "Parabens!",
        text: " voce ganhou 3000 mil reais tao real quanto o mundial do palmeiras",
        icon: "success"
      });


}
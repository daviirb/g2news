$(document).ready(function(){
    
    $('.form-noticia').on('submit', function(e) {
        e.preventDefault();
        
        const tituloNoticia = $('#tituloNoticia').val();
        const descricaoNoticia = $('#descricaoNoticia').val();
        const textoNoticia = $('#textoNoticia').val();
        console.log('Botao cadastrar clicado');

        novaNoticia = $('<div class="col-sm-12 col-md-6 col-lg-4 p-4"></div');

        $(` 
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">${tituloNoticia}</h1>
                <p class="card-text">${textoNoticia}</p>
            </div>
                <div class="card-footer text-center">
                    <a href="#" class="btn btn-primary">SAIBA MAIS</a>
                </div>
        </div>
        `).appendTo(novaNoticia);

        $(novaNoticia).appendTo('.noticias');

        $('#tituloNoticia').val(' ');
        $('#textoNoticia').val(' ');
        alert('Notícia Cadastrada com sucesso!');
        
    });

    $('.form-categoria').on('submit', function(e) {
        e.preventDefault();
        const nomeCategoria = $('#nomeCategoria').val();

        novaCategoria = $(`<option value="${nomeCategoria}">${nomeCategoria}</option>`);
        $(novaCategoria).appendTo('.form-cat');
        $('#nomeCategoria').val(' ');
        alert('Notícia Cadastrada com sucesso!');

    });

    $('.form-noticia').on('submit', function(e) {
        e.preventDefault();
        
        const tituloNoticia = $('#tituloNoticia').val();
        const descricaoNoticia = $('#descricaoNoticia').val();
        const textoNoticia = $('#textoNoticia').val();
        console.log('Botao cadastrar clicado');

        novaNoticia = $('<div class="col-sm-12 col-md-6 col-lg-4 p-4"></div');

        $(` 
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">${tituloNoticia}</h1>
                <p class="card-text">${textoNoticia}</p>
            </div>
                <div class="card-footer text-center">
                    <a href="" class="btn btn-primary">SAIBA MAIS</a>
                </div>
        </div>
        `).appendTo(novaNoticia);

        $(novaNoticia).appendTo('.noticias');

        $('#tituloNoticia').val(' ');
        $('#textoNoticia').val(' ');
        alert('Notícia Cadastrada com sucesso!');
        
    });

})

//JSON
let prestadores = [
    {
        "nome":"felipe1",
        "atuação":["home-care","fisioterapia","medico"],
        "imagem":"grounded-coffee-shop-logo.jpg"
    },
    {
        "nome":"felipe",
        "atuação":["saude"],
        "imagem":"grounded-coffee-shop-logo.jpg"
    },
    {
        "nome":"felipe",
        "atuação":["transporte"],
        "imagem":"grounded-coffee-shop-logo.jpg"
    },
    {
        "nome":"felipe2",
        "atuação":["home-care"],
        "imagem":"grounded-coffee-shop-logo.jpg"
    }
];
//Valida se o que foi enviado, coincide com alguma atuação
function checkForMatch(string,array){
    for(i=0; i < array.length; i++ ){
        if(array[i].toLowerCase().includes(string.toLowerCase()) || string.toLowerCase().includes(array[i].toLowerCase())){
            return true
        }
    }
    return false;
}
//busca os dados que estão no JSON e filtra se necessario
function busca(area) {
    $('div').remove(".resultado-prestador")
    var filtrado = []
    if(area != null){
        filtrado = prestadores.filter(prestador => {
            return checkForMatch(area,prestador.atuação)
        })
    } 
    else {
        filtrado = prestadores
    }
    filtrado.forEach(prestador => {
        insereHTML(prestador);
    });
}
//Monta HTML e coloca na pagina 
function insereHTML(prestador){
    var html = '<div class="col-lg-4 col-md-6 col-sm-8 col-10 resultado-prestador">';
    html += '<div class="blog-post">';
    html += '<div class="image" style="margin-left:60px;">';
    html += '<img src="./images/'+prestador.imagem+'" width="200px" height="150px" alt="post-image" class="img-fluid">';
    html += '</div>';
    html += '<div class="post-content">';
    html += '<div class="post-title">';
    html += '<h5><a href="#">'+prestador.nome+'</a></h5>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $(".row-resultado").append(html)
}
//dispara busca quando página carrega
$(document).ready(function() {
    busca(null)
});
//Dispara busca quando clica nas categorias
$(".filtro-busca").click(function(){
    busca(this.name)
});
//Dispara busca quando clica no buscar
$("#buscar").click(function(){
    busca($("#input-buscar").val())
});
//Dispara busca quando clica enter dentro do input da busca
$('#input-buscar').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        busca($("#input-buscar").val());
    }
});

//JSON
let prestadores = [
    {
        "nome":"Psicólogo",
        "atuação":["home care","fisioterapia","medico"],
        "descricao":"Psicólogos que fazem consultas na sua casa.",
        "imagem":"psicologoshomecare.jpg",
        "telefone":"(11) 99998-9109",
        "site":"https://www.saidsp.com"
    },
    {
        "nome":"Vacinas",
        "atuação":["saude","vacina","medico"],
        "descricao":"Médicos que vão até sua casa para aplicar medicamentos.",
        "imagem":"vacinaemcasa.jpeg",
        "telefone":"(11) 3042-1442",
        "site":"https://beepsaude.com.br/"
    },
    {
        "nome":"Táxis Adaptados",
        "atuação":["transporte","taxi"],
        "descricao":"Táxis adaptados para pessoas com deficiência. Destina-se, exclusivamente, às pessoas com autismo, surdocegueira ou deficiência física e mobilidade altamente reduzida.",
        "imagem":"unnamed.jpg",
        "telefone":"(11)96865-9246",
        "site":"http://www.sptrans.com.br/atende/"
    },
    {
        "nome":"Nutricionista",
        "atuação":["nutricionista","home care"],
        "descricao":"Nutricionistas que fazem consulta em casa.",
        "imagem":"nutricionistaemcasa.jpeg",
        "telefone":"(11) 97518-8167",
        "site":"http://www.homeangels.com.br/sp-vilamariana/"
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
    var html = '<div class="col-sm"><div class="card h-70 resultado-prestador" style="width: 18rem;">';
    html += '<img class="card-img-top" src="img/'+prestador.imagem+'">';
    html += '<div class="card-body">';
    html += '<h5 class="card-title">'+prestador.nome+'</h5>';
    html += '<p class="card-text">'+prestador.descricao+'</p>';
    html += '<a href="'+prestador.telefone+'" class="card-link">Tel: '+prestador.telefone+'</a>';
    html += '<a href="'+prestador.site+'" class="card-link">Visite nosso Site.</a>';
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

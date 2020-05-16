//JSON
let prestadores = [
    {
        "nome":"Psicólogo",
        "atuação":["home care","fisioterapia","medico"],
        "descricao":"Atendimento psicológico home care está disponível para famílias e pessoas que têm dificuldade para se locomover até o consultório, seja por limitações logísticas, clínicas ou físicas. No ambiente domiciliar o psicólogo pode acompanhar a realidade do paciente, analisar as contingências do ambiente em relação ao paciente.",
        "imagem":"psicologoshomecare.jpg",
        "telefone":"(11) 99998-9109",
        "site":"https://www.saidsp.com"
    },
    {
        "nome":"Vacinas",
        "atuação":["saude","vacina","medico"],
        "descricao":"Médicos que aplicam vacinas em domicílio. Todas nossas vacinas são da mais alta qualidade, isto é, são acelulares, desta forma tem menos probabilidade de provocar reações como febre, edema, entre outras.",
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
        "descricao":"Atendimento nutricionista domiciliar, gerenciado por profissionais altamente capacitados a realizar um atendimento completo, precedido de avaliação para formulação de um plano alimentar programado de forma individual e personalizado, de acordo com as necessidades nutricionais de cada paciente.",
        "imagem":"nutricionistaemcasa.jpeg",
        "telefone":"(11) 97518-8167",
        "site":"http://www.homeangels.com.br/sp-vilamariana/"
    },

    {
        "nome":"Cuidador de Idosos",
        "atuação":["cuidadores","home care"],
        "descricao":"Cuidadores profissionais que ajudarão seu familiar idoso nas tarefas. o Cuidador faz para o idoso apenas o que o mesmo não consegue realizar sozinho e incentiva atividades adequadas à sua capacidade atual, mas também está junto quando a limitação é grande, preservando a dignidade do assistido.",
        "imagem":"cuidadordeidosos.png",
        "telefone":"(11) 97518-8167",
        "site":"https://www.prontocare.com.br/"
    },

    {
        "nome":"Fonodiaulogia Domiciliar",
        "atuação":["saude","medico"],
        "descricao":"A fonoaudiologia domiciliar atua na prevenção e tratamento de patologias relacionadas à comunicação, abrangendo inclusive problemas relacionados à fala e o aperfeiçoamento dos aspectos fonoaudiológicos: da função auditiva periférica, distúrbios do processamento auditivo e da linguagem oral e escrita.",
        "imagem":"fonoaudiologia.jpg",
        "telefone":"(11) 3042-1442",
        "site":"https://www.prontocare.com.br/"
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
    $('div').remove(".resultado-prestador");
    $(".row-resultado .col-sm").remove();
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

var displayedType = ''

$( document ).ready(function() {
  for(var i=1; i<19; i++){
   renderPokemonFromAPI(i)
  }
  $(".pokemon").click(renderProfile)
  $(document).on('click', '.abilities div', function(event){
    var currentType = $(event.target).html()
    if(displayedType == currentType){
      $('.item').show()
      displayedType = ''
    }
    else {
    $('.item').hide()
    $('.' + currentType).parents('.item').show()
    displayedType = currentType
    }
  })
});

var renderProfile = function(event){
  $("#item-profile").html($(event.target).children(".hidden-info").html()).show();
}
    
var statisticRow = function(label, value) {
  resalt = '<tr><td><font size="3px" face="Verdana" color="black";>'+label+
  '</font></td><td><font size="3px" face="Verdana" color="black";>'+value+'</font></td></tr>'
  return resalt;
  }

var content = '<img src="http://pokeapi.co/media/img/19.png"><div>'

var table = '</div><table>'

var tableEnd = '</table>'

var currentInfo={}

var parseData = function(d){
  currentInfo.name = d.name
  currentInfo.weight = d.weight
  types = []
  for(var i = 0; i < d.types.length; i++) {
    types[i] = d.types[i].type.name
  }
  currentInfo.types = types
  currentInfo.totalMoves = d.moves.length
  for(var i = 0; i < d.stats.length; i++) {
    currentInfo[d.stats[i].stat.name] = d.stats[i].base_stat
  }
}

var  renderPokemonFromAPI = function(id){
$.get( "http://pokeapi.co/api/v2/pokemon/"+id, function( data ) {
    $( "#item"+data.id+" .name").html( data.name );
    console.log(data); 
    console.log("#item"+data.id+" .name");
  parseData(data)
  var profileImage = '<img src="http://pokeapi.co/media/img/'+data.id+'.png" width="150" height="150"><div>'
  var profileTable = table + 
    statisticRow('Type', currentInfo.types[0]) + 
    statisticRow('Attack', currentInfo.attack) + 
    statisticRow('Defense', currentInfo.defense) + 
    statisticRow('HP', currentInfo.hp) + 
    statisticRow('SP Attack', currentInfo['special-attack']) + 
    statisticRow('SP Defense', currentInfo['special-defense']) + 
    statisticRow('Speed', currentInfo.speed) + 
    statisticRow('Weight', currentInfo.weight) + 
    statisticRow('Total moves', currentInfo.totalMoves) + 
    tableEnd
  $( "#item"+data.id+" .hidden-info" ).html( profileImage+data.name+" "+"#"+data.id+profileTable );
  $(".pokemon").click(renderProfile);
  for(var y = 0; y < data.types.length; y++) {
      data.types[y].type.name
      prefContent = $("#ability-" + (data.id)).html()
      typeContent = prefContent + '<div class="'+ data.types[y].type.name +' type">'+ data.types[y].type.name +"</div>"
      $("#ability-" + (data.id)).html(typeContent);
    };
  });
};

var newDivsStart = '\
<div id="item'

var newDivsImage = '" class="item pokemon"><img src="http://pokeapi.co/media/img/'

var newDivsTypes = '.png" width="100" height="100">\
<div class="name"></div>\
<div class="abilities" id="ability-'

var newDivsEnd = '"></div><div class="hidden-info"></div></div>'
function displ() {
  var visiblePokemonsCount = $('.item').length;
    for(var i = visiblePokemonsCount; i < (visiblePokemonsCount + 3); i++) {
    $('#item'+ i).after(newDivsStart + (i+1) + newDivsImage + (i+1) + newDivsTypes + (i+1) + newDivsEnd)
    renderPokemonFromAPI(i+1)
  }
}
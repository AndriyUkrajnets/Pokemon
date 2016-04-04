$( document ).ready(function() {
    $(".holder").click(function(event){
  $("#Pokemon-details").html($(event.target).children(".hidden-info").html());
  })

var row = function(name, v){
  return '<tr><td>' + name + '</td><td>' + v + '</td></tr>'
}

var currentInfo = {}

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

for(var i = 1; i < 13; i++) {
  $.get("http://pokeapi.co/api/v2/pokemon/" +i, function (data){
    for (var z = 0; z < data.types.length; z++) {
      data.types[z].type.name
      $("#pokemon-" + (data.id)).html(data.name);     
      }

    parseData(data);
    $('#profile-table').html(
      '<table>' +
      row('Name', currentInfo.name) +
      row('Type', currentInfo.types[0]) +
      row('Attack', currentInfo.attack) +
      row('Defense', currentInfo.defense) +
      row('HP', currentInfo.hp) +
      row('SP Attack', currentInfo['special-attack']) +
      row('SP Defense', currentInfo['special-defense']) +
      row('Speed', currentInfo.speed) +
      row('Weight', currentInfo.weight) +
      row('Total Moves', currentInfo.totalMoves) +
      '</table>'
    )

    for(var y = 0; y < data.types.length; y++) {
      data.types[y].type.name
      prefContent = $("#ability-" + (data.id)).html()
      typeContent = prefContent + "<div class=\""+ data.types[y].type.name +" type\">"+ data.types[y].type.name +"</div>"
      $("#ability-" + (data.id)).html(typeContent);
      }
    })
  }
})

/*function displ(loadMore) {
  if (document.getElementById(loadMore).style.display == 'none') {
    document.getElementById(loadMore).style.display = 'block'} 
    else {document.getElementById(loadMore).style.display = 'none'} 
};*/





/*$(function(){
var previous = "none";
$(".form").click(function(e){
  current = $(e.target).parents(".form").children(".pokemon-name").children("input").val();
  $("#character").html($(e.target).parents(".form").children(".hidden-info").html());
    if(previous == current){
        $("#character").css('display','none');
        previous = "none";
    }else{
        $("#character").css('display','block');
        previous = current;
    }
  });
});*/

// Status API Training Shop Blog About
// © 2016 GitHub, Inc. Terms Privacy Security Co
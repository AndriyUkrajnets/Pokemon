var currentInfo = {}

var div = function(v){
  return '<div>' + v + '</div>'
}

var row = function(name, v){
  return '<tr><td>' + name + '</td><td>' + v + '</td></tr>'
}

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
    $('#profile-row').html(
      div('Name') + div(currentInfo.name) + 
      div('Type') + div(currentInfo.types[0]) + 
      div('Attack') + div(currentInfo.attack) +
      div('Defense') + div(currentInfo.attack) +
      div('HP') + div(currentInfo.attack) +
      div('SP Attack') + div(currentInfo.attack) +
      div('SP Defense') + div(currentInfo.attack) +
      div('Speed') + div(currentInfo.attack) +
      div('Weight') + div(currentInfo.weight) +
      div('Total Moves') + div(currentInfo.totalMoves)
    )

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
  });
};


$(function(){
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
});

// Status API Training Shop Blog About
// © 2016 GitHub, Inc. Terms Privacy Security Co
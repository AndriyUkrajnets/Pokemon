profileContentStart = '\<div class="picture-profile"><img src="';
profileName = '"></div>\<div class="pokemon-name-profile">';
profileAbilities = '\</div>\<div class="abilities-profile">';
profileContentEnd = '</div>';
for(var i = 1; i < 13; i++) {
  $.get("http://pokeapi.co/api/v2/pokemon/" +i, function (data){
  	for (var z = 0; z < data.types.length; z++) {
  		data.types[z].type.name
  		$("#pokemon-" + (data.id)).html(data.name);
    	$("#pokemon-" + (data.id)).siblings(".hidden-info").html(profileContentStart + data.sprites.front_default + profileName + data.name + profileAbilities
    	+ data.types[z].type.name + profileContentEnd);
    	$("#pokemon-" + (data.id)).append('<input type="hidden" value="'+ data.id +'">');	
  	}
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
// � 2016 GitHub, Inc. Terms Privacy Security Co
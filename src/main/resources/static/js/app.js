app = (function (){
    var api = apimock;
    var editTable = function (blueprints) {
        if(blueprints){
            $("#table tbody").empty();
            var i =0;
            $("#table tbody").append(
                blueprints.map(function(blueprint){
                i+= blueprint.points.length;
                return  '<tr><td id="name">'+ blueprint.name +
                        '</td><td id="points">'+ blueprint.points.length +
                        '</td><td ><button class="btn btn-success"> Open</button>'+
                        '</td></tr>';
                })
            );
            $("#puntosLabel").text(i);
            $("#autorLabel").text(author);
        }
    };
    return {
            plansAuthor: function () {
                author = document.getElementById("autor").value;
                api.getBlueprintsByAuthor(author,editTable);
                }
        };
    })();
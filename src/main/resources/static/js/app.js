app = (function (){
    var api = apiclient;
    var editTable = function (blueprints) {
        if(blueprints){
            $("#table tbody").empty();
            var i =0;
            $("#table tbody").append(
                blueprints.map(function(blueprint){
                i+= blueprint.points.length;
                return  '<tr><td id="name">'+ blueprint.name +
                        '</td><td id="points">'+ blueprint.points.length +
                        '</td><td ><button class="btn btn-success" onclick="app.drawcanvas(\''+
                        blueprint.name+'\',\''+blueprint.author+'\')"> Opens </button>'+
                        '</td></tr>';
                })
            );
            $("#puntosLabel").text(i);
            $("#autorLabel").text(author);
        }
    }
    var editCanvas = function (blueprint) {
        if (blueprint){
            var c = document.getElementById("canvas");
            var ctx = c.getContext("2d");
            var points = blueprint.points;
            ctx.beginPath();
            console.log(points);
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0,c.width,c.height);
            ctx.moveTo(points[0].x,points[0].y);
            points.forEach( function(point){
                ctx.lineTo(point.x,point.y)
            });
            ctx.stroke();
        }
    };
    return {
            plansAuthor: function () {
                author = document.getElementById("autor").value;
                api.getBlueprintsByAuthor(author,editTable);
                },
            drawcanvas: function(name,author){
                api.getBlueprintsByNameAndAuthor(name,author,editCanvas);
          }
        };
    })();
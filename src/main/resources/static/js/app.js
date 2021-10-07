app = (function (){
    var api = apiclient;
    var actualBp = {};

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
                        blueprint.name+'\',\''+blueprint.author+'\'),app.eventListener()"> Opens </button>'+
                        '</td></tr>';
                })
            );
            $("#puntosLabel").text(i);
            $("#autorLabel").text(author);
        }
    }
    var editCanvas = function (blueprint) {
        actualBp = blueprint;
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0,c.width,c.height);
        if (blueprint){

            var points = blueprint.points;

            console.log(points);
            if(points.length!=0) {

                ctx.moveTo(points[0].x, points[0].y);
                points.forEach(function (point) {
                    ctx.lineTo(point.x, point.y)
                });
                ctx.stroke();
            }
        }
    };


    var eListener = function(){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");

        c.addEventListener("mousedown", function(event){
            /*var rect = c.getBoundingClientRect();
            pos = [event.clientX-rect.left,event.clientY-rect.top]
            tempList.push([pos[0],pos[1]])
            console.log(pos[0]+":"+pos[1]+":"+ux+":"+uy)
            actualBp.points.push({
                x: pos[0],
                y: pos[1]
            });*/
            setPoints(c)
            editCanvas(actualBp)
            /*if ( ux== null || uy == null){
                ux = pos[0];
                uy = pos[1];
            }else{
                ctx.moveTo(ux,uy);
                ctx.lineTo(pos[0],pos[1]);
                ctx.stroke();
                ux = pos[0];
                uy = pos[1];
            }*/
        });

    }
    function setPoints(canvas){
        var rect = canvas.getBoundingClientRect();
        var x,y;
        x = event.pageX - rect.left - scrollX;
        y = event.pageY - rect.top - scrollY;
        x /= rect.width;
        y /= rect.height;
        x *= canvas.width;
        y *= canvas.height;
        actualBp.points.push({x:x,y:y});
    };

    function prepareCreate(){
        actualBp = {
            author: "",
            name: "",
            points: []
        }
        console.log(actualBp);
        actualBp.author = prompt("ingrese nombre autor ", "");
        actualBp.name = prompt("ingrese el nombre del plano ", "");
        document.getElementById("autor").value = actualBp.author;
        author = actualBp.author;
        editTable([]);
        editCanvas(actualBp);

    }

    function updateButtons(actionSave,actionDelete){
        console.log("hola, si actualice")
        var buttonSave = document.getElementById("save");
        var buttonDelete = document.getElementById("delete");
        buttonDelete.onclick = actionDelete;
        buttonSave.onclick = actionSave;
        console.log(actionSave);
        console.log(actionDelete);
    }

    return {
        plansAuthor: function () {
            author = document.getElementById("autor").value;
            api.getBlueprintsByAuthor(author,editTable);
            updateButtons("","");

            editCanvas(null);
        },
        drawcanvas: function(name,author){

            api.getBlueprintsByNameAndAuthor(name,author,editCanvas);
            updateButtons(this.editBlueprint,this.deleteBlueprint)
        },
        eventListener: eListener,

        onclickCreate: function(){
            console.log("entrando function")
            prepareCreate();
            updateButtons(this.createBlueprint,"");

        },
        createBlueprint: function (){
            api.postBluePrint(actualBp,editTable);
            updateButtons(
                ()=>{
                api.putBluePrint(actualBp,editTable);
                },
                ()=>{
                api.deleteBlueprint(actualBp,editTable);
                updateButtons("","");
                editCanvas(null);
                });



        },

        editBlueprint: function (){
            api.putBluePrint(actualBp,editTable);
        },
        deleteBlueprint: function (){
            api.deleteBlueprint(actualBp,editTable);
            updateButtons("","");
            editCanvas(null);
        }


    };
})();
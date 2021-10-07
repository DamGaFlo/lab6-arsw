var apiclient = (function(){

    var getBlueprintsByAuthor = function(author, callback){
        $.ajax({
            url:  'http://localhost:8080/blueprints/'+author,
            type: 'GET',
            success:  function(data){ callback(data)},
            contentType: 'application/json'
        });
    }
    var getBlueprintsByNameAndAuthor = function(name,author,callback){
        $.ajax({
            url:  'http://localhost:8080/blueprints/'+author+"/"+name,
            type: 'GET',
            success:  function(data){ callback(data)},
            contentType: 'application/json'
        });
    }

    var putBluePrint = function(bp,callback) {
        var putPromise = $.ajax({
            url: 'http://localhost:8080/blueprints/' + bp.author + "/" + bp.name,
            type: 'PUT',
            data: JSON.stringify(bp),
            contentType: "application/json"
        });
        putPromise.then(
            function () {

                console.info("OK");
                return getBlueprintsByAuthor(bp.author, callback);
            },
            function () {
                console.info("ERROR");
            }
        );
    }
    var postBluePrint = function(bp,callback) {
        var putPromise = $.ajax({
            url: 'http://localhost:8080/blueprints',
            type: 'POST',
            data: JSON.stringify(bp),
            contentType: "application/json"
        });
        putPromise.then(
            function () {

                console.info("OK");
                return getBlueprintsByAuthor(bp.author, callback);
            },
            function () {
                console.info("ERROR");
            }
        );
    }
    var deleteBlueprint = function(bp,callback){
        var deletePromise = $.ajax({
            url: 'http://localhost:8080/blueprints/'+bp.author+"/"+bp.name,
            type: 'DELETE',
            contentType: "application/json"
        });
        deletePromise.then(
            function () {

                console.info("OK");
                return getBlueprintsByAuthor(bp.author,callback);
            },
            function () {
                console.info("ERROR");
            }

        );

        return deletePromise;
    }
    return{
        getBlueprintsByAuthor: getBlueprintsByAuthor,
        getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor,
        putBluePrint: function (bp,callback){
            putBluePrint(bp,callback);
        },
        deleteBlueprint: function (bp,callback){
            deleteBlueprint(bp,callback);
        },
        putBluePrint: function (bp,callback){
            putBluePrint(bp,callback)
        },
        postBluePrint: function (bp,callback){
            postBluePrint(bp,callback)
        }

    };
})();
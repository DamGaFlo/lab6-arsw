var apiclient = (function(){
    return{
        getBlueprintsByAuthor: function(author, callback){
            $.ajax({
                url:  'http://localhost:8080/blueprints/'+author,
                type: 'GET',
                success:  function(data){ callback(data)},
                contentType: 'application/json'
            });
        },
        getBlueprintsByNameAndAuthor: function(name,author,callback){
            $.ajax({
                url:  'http://localhost:8080/blueprints/'+author+"/"+name,
                type: 'GET',
                success:  function(data){ callback(data)},
                contentType: 'application/json'
            });
        }
    }
})();
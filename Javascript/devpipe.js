// Creating the class
var DevPipe = function(module_options) {
    // Private options used for construction
    var options = {
        host: "cloud.getdevpipe.com",
        port: 1000,
        project: 'undefined_project'
    };
    // Set the options if provided any.
    if (module_options !== null && module_options !== undefined && module_options !== 'undefined') {
        for (var opt in options) {
            if (module_options[opt] !== null && module_options[opt] !== undefined && module_options[opt] !== 'undefined') {
                options[opt] = module_options[opt];
            }
        }
    }

    var host = options.host;
    var port = options.port;
    var project = options.project;

    // Private method
    var sendMessage = function(message) {
        var url = "http://" + host + ":" + port + "/project/" + project;
        var json = JSON.stringify(message);

        var params = "message=" + json;
        var http = new XMLHttpRequest();
        http.open("POST", url, true);

        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.send(params);
    };

    // Begin public section
    return {
        log: function(json) {
            sendMessage(json);
        }
    };
};
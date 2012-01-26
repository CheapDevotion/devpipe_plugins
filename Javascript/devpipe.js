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

    //Support for IE 5, 5.5 and 6
	if (typeof XMLHttpRequest == "undefined")
	  XMLHttpRequest = function () {
	    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
	      catch (e) {}
	    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
	      catch (e) {}
	    try { return new ActiveXObject("Microsoft.XMLHTTP"); }
	      catch (e) {}
	    //Microsoft.XMLHTTP points to Msxml2.XMLHTTP and is redundant
	    throw new Error("This browser does not support XMLHttpRequest.");
	  };



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
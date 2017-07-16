module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body) {
        var dict = new Object();
        var cipher = req.body.cipher;
        var output = "";

        for(var key in cipher){
            dict[cipher[key].toString()] = key;
        }

        for(var i = 0; i < req.body.msg.length; i=i+2){
            output += dict[req.body.msg.slice(i, i+2)];
        }

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: 
                {
                    key : req.body.key,
                    result : output 
                }
        };
    }
    else {
        /*I ignored this section*/
        context.res = {
            status: 400,
            body: "Something critically failed, no request body."
        };
    }
    context.done();
};
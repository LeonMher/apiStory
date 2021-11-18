const syncRequest = require('sync-request')




module.exports = function getLCtime() {

    try {
        url = 'http://worldtimeapi.org/api/timezone/America/Chicago'
        response = syncRequest('GET', url)
        // convert response body to a string
        body_string = response.body.toString("utf8")
        // convert the response body string to JSON
        body_json = JSON.parse(body_string)



        let time = body_json.datetime
        let hour = time.substr(11, 5);
        let digit = time.substr(11, 2)


        return { hour, digit }


    } catch (e) {
        console.log("Error!")
        console.log(e)
        return ("error")
    }
}
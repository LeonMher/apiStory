const syncRequest = require('sync-request')


module.exports = function getCountry() {
    try {
        url = 'https://restcountries.com/v3.1/all'
        response = syncRequest('GET', url)
        // convert response body to a string
        body_string = response.body.toString("utf8")
        // convert the response body string to JSON
        body_json = JSON.parse(body_string)

        let capital = body_json[0].capital
        let name = body_json[0].name.common


        return { capital, name }


    } catch (e) {
        console.log("Error!")
        console.log(e)
        return ("error")
    }
}

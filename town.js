const syncRequest = require('sync-request')


module.exports = function getCountry() {
    try {
        url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-cities-demographics&q=chicago'
        response = syncRequest('GET', url)
        // convert response body to a string
        body_string = response.body.toString("utf8")
        // convert the response body string to JSON
        body_json = JSON.parse(body_string)

        let chicago = body_json.records[0].fields.city


        return { chicago }


    } catch (e) {
        console.log("Error!")
        console.log(e)
        return ("error")
    }
}

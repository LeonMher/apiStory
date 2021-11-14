const syncRequest = require('sync-request')



module.exports = function getName() {
    try {
        url = 'https://api.openweathermap.org/data/2.5/weather?q=New York City&units=imperial&appid=dcedc9f6a3375687009f75babf7cb35b'
        response = syncRequest('GET', url)
        // convert response body to a string
        body_string = response.body.toString("utf8")
        // convert the response body string to JSON
        body_json = JSON.parse(body_string)
        let name = body_json.name
        let temp = body_json.main.temp
        return { name, temp }


    } catch (e) {
        console.log("Error!")
        console.log(e)
        return ("error")
    }
}














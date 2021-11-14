const syncRequest = require('sync-request')





module.exports = function getCovid() {
    try {
        url = 'https://coronavirus.m.pipedream.net/'
        response = syncRequest('GET', url)
        // convert response body to a string
        body_string = response.body.toString("utf8")
        // convert the response body string to JSON
        body_json = JSON.parse(body_string)
        let covidCountry = body_json.rawData[0].Country_Region
        let covidCases = body_json.rawData[0].Confirmed
        let covidDeathes = body_json.rawData[0].Deaths

        return { covidCountry, covidCases, covidDeathes }


    } catch (e) {
        console.log("Error!")
        console.log(e)
        return ("error")
    }
}
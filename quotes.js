const syncRequest = require('sync-request')




module.exports = function getQuotes() {

    try {
        url = 'https://quote-garden.herokuapp.com/api/v3/quotes'
        response = syncRequest('GET', url)
        // convert response body to a string
        body_string = response.body.toString("utf8")
        // convert the response body string to JSON
        body_json = JSON.parse(body_string)
        let quote = body_json.data[2].quoteText


        return { quote }


    } catch (e) {
        console.log("Error!")
        console.log(e)
        return ("error")
    }
}
const axios = require('axios')
const https = require('https')

const agent = new https.Agent({
    rejectUnauthorized: false
})

const baseUrl = 'https://158.251.4.250/webacs/api/v1/data/AccessPointDetails'

exports.get_ap_id = (req, res, next) => {
    const mac = req.body.data.macAddress
    console.log(mac)
    axios({
        url: baseUrl + ".json?" + mac,
        method: 'get',
        auth: {
            username: 'iot',
            password: 'Cprime_01'
        },
        httpsAgent: agent
    })
    .then(resp => {
        console.log(resp)
        var count = 0
        for(i in resp.data.queryResponse.entity){
            count=count+resp.data.queryResponse.entity[i].accessPointDetailsDTO.clientCount
        }
        res.status(200).json({
            message: {
                count: count,
                n: resp.data.queryResponse.entity.length,
                name: req.body.data.name
            }
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}


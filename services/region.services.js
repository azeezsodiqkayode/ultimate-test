const axios = require('axios').default


const getRegionDetails = async (region)=>{
    return axios({
        method: "get",
        url: `https://restcountries.com/v3.1/region/${region}`
    })
}
module.exports = {
    getRegionDetails
}
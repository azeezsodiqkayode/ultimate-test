const express = require('express')
const router = express.Router()
const {getRegionDetails} = require('../services/region.services')


const regionDetails = async(req, res) =>{

    const {region} =req.params
    try{
        const getRegionResponse = await getRegionDetails(region)
        const totalPopulation = getRegionResponse.data.reduce((acc, country) => acc + country.population, 0)

        const largestCountry = getRegionResponse.data.reduce((max, country) => (country.population > max.population ? country : max), getRegionResponse.data[0])
        const countryWithLargestPopulation = largestCountry.name.common
        res.status(200).send({
            status: true,
            message: `Total Population: ${totalPopulation}, Country with Highest Population: ${countryWithLargestPopulation}`
           
        })
    }
    catch(e){
        res.status(400).send({
            status: false,
            message: e.message
        })
    }



}




module.exports = {
    regionDetails
}
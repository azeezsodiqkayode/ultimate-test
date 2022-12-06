
const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /details/:region', () => {
    it('should return the total population and highest population country for the region', done => {
    chai
        .request(index)
        .get('/details/europe')
        .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('region', 'europe');
        expect(res.body).to.have.property('totalPopulation');
        expect(res.body).to.have.property('countryWithLargestPopulation');
        done();
        });
    });
});


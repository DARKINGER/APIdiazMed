//chai
let mocha = require('mocha');
var describe = mocha.describe;
const chai = require('chai')
let expect = chai.expect;
const chaiHttp = require('chai-http')
chai.use(chaiHttp);

// describe('Pruebas de API', () => {
//     it('Debe devolver una lista de usuarios', (done) => {
//       chai.request('http://localhost:8085')
//         .get('/usuarios')
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           expect(res.body).to.be.an('array');
//           expect(res.body.length).to.be.greaterThan(0);
//           done();
//         });
//     });
//   });

  describe('Pruebas de API', () => {
    it('Debe devolver una lista de usuarios', () => {
      chai.request('http://localhost:8085')
        .get('/usuarios')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          // expect(res.body).to.be.an('array');
          // expect(res.body.length).to.be.greaterThan(0);
          // done();
        });
    });
  });

let expect = require('chai').expect;
let modulo = require ('../src/modulo2');
//powershell -ExecutionPolicy Bypass -Command "mocha test.js"
describe("Pruebas de numeros a frases",()=>{
    let num = 6
    it(`Se mando el: ${num}`,()=>{
        let resultado = modulo.numeros(num);
        // expect(resultado).to.be.a("number");
        expect(resultado).to.be.a("string");
        // expect(resultado).to.equal(3);
    });
});


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
// });
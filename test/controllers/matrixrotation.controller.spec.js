var matrixRotation = require('../../controllers/matrixrotation.controller');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var fs = require('fs');
chai.use(chaiAsPromised);
chai.should();

describe('Matrix Rotation', function() {
    it('should rotate matrix', function() {
        var tests = [];
        require("fs").readdirSync('./test/controllers/testData/matrixrotation/input').forEach(function(file) {
            let inputFile  = fs.readFileSync('./test/controllers/testData/matrixrotation/input/' + file, 'utf8');
            let outputFile = fs.readFileSync('./test/controllers/testData/matrixrotation/output/' + file.replace('input', 'output'), 'utf8');
            const mnr = inputFile.split("\n")[0].replace(/\s+$/g, '').split(' ');
            const m = parseInt(mnr[0], 10);
            const n = parseInt(mnr[1], 10);
            const r = parseInt(mnr[2], 10);
            let input = Array(m);
            let output = Array(m);
            inputFile.split("\n").forEach((line, index) => {
                if (index > 0 && index <= m) {
                    input[index-1] = line.replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
                }
            });
            outputFile.split("\n").forEach((line, index) => {
                if (index <= m) {
                    output[index] = line.replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
                }
            });

            tests.push({matrix: input, r: r, output: output});
        });
        
        console.time('run');
        matrixRotation.run(tests[3].matrix, tests[3].r).should.be.deep.equal(tests[3].output);
        console.timeEnd('run');
        tests.forEach(test => {
//            matrixRotation.run(test.matrix, test.r).should.be.deep.equal(test.output);
        });
    });
});
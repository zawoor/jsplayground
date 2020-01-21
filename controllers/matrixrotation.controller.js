function MatrixRotation() {
    function run(n, r) {
        let layers = Math.min(n[0].length, n.length) / 2,
            matrix = n;

        for (let layer = 0; layer < layers; layer++) {
//            console.time('layer:' + layer);
            matrix = this.rotateLayer(matrix, layer, r);
//            console.timeEnd('layer:' + layer);
        }
       
        /*
        let print = matrix;
        print.forEach((el, i) => {
            print[i] = el.join(' ');
        });
        console.log(print.join("\n"));
        */
        return matrix;
    }

    function rotateLayer(matrix, layer, r) {
        let startX = 0 + layer;
        let startY = 0 + layer;
        let maxX = matrix[0].length - 1 - layer;
        let maxY = matrix.length - 1 - layer;

        //top
        let chain = [];
        for (let i = startX; i <= maxX; i++) {
            chain.push(matrix[startY][i]);
        }
        //right
        for (let i = startY + 1; i <= maxY - 1; i++) {
            chain.push(matrix[i][maxX]);
        }
        //down
        for (let i = maxX; i >= startX; i--) {
            chain.push(matrix[maxY][i]);
        }
        //left
        for (let i = maxY - 1; i >= startY + 1; i--) {
            chain.push(matrix[i][startX]);
        }

        let element = [],
            rotationDiff = r % chain.length;
        for (let rotation = 0; rotation < rotationDiff; rotation++) {
            element = chain.shift();
            chain.push(element);
        }

        //up
        for (let i = startX; i <= maxX; i++) {
            matrix[startY][i] = chain.shift();
        }
        //right
        for (let i = startY + 1; i <= maxY - 1; i++) {
            matrix[i][maxX] = chain.shift();
        }
        //down
        for (let i = maxX; i >= startX; i--) {
            matrix[maxY][i] = chain.shift();
        }
        //left
        for (let i = maxY - 1; i >= startY + 1; i--) {
            matrix[i][startX] = chain.shift();
        }
        return matrix;
    }


    return {
        run,
        rotateLayer
    };
}

module.exports = MatrixRotation();
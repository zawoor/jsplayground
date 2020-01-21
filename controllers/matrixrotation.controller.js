function MatrixRotation() {
    function run(n, r) {
        let layers = 1,
            matrix = n;
        if (matrix.length % 2 == 0) {
            layers = matrix[0].length / 2;
        } else {
            layers = matrix.length / 2;
        }

        for (rotation = 0; rotation < r; rotation++) {
            for (layer = 0; layer < layers; layer++) {
                matrix = this.rotateLayer(matrix, layer);
            }
        }
        return matrix;
    }

    function rotateLayer(matrix, layer) {
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


        // rotate chain
        let element = chain.shift();
        chain.push(element);

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
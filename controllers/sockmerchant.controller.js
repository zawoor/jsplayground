function sockMerchantController() {
    function run(socks) {
        let results = {};
        socks.forEach(sock => {
            let count = socks.filter(el => el == sock).length;
            if (count >= 2) {
                results[sock] = Math.floor(count / 2);
            }
        });
        return Object.values(results).reduce((a, b) => a + b, 0);
    }
    return {
        run
    }
}

module.exports = sockMerchantController();
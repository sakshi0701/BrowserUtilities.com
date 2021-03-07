const FastSpeedTest = require("fast-speedtest-api");

exports.getInternetSpeed = async (req, res) => {
    try {
        let speedtest = new FastSpeedTest({ 
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
            verbose: false,
            timeout: 10000,
            https: true,
            urlCount: 5,
            bufferSize: 8,
            unit: FastSpeedtest.UNITS.Mbps,
         });

         speedtest.getSpeed()
            .then((s) => {
                console.log(`Speed: ${s} Mbps`);
                res.status(200).send({ speed: Math.round(s) });
            })
            .catch((ex) => {
                res.status(400).send(ex.message);
            });

    } catch (ex) {
        res.status(400).send(ex.message);
    }
};
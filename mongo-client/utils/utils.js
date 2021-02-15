const fs = require('fs');

exports.readFile = (path, res, cb) => {
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            return res.status(500).send({
                status: 500,
                message: "The file does not exist.",
                path: path     
            });
        }
        fs.readFile(path, async (err, pcap) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    message: "Error while reading the file.",
                    path: path  
                });
            }
            cb(pcap);
        });
    });
}

exports.deleteFile = (path) => {
    fs.unlink(path, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`${path} has been successfully removed.`);
    })
}
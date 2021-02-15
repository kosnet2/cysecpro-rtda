const utils = require('../utils/utils');

exports.postNewPcap = (req, res, next) => {
    const file = req.body.file;
    const path = process.env.SNIFFER_PCAP_LOG_DIR + file;
    const client = req.app.locals.client;

    utils.readFile(path, res, async (pcap) => {
        const query = await client
            .db(process.env.MONGODB_DB)
            .collection(process.env.MONGODB_COLLECTION)
            .insertOne({
                file: file,
                pcap: pcap
            });
        const status = query.result.ok == 1 ? 200 : 507;
        res.status(status).send({ status: status, message: query.result });
        utils.deleteFile(path);
    });
};
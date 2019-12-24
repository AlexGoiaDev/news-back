const
    express = require('express'),
    router = express.Router();

router.route('/news/:id')
    .get(async (req, res) => {
        try {

        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    })
    .put(async (req, res) => {
        try {

        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    })
    .delete(async (req, res) => {
        try {

        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    });

router.route('/news')
    .get(async (req, res) => {
        const page = req.query.page || 0;
        const limit = req.query.limit || 5;
        try {

        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    })
    .post(async (req, res) => {
        try {

        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    });

module.exports = router;
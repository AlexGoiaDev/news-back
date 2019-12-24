const
    express = require('express'),
    router = express.Router(),
    newsService = require('./../services/newsService');

router.route('/news/:id')
    .get(async (req, res) => {
        try {
            const data = await newsService.getNewsById(req.params.id);
            if(data) {
                res.status(200).send({
                    status: 200,
                    message: 'News listed',
                    data
                });
            } else {
                res.status(204).send({
                    status: 204,
                    message: 'No content'
                })
            }
        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    })
    .put(async (req, res) => {
        try {
            const data = await newsService.updateNewsById(req.params.id, req.body);
            res.status(200).send({
                status: 200,
                message: 'News updated',
                data
            });
        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const data = await newsService.deleteNewsById(req.params.id);
            res.status(200).send({
                status: 200,
                message: 'News deleted',
                data
            });
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
        const limit = req.query.limit || 10;
        try {
            const data = await newsService.getNews(limit, page);
            res.status(200).send({
                status: 200,
                message: 'News listed',
                data
            });

        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    })
    .post(async (req, res) => {
        try {
            const data = await newsService.addNews(req.body);
            res.status(200).send({
                status: 200,
                message: 'News created',
                data
            });
        } catch (error) {
            res.status(400).send({
                status: 400,
                error
            });
        }
    });

module.exports = router;
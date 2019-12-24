
const News = require('./../models/newsModel');

const addNews = async (news) => {
    return await new News(news).save();
}

const getNews = async (limit, offset) => {
    return await News.paginate({}, { limit, offset });
}

const getNewsById = async (id) => {
    return await News.findById({ _id: id });
}

const updateNewsById = async (id, changes) => {
    return await News.findByIdAndUpdate({ _id, id }, changes, { new: true });
}

const deleteNewsById = async (id) => {
    return await News.findByIdAndRemove({ _id: id });
}


module.exports = {
    addNews,
    getNews,
    getNewsById,
    updateNewsById,
    deleteNewsById
}
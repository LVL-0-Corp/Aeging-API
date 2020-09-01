var News = require("../schemas/news");

async function getAllNews() {
    try{
        const result = await News.find({}).exec();
        return result;
    } catch(err){
        throw { error: 'news.getAll.error'+err }
    }
}

module.exports = { getAllNews }
var Certification = require("../schemas/certification");

async function getAllCertifications() {
    try{
        const result = await Certification.find({}).exec();
        return result;
    } catch(err){
        throw { error: 'certification.getAll.error'+err }
    }
}

module.exports = { getAllCertifications }
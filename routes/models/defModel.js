const mongoose = require('mongoose');

const defSchema = new mongoose.Schema({
    id: String,
    title: String,
    en: String,
    fr: String,
}, { collection: 'definition' });

const Def = mongoose.model('Def', defSchema);

module.exports = Def;
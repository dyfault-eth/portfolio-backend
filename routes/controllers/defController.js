const Def = require('../models/defModel');

const handleGetDef = async (req, res) => {
    try {
        const glossaryElement = await Def.find();

        res.json(glossaryElement);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des données depuis MongoDB' });
    }
};

module.exports = {
    handleGetDef,
};
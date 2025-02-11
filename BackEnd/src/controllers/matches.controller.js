import Matches from '../models/matche.model.js';

export const getMatches = async (req, res) => {
    try {
        const Matches = await Matches.find( {user: req.user.id} ).populate('user');
        res.json(Matches);
        
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
};

export const createMatche = async (req, res) => {
    try {
        const { title, description, date } = req.body;
    
        const newMatche = new Matches({
            title,
            description,
            date,
            user: req.user.id,
        })
    
        const savedMatches = await newMatche.save();
        res.json(savedMatches);
        
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
};

export const getMatche = async (req, res) => {
    try {
        const Matche = await Matches.findById(req.params.id).populate('user');
        if(!Matche) return res.status(404).json( { message: "Matche not found"})
            res.json(Matche);
        
    } catch (error) {
        return res.status(404).json({ message: "Matche not found"});
    }
};

export const updateMatche = async (req, res) => {
    try {
        const Matche = await Matches.findByIdAndUpdate(req.params.id, req.body, 
            { new: true} // devuelve el objeto actualizado en lugar del anterior
        );
        if(!Matche) return res.status(404).json( { message: "Matche not found"});
            res.json(Matche);
        
    } catch (error) {
        return res.status(404).json({ message: "Matche not found"});
    }
};

export const deleteMatche = async (req, res) => {
    try {
        const Matche = await Matches.findByIdAndDelete(req.params.id);
        if(!Matche) return res.status(404).json( { message: "Matche not found"});
        return res.sendStatus(204);
        
    } catch (error) {
        return res.status(404).json({ message: "Matche not found"});
    }
};
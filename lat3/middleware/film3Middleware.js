exports.validateFilmData = (req, res, next) => {
    const { judul, sutradara } = req.body;

    if(!judul || judul.trim() === '') {
        return res.status(400).json({ message: 'Judul tidak boleh kosong'})
    }
    
    if(!sutradara || sutradara.trim() === '') {
        return res.status(400).json({ message: 'sutradara tidak boleh kosong'})
    }

    next();
};
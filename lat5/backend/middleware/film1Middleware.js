exports.validateFilmData = (req, res, next) => {
    const { judul, sutradara } = req.body;

    if(!judul || judul.trim() === '') {
        return res.status(404).json({ msg: 'Judul tidak boleh kosong'});
    }

    if(!sutradara || sutradara.trim() === '') {
        return res.status(404).json({ msg: 'Sutradara tidak boleh kosong'});
    }

    next();
}
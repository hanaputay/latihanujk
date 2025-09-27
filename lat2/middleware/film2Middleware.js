exports.validateFilmData = (req, res, next) => {
    const { judul, sutradara } = req.body;

    if (!judul || judul.trim() === '') {
        return res.status(400).json({ msg: 'Title harus diisi'});
    }

    if (!sutradara || sutradara.trim() === '') {
        return res.status(400).json({ msg: 'Director harus diisi'});
    }

    next();
};
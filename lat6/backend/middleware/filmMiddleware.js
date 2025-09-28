const validateFilmData = (req, res, next) => {
    const { judul, sutradara } = req.body;

    if(!judul || judul.trim() === '') {
        return res.status(400).json({ message: 'Judul harus diisi' });
    }

    if(!sutradara || sutradara.trim() === '') {
        return res.status(400).json({ message: 'Sutradara harus diisi' });
    }

    next();
};

export { validateFilmData };
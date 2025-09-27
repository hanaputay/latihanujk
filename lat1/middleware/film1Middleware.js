exports.validateFilmData = (req, res, next) => {
    const { title, director } = req.body;
    if(!title || title.trim() === '') {
        return res.status(400).json({ msg: 'Title tidak boleh kosong'});
    }

    if(!director || director.trim() === '') {
        return res.status(400).json({ msg: 'Director tidak boleh kosong'});
    }

    next();
};
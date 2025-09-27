exports.validateDataFilm = (req, res, next) => {
  const { judul, sutradara } = req.body;

  if (!judul || judul.trim() === '') {
    return res.status(401).json({ msg: 'Judul tidak boleh kosong' });
  }

  if (!sutradara || sutradara.trim() === '') {
    return res.status(401).json({ msg: 'sutradara tidak boleh kosong' });
  }

  next();
};

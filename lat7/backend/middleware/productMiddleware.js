exports.validateProductData = (req, res, next) => {
    const { product_name, price, stock } = req.body;
    const numericPrice = Number(price)
    const numericstock = Number(stock)

    if (!product_name || product_name.trim === '') {
        return res.status(401).json({ message: 'nama produk wajib diisi!'});
    }

    if (!price || !Number.isFinite(numericPrice) || numericPrice < 0) {
        return res.status(401).json({ message: 'harga wajib diisi dan harus berupa angka valid'});
    }

    if (!stock || !Number.isFinite(numericstock) || numericstock < 0) {
        return res.status(401).json({ message: 'stock wajib diisi dan harus berupa angka valid'});
    }

    next();
}
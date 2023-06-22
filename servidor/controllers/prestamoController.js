const Prestamo = require("../models/Prestamo");

exports.crearPrestamo = async (req, res) => {
    try {
        const prestamo = new Prestamo(req.body);

        await prestamo.save();
        res.send(prestamo);
        console.log(body);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPrestamos = async (req, res) => {

    try {

        const prestamos = await Prestamo.find();
        res.json(prestamos);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.actualizarPrestamo = async (req, res) => {

    try {

        const {_id, socio, numero_pelicula } = new Prestamo(req.body);
        let prestamos = await Prestamo.findById(req.params.id);

        if(!prestamos){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        prestamos._id = _id;
        prestamos.socio = socio;
        prestamos.numero_pelicula = numero_pelicula;

        console.log(prestamos)

        prestamos = await Prestamo.findOneAndUpdate({ _id: req.params.id }, prestamos, { new: true } );
        res.json(prestamos);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPrestamo = async (req, res) => {

    try {

        let prestamos = await Prestamo.findById(req.params.id);

        if(!prestamos){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(prestamos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPrestamo = async (req, res) => {

    try {

        let prestamos = await Prestamo.findById(req.params.id);

        if(!prestamos){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        prestamos = await Prestamo.findOneAndRemove(req.params.id);

        res.json({ msg: 'El producto: ' + prestamos.nomnbre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


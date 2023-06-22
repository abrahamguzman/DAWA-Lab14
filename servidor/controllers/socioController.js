const Socio = require("../models/Socio");

exports.crearSocio = async (req, res) => {
    try {
        const socio = new Socio(req.body);

        await socio.save();
        res.send(socio);
        console.log(body);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerSocios = async (req, res) => {

    try {

        const socios = await Socio.find();
        res.json(socios);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.actualizarSocio = async (req, res) => {

    try {

        const {_id, codigo, nombre, direccion, telefono, directores_favoritos, actores_favoritos, generos_favoritos } = new Socio(req.body);
        let socios = await Socio.findById(req.params.id);

        if(!socios){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        socios._id = _id;
        socios.codigo = codigo;
        socios.nombre = nombre;
        socios.direccion = direccion;
        socios.telefono = telefono;
        socios.directores_favoritos = directores_favoritos;
        socios.actores_favoritos = actores_favoritos;
        socios.generos_favoritos = generos_favoritos;

        console.log(socios)

        socios = await Socio.findOneAndUpdate({ _id: req.params.id }, socios, { new: true } );
        res.json(socios);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verSocio = async (req, res) => {

    try {

        let socios = await Socio.findById(req.params.id);

        if(!socios){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(socios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarSocio = async (req, res) => {

    try {

        let socios = await Socio.findById(req.params.id);

        if(!socios){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        socios = await Socio.findOneAndRemove(req.params.id);

        res.json({ msg: 'El producto: ' + socios.nomnbre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


const Pelicula = require("../models/Pelicula");

exports.crearPelicula = async (req, res) => {
    try {
        const pelicula = new Pelicula(req.body);

        await pelicula.save();
        res.send(pelicula);
        console.log(body);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPeliculas = async (req, res) => {

    try {

        const peliculas = await Pelicula.find();
        res.json(peliculas);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.actualizarPelicula = async (req, res) => {

    try {

        const {_id, numero, titulo, genero, director, actores } = new Pelicula(req.body);
        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        peliculas._id = _id;
        peliculas.numero = numero;
        peliculas.titulo = titulo;
        peliculas.genero = genero;
        peliculas.director = director;
        peliculas.actores = actores;

        console.log(peliculas)

        peliculas = await Pelicula.findOneAndUpdate({ _id: req.params.id }, peliculas, { new: true } );
        res.json(peliculas);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPelicula = async (req, res) => {

    try {

        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(peliculas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPelicula = async (req, res) => {

    try {

        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        peliculas = await Pelicula.findOneAndRemove(req.params.id);

        res.json({ msg: 'El producto: ' + peliculas.nomnbre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


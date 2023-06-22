const Prestamo = require("../models/Prestamo");
const User = require("../models/User");
const { jsPDF } = require('jspdf')
require('jspdf-autotable');

exports.generarPDf = async(req,res) =>{
    try {
        const user =  await User.find().lean();
        const prestamos = await Prestamo.find().lean();
        const nombreArchivo = 'Lab14.pdf';
        const doc = new jsPDF();

        // Título
        doc.setFontSize(20);
        doc.text('Reporte de Préstamos', 15, 15);

        // Nombre del usuario
        doc.setFontSize(12);
        doc.text(`Usuario: mguzman@gmail.com`, 15, 25);

      
      
        // Tabla de prestamos
        doc.setFontSize(15);
        doc.autoTable({
        theme: 'grid',
        startY: 30,
        head: [[`Prestamos (${prestamos.length})`, 'Socio','Fecha','N° Pelicula'],],
        body: prestamos.map(prestamo => [prestamo._id, prestamo.socio, prestamo.fecha, prestamo.numero_pelicula])
        });


        res.setHeader('Content-Disposition', `attachment; filename="${nombreArchivo}"`);
        res.setHeader('Content-Type', 'application/pdf');
        res.contentType('application/pdf');
        res.send(Buffer.from(doc.output('arraybuffer')));


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        
    }

   
}

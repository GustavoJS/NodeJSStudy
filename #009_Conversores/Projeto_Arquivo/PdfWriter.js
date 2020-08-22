let pdf = require('html-pdf');

class PDFWriter{
    static WritePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (err) => {
            if(err){
                console.log("Erro ao criar o PDF: " + err );
            }
        });
    }
}

module.exports = PDFWriter
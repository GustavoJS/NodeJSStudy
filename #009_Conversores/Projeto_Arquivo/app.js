const reader     = require("./Reader");
const Reader     = require("./Reader");
const Writer     = require("./Writer");
const Processor  = require("./Processor");
const Table      = require("./Table");
const HtmlParser = require("./HtmlParser");
const PdfWriter  = require("./PdfWriter");

let reader1 = new Reader();
let writer1 = new Writer();

async function main(){

    let fileName = "arquivoTeste.csv";
    let data = await reader1.Read('./' + fileName);
    let processorsData = Processor.Process(data);
    
    let users = new Table(processorsData);
    let html  = await HtmlParser.Parse(users);
    
    let newFileName =  Date.now() + "_newfile";

    writer1.Write(newFileName +"newHtmlFile.html" ,html);
    
    PdfWriter.WritePDF(Date.now() +"newPdfFile.pdf" ,html);

    // console.log(html);
    // console.log(users.header);
    // console.log(users.RowCount);
    // console.log(users.ColumnsCount);
    // console.log(data);
}


main();

var datass = '';
var DataArr = [];
PDFJS.workerSrc = '';

function ExtractText() {
    var input = document.getElementById("file-id");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    // console.log(input.files[0]);
    fReader.onloadend = function (event) {
        convertDataURIToBinary(event.target.result);
    }
}

var BASE64_MARKER = ';base64,';

function convertDataURIToBinary(dataURI) {

    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    pdfAsArray(array)

}

function getPageText(pageNum, PDFDocumentInstance) {
    // Retorna uma promessa que é resolvida assim que o texto da página for recuperado
    return new Promise(function (resolve, reject) {
        PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
            // O principal truque para obter o texto da página PDF é usar o método getTextContent
            pdfPage.getTextContent().then(function (textContent) {
                var textItems = textContent.items;
                var finalString = "";

                // Concatene a string do item com a string final
                for (var i = 0; i < textItems.length; i++) {
                    var item = textItems[i];

                    finalString += item.str + " ";
                }

                // Resolva a promessa com o texto recuperado da página
                resolve(finalString);
            });
        });
    });
}

function pdfAsArray(pdfAsArray) {

    PDFJS.getDocument(pdfAsArray).then(function (pdf) {

        var pdfDocument = pdf;
        // Crie uma matriz que conterá nossas promessas
        var pagesPromises = [];

        for (var i = 0; i < pdf.pdfInfo.numPages; i++) {
            // Necessário para evitar que eu seja sempre o total de páginas
            (function (pageNumber) {
                // Armazene a promessa de getPageText que retorna o texto de uma página
                pagesPromises.push(getPageText(pageNumber, pdfDocument));
            })(i + 1);
        }

        // Executa todas as promessas
        Promise.all(pagesPromises).then(function (pagesText) {

            // Mostra o texto de todas as páginas do console
            
            console.log(pagesText); 
            console.log(pagesText.length);
            var outputStr = "";
            for (var pageNum = 0; pageNum < pagesText.length; pageNum++) {
                console.log(pagesText[pageNum]);
                outputStr = "";
                outputStr = "<br/><br/>Page " + (pageNum + 1) + " contents <br/> <br/>";

                var div = document.getElementById('output');

                div.innerHTML += (outputStr + pagesText[pageNum]);

            }




        });

    }, function (reason) {
        // Caso ocorra um erro
        console.error(reason);
    });
}
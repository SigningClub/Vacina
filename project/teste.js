/**
 * Recupera o texto de uma página específica em um documento PDF obtido por meio de pdf.js 
 * 
 * @param {Integer} pageNum Especifica o número da página 
 * @param {PDFDocument} PDFDocumentInstance O documento PDF obtido 
 **/
function getPageText(pageNum, PDFDocumentInstance) {
    // Retorna uma Promise que é resolvida assim que o texto da página é recuperado
    return new Promise(function (resolve, reject) {
        PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
            // O principal truque para obter o texto da página PDF, use o método getTextContent
            pdfPage.getTextContent().then(function (textContent) {
                var textItems = textContent.items;
                var finalString = "";

                // Concatenar a string do item para a string final
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

/**
 * Extraia o teste do PDF
 */

var PDF_URL  = '/path/to/example.pdf';
PDFJS.getDocument(PDF_URL).then(function (PDFDocumentInstance) {

    var totalPages = PDFDocumentInstance.pdfInfo.numPages;
    var pageNumber = 1;

    // Extraia o texto
    getPageText(pageNumber , PDFDocumentInstance).then(function(textPage){
        // Mostrar o texto da página no console
        console.log(textPage);
    });

}, function (reason) {
    // Erro ao carregar o PDF
    console.error(reason);
});
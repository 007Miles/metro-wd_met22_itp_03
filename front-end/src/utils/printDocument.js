import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

const printDocument = (input) => {
  // input must be a dom element
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()
    pdf.addImage(imgData, 'JPEG', 0, 0)
    // pdf.output('dataurlnewwindow');
    pdf.save('download.pdf')
  })
}

export default printDocument
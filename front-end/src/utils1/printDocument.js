
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

const printDocument = (element, size = 'a2') => {
  // input must be a dom element
  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ format: size })
    pdf.addImage(imgData, 'JPEG', 0, 0)
    pdf.save('LeaveList.pdf')
  })
}

export default printDocument
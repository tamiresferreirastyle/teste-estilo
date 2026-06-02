// pdf.js - Exportação para PDF

export async function baixarPDF(top3, estilos) {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  doc.setFontSize(24);

  doc.text("Resultado do Teste de Estilo", 20, 25);

  doc.setFontSize(16);

  let y = 60;

  top3.forEach((item, index) => {
    doc.text(
      `${index + 1}º Lugar: ${estilos[item[0]]} (${item[1]} pts)`,
      20,
      y,
    );

    y += 20;
  });

  doc.save("resultado-estilo.pdf");
}

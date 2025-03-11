
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';
import { getReportDescription, getTimeRangeText } from './pdfUtils';

export const generateCarbonReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Résumé des Émissions de Carbone', 14, yPosition);
  yPosition += 10;
  
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  
  if (data.includeScope1) {
    doc.text('• Scope 1 (Émissions directes): 128,5 tonnes CO₂e', 20, yPosition);
    yPosition += 8;
  }
  
  if (data.includeScope2) {
    doc.text('• Scope 2 (Liées à l\'électricité): 245,3 tonnes CO₂e', 20, yPosition);
    yPosition += 8;
  }
  
  if (data.includeScope3) {
    doc.text('• Scope 3 (Chaîne de valeur): 1 546,2 tonnes CO₂e', 20, yPosition);
    yPosition += 8;
  }
  
  yPosition += 10;
  
  if (data.includeComparison) {
    // Ajouter des données de comparaison
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('Comparaison année par année', 14, yPosition);
    yPosition += 10;
    
    // Ajouter un tableau avec les données de comparaison
    autoTable(doc, {
      startY: yPosition,
      head: [['Scope d\'émission', 'Période actuelle', 'Période précédente', 'Variation']],
      body: [
        ['Scope 1', '128,5 tonnes', '145,3 tonnes', '-11,6%'],
        ['Scope 2', '245,3 tonnes', '267,8 tonnes', '-8,4%'],
        ['Scope 3', '1 546,2 tonnes', '1 678,5 tonnes', '-7,9%'],
        ['Total', '1 920,0 tonnes', '2 091,6 tonnes', '-8,2%'],
      ],
      theme: 'grid',
      headStyles: { fillColor: [44, 62, 80] },
    });
  }
};


import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';

export const generateCsrdReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('CSRD Compliance Summary', 14, yPosition);
  yPosition += 10;
  
  // Add sample CSRD compliance table
  autoTable(doc, {
    startY: yPosition,
    head: [['Requirement', 'Status', 'Notes']],
    body: [
      ['Double Materiality Assessment', 'Compliant', 'Assessment completed Q2 2023'],
      ['Value Chain Emissions', 'Partially Compliant', 'Scope 3 data collection ongoing'],
      ['Climate Transition Plans', 'Compliant', '2030 targets established'],
      ['Biodiversity Impact', 'In Progress', 'Assessment scheduled for Q3 2023'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
};

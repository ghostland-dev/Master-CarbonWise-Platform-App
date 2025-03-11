
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';
import { getReportDescription, getTimeRangeText } from './pdfUtils';

export const generateCarbonReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Carbon Emissions Summary', 14, yPosition);
  yPosition += 10;
  
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  
  if (data.includeScope1) {
    doc.text('• Scope 1 (Direct emissions): 128.5 tonnes CO₂e', 20, yPosition);
    yPosition += 8;
  }
  
  if (data.includeScope2) {
    doc.text('• Scope 2 (Electricity-related): 245.3 tonnes CO₂e', 20, yPosition);
    yPosition += 8;
  }
  
  if (data.includeScope3) {
    doc.text('• Scope 3 (Value chain): 1,546.2 tonnes CO₂e', 20, yPosition);
    yPosition += 8;
  }
  
  yPosition += 10;
  
  if (data.includeComparison) {
    // Add sample comparison data
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('Year-over-Year Comparison', 14, yPosition);
    yPosition += 10;
    
    // Add a sample table with comparison data
    autoTable(doc, {
      startY: yPosition,
      head: [['Emission Scope', 'Current Period', 'Previous Period', 'Change']],
      body: [
        ['Scope 1', '128.5 tonnes', '145.3 tonnes', '-11.6%'],
        ['Scope 2', '245.3 tonnes', '267.8 tonnes', '-8.4%'],
        ['Scope 3', '1,546.2 tonnes', '1,678.5 tonnes', '-7.9%'],
        ['Total', '1,920.0 tonnes', '2,091.6 tonnes', '-8.2%'],
      ],
      theme: 'grid',
      headStyles: { fillColor: [44, 62, 80] },
    });
  }
};

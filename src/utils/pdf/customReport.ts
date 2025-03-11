
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';

export const generateCustomReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Custom Sustainability Report', 14, yPosition);
  yPosition += 10;
  
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text('This custom report contains data selected based on your requirements.', 14, yPosition);
  yPosition += 15;
  
  // Add sample sustainability metrics table
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Key Sustainability Metrics', 14, yPosition);
  yPosition += 10;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Metric', 'Current Value', 'Target', 'Progress']],
    body: [
      ['Carbon Emissions', '1,920 tonnes CO₂e', '1,500 tonnes CO₂e by 2025', '78%'],
      ['Renewable Energy', '65% of total', '90% by 2025', '72%'],
      ['Water Usage', '325,000 m³', '250,000 m³ by 2024', '77%'],
      ['Waste to Landfill', '125 tonnes', 'Zero by 2025', '83%'],
      ['Supplier ESG Compliance', '87% of suppliers', '100% by 2024', '87%'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
};

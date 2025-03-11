
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';

export const generateDppReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Digital Product Passport', 14, yPosition);
  yPosition += 10;
  
  // Add sample product information
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text('Product Line: EcoFriendly Series', 20, yPosition);
  yPosition += 8;
  doc.text('Materials: 85% recycled content', 20, yPosition);
  yPosition += 8;
  doc.text('Manufacturing Location: Barcelona, Spain', 20, yPosition);
  yPosition += 8;
  doc.text('Carbon Footprint: 12.3 kg CO₂e per unit', 20, yPosition);
  yPosition += 8;
  doc.text('Recyclability: 95% recyclable components', 20, yPosition);
  yPosition += 15;
  
  // Add sample lifecycle table
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Product Lifecycle Information', 14, yPosition);
  yPosition += 10;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Lifecycle Stage', 'Environmental Impact', 'Social Impact']],
    body: [
      ['Raw Materials', 'Low - 85% recycled', 'Fair trade certified suppliers'],
      ['Manufacturing', 'Medium - solar powered factory', 'Living wages for all workers'],
      ['Distribution', 'Medium - optimized logistics', 'Local distribution partners'],
      ['Use Phase', 'Low - energy efficient', 'Low maintenance costs'],
      ['End of Life', 'Low - 95% recyclable', 'Take-back program available'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
};

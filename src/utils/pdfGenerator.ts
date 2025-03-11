
import jsPDF from 'jspdf';
import { format } from 'date-fns';
import { ReportData } from './pdf/types';
import { getReportTypeName, getReportDescription, getTimeRangeText, setupPdfHeader, addPdfFooter } from './pdf/pdfUtils';
import { generateCarbonReport } from './pdf/carbonReport';
import { generateCsrdReport } from './pdf/csrdReport';
import { generateDppReport } from './pdf/dppReport';
import { generateCustomReport } from './pdf/customReport';

export const generatePDF = (data: ReportData): string => {
  const doc = new jsPDF();
  const now = new Date();
  
  // Set up the document title and basic info
  const title = data.reportName || `${getReportTypeName(data.reportType)} - ${format(now, 'MMM yyyy')}`;
  setupPdfHeader(doc, title, now);
  
  // Add report description
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text(getReportDescription(data.reportType), 14, 40);
  
  // Add time period
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text(`Time Period: ${getTimeRangeText(data.dateRange)}`, 14, 50);
  
  // Generate report content based on type
  switch (data.reportType) {
    case 'carbon':
      generateCarbonReport(doc, data);
      break;
    case 'csrd':
      generateCsrdReport(doc, data);
      break;
    case 'dpp':
      generateDppReport(doc, data);
      break;
    case 'custom':
      generateCustomReport(doc, data);
      break;
    default:
      // Default to a basic report if type not specified
      generateCustomReport(doc, data);
  }
  
  // Add footer with page numbers
  addPdfFooter(doc);
  
  // Generate a data URL for the PDF
  return doc.output('datauristring');
};

// Re-export the utility functions for external use
export { 
  getReportTypeName,
  getReportDescription,
  getTimeRangeText
};

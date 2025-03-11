
import jsPDF from 'jspdf';
import { format } from 'date-fns';

// Common utility functions for PDF generation

export const getReportTypeName = (type: string): string => {
  switch (type) {
    case "csrd":
      return "CSRD Compliance Report";
    case "custom":
      return "Custom Sustainability Report";
    case "dpp":
      return "Digital Product Passport";
    case "carbon":
      return "Carbon Footprint Report";
    default:
      return "Sustainability Report";
  }
};

export const getReportDescription = (type: string): string => {
  switch (type) {
    case "csrd":
      return "This report outlines compliance with the Corporate Sustainability Reporting Directive requirements.";
    case "custom":
      return "This customized report contains selected sustainability metrics and indicators.";
    case "dpp":
      return "Digital Product Passport providing detailed sustainability information for the product line.";
    case "carbon":
      return "Comprehensive analysis of carbon emissions across all scopes and operations.";
    default:
      return "Sustainability report with key environmental and social performance indicators.";
  }
};

export const getTimeRangeText = (dateRange: string): string => {
  switch (dateRange) {
    case "current-month":
      return "Current Month";
    case "last-month":
      return "Last Month";
    case "current-quarter":
      return "Current Quarter";
    case "last-quarter":
      return "Last Quarter";
    case "ytd":
      return "Year to Date";
    case "last-year":
      return "Last Year";
    case "custom":
      return "Custom Time Period";
    default:
      return "Last Quarter";
  }
};

export const setupPdfHeader = (doc: jsPDF, title: string, now: Date): void => {
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Add report title
  doc.setFontSize(20);
  doc.setTextColor(44, 62, 80);
  const titleWidth = doc.getTextWidth(title);
  doc.text(title, (pageWidth - titleWidth) / 2, 20);
  
  // Add date generated
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  const dateText = `Generated on ${format(now, 'MMMM d, yyyy')}`;
  doc.text(dateText, 14, 30);
};

export const addPdfFooter = (doc: jsPDF): void => {
  const totalPages = doc.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - 30, doc.internal.pageSize.getHeight() - 10);
    doc.text('Confidential - Internal Use Only', 14, doc.internal.pageSize.getHeight() - 10);
  }
};

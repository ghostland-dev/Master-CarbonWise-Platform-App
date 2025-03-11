
// Define shared types for PDF generation

export interface ReportData {
  reportName: string;
  reportType: string;
  dateRange: string;
  includeCharts: boolean;
  includeTables: boolean;
  includeScope1?: boolean;
  includeScope2?: boolean;
  includeScope3?: boolean;
  includeComparison?: boolean;
}

export interface PdfDocument extends jsPDF {
  // Add any custom extensions to the jsPDF type if needed
}

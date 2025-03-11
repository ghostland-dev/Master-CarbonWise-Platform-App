
// Définir les types partagés pour la génération de PDF
import jsPDF from 'jspdf';

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
  // Ajouter des extensions personnalisées au type jsPDF si nécessaire
}

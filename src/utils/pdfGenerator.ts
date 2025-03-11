
import jsPDF from 'jspdf';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ReportData } from './pdf/types';
import { getReportTypeName, getReportDescription, getTimeRangeText, setupPdfHeader, addPdfFooter } from './pdf/pdfUtils';
import { generateCarbonReport } from './pdf/carbonReport';
import { generateCsrdReport } from './pdf/csrdReport';
import { generateDppReport } from './pdf/dppReport';
import { generateCustomReport } from './pdf/customReport';

export const generatePDF = (data: ReportData): string => {
  const doc = new jsPDF();
  const now = new Date();
  
  // Configuration du titre et des informations de base
  const title = data.reportName || `${getReportTypeName(data.reportType)} - ${format(now, 'MMM yyyy', { locale: fr })}`;
  setupPdfHeader(doc, title, now);
  
  // Ajout de la description du rapport
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text(getReportDescription(data.reportType), 14, 40);
  
  // Ajout de la période
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text(`Période: ${getTimeRangeText(data.dateRange)}`, 14, 50);
  
  // Génération du contenu du rapport selon le type
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
      // Par défaut, générer un rapport basique si le type n'est pas spécifié
      generateCustomReport(doc, data);
  }
  
  // Ajout du pied de page avec numéros de page
  addPdfFooter(doc);
  
  // Générer une URL de données pour le PDF
  return doc.output('datauristring');
};

// Ré-exporter les fonctions utilitaires pour usage externe
export { 
  getReportTypeName,
  getReportDescription,
  getTimeRangeText
};

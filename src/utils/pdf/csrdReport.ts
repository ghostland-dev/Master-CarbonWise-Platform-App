
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';

export const generateCsrdReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Résumé de Conformité CSRD', 14, yPosition);
  yPosition += 10;
  
  // Ajouter un tableau de conformité CSRD
  autoTable(doc, {
    startY: yPosition,
    head: [['Exigence', 'Statut', 'Notes']],
    body: [
      ['Évaluation de Double Matérialité', 'Conforme', 'Évaluation complétée T2 2023'],
      ['Émissions de la Chaîne de Valeur', 'Partiellement Conforme', 'Collecte de données Scope 3 en cours'],
      ['Plans de Transition Climatique', 'Conforme', 'Objectifs 2030 établis'],
      ['Impact sur la Biodiversité', 'En cours', 'Évaluation prévue pour T3 2023'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
};

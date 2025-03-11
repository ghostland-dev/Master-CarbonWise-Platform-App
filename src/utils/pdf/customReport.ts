
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';

export const generateCustomReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Rapport de Durabilité Personnalisé', 14, yPosition);
  yPosition += 10;
  
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text('Ce rapport personnalisé contient des données sélectionnées selon vos exigences.', 14, yPosition);
  yPosition += 15;
  
  // Ajouter un tableau de métriques de durabilité
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Principales Métriques de Durabilité', 14, yPosition);
  yPosition += 10;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Métrique', 'Valeur Actuelle', 'Objectif', 'Progrès']],
    body: [
      ['Émissions de Carbone', '1 920 tonnes CO₂e', '1 500 tonnes CO₂e d\'ici 2025', '78%'],
      ['Énergie Renouvelable', '65% du total', '90% d\'ici 2025', '72%'],
      ['Consommation d\'Eau', '325 000 m³', '250 000 m³ d\'ici 2024', '77%'],
      ['Déchets vers Décharge', '125 tonnes', 'Zéro d\'ici 2025', '83%'],
      ['Conformité ESG des Fournisseurs', '87% des fournisseurs', '100% d\'ici 2024', '87%'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
};

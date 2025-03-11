
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';

export const generateCarbonReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Rapport d\'Empreinte Carbone', 14, yPosition);
  yPosition += 10;
  
  // Ajouter les détails des scopes
  if (data.includeScope1 || data.includeScope2 || data.includeScope3) {
    doc.setFontSize(12);
    doc.setTextColor(44, 62, 80);
    doc.text('Détails des Émissions par Scope', 14, yPosition);
    yPosition += 10;
    
    const scopeData = [];
    
    if (data.includeScope1) {
      scopeData.push(['Scope 1 (Émissions Directes)', '450 tonnes CO₂e', 'Consommation de carburant, chauffage']);
    }
    
    if (data.includeScope2) {
      scopeData.push(['Scope 2 (Émissions Indirectes - Énergie)', '820 tonnes CO₂e', 'Électricité achetée, chauffage']);
    }
    
    if (data.includeScope3) {
      scopeData.push(['Scope 3 (Émissions Indirectes - Chaîne de Valeur)', '1250 tonnes CO₂e', 'Voyages, transport, achats']);
    }
    
    autoTable(doc, {
      startY: yPosition,
      head: [['Catégorie', 'Émissions Totales', 'Sources Principales']],
      body: scopeData,
      theme: 'grid',
      headStyles: { fillColor: [44, 62, 80] },
    });
    
    // Mettre à jour la position Y après le tableau
    const lastAutoTable = (doc as any).lastAutoTable;
    if (lastAutoTable) {
      yPosition = lastAutoTable.finalY + 15;
    } else {
      yPosition += 70; // Estimation si lastAutoTable n'est pas disponible
    }
  }
  
  // Ajouter une comparaison annuelle si demandée
  if (data.includeComparison) {
    doc.setFontSize(12);
    doc.setTextColor(44, 62, 80);
    doc.text('Comparaison des Émissions Annuelles', 14, yPosition);
    yPosition += 10;
    
    autoTable(doc, {
      startY: yPosition,
      head: [['Année', 'Émissions Totales (tCO₂e)', 'Variation', 'Performance']],
      body: [
        ['2023', '2520', '−8.4%', 'En avance sur les objectifs'],
        ['2022', '2750', '−5.2%', 'Dans les objectifs'],
        ['2021', '2900', '−3.0%', 'Sous les objectifs'],
        ['2020', '2990', '−', 'Année de référence'],
      ],
      theme: 'grid',
      headStyles: { fillColor: [44, 62, 80] },
    });
  }
};

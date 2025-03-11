
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';

export const generateDppReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Passeport Produit Numérique (DPP)', 14, yPosition);
  yPosition += 10;
  
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text('Informations sur la Gamme de Produits', 14, yPosition);
  yPosition += 10;
  
  // Tableau des informations sur le produit
  autoTable(doc, {
    startY: yPosition,
    head: [['Propriété', 'Valeur']],
    body: [
      ['Gamme', 'Série ÉcoResponsable'],
      ['Fabricant', 'CarbonWise Manufacturing'],
      ['Date de production', 'Janvier 2023'],
      ['Lieu de fabrication', 'Strasbourg, France'],
      ['Certification', 'ISO 14001, Écolabel Européen'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
  
  // Mettre à jour la position Y après le tableau
  const lastAutoTable1 = (doc as any).lastAutoTable;
  if (lastAutoTable1) {
    yPosition = lastAutoTable1.finalY + 15;
  } else {
    yPosition += 70;
  }
  
  // Tableau des matériaux
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  doc.text('Composition des Matériaux', 14, yPosition);
  yPosition += 10;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Matériau', 'Pourcentage', 'Origine', 'Recyclabilité']],
    body: [
      ['Aluminium', '45%', 'Recyclé à 80%', 'Entièrement Recyclable'],
      ['Acier Inoxydable', '30%', 'UE', 'Entièrement Recyclable'],
      ['Plastique Biologique', '15%', 'France', 'Compostable'],
      ['Autres Composants', '10%', 'Divers', 'Partiellement Recyclable'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
  
  // Mettre à jour la position Y
  const lastAutoTable2 = (doc as any).lastAutoTable;
  if (lastAutoTable2) {
    yPosition = lastAutoTable2.finalY + 15;
  } else {
    yPosition += 70;
  }
  
  // Empreinte carbone
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  doc.text('Impact Environnemental', 14, yPosition);
  yPosition += 10;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Métrique', 'Valeur', 'Comparaison Sectorielle']],
    body: [
      ['Empreinte Carbone', '5.2 kg CO₂e par unité', '35% sous la moyenne du secteur'],
      ['Consommation d\'Eau', '120 litres par unité', '25% sous la moyenne du secteur'],
      ['Consommation d\'Énergie', '12 kWh par unité', '15% sous la moyenne du secteur'],
      ['Indice de Réparabilité', '8.5/10', '40% au-dessus de la moyenne du secteur'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
  
  // Instructions de fin de vie
  const lastAutoTable3 = (doc as any).lastAutoTable;
  if (lastAutoTable3) {
    yPosition = lastAutoTable3.finalY + 15;
  } else {
    yPosition += 70;
  }
  
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  doc.text('Instructions de Fin de Vie', 14, yPosition);
  yPosition += 10;
  
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('Ce produit est conçu pour être facilement désassemblé et recyclé. Veuillez suivre les', 14, yPosition);
  yPosition += 5;
  doc.text('instructions locales de recyclage pour chaque composant. Des instructions détaillées', 14, yPosition);
  yPosition += 5;
  doc.text('de désassemblage sont disponibles sur notre site web en scannant le QR code du produit.', 14, yPosition);
};

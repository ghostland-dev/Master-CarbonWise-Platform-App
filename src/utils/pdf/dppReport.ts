
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportData } from './types';

export const generateDppReport = (doc: jsPDF, data: ReportData): void => {
  let yPosition = 60;
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Passeport Produit Numérique', 14, yPosition);
  yPosition += 10;
  
  // Ajouter des informations sur le produit
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text('Gamme de Produits: Série ÉcoResponsable', 20, yPosition);
  yPosition += 8;
  doc.text('Matériaux: 85% de contenu recyclé', 20, yPosition);
  yPosition += 8;
  doc.text('Lieu de Fabrication: Barcelone, Espagne', 20, yPosition);
  yPosition += 8;
  doc.text('Empreinte Carbone: 12,3 kg CO₂e par unité', 20, yPosition);
  yPosition += 8;
  doc.text('Recyclabilité: 95% de composants recyclables', 20, yPosition);
  yPosition += 15;
  
  // Ajouter un tableau de cycle de vie
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Informations sur le Cycle de Vie du Produit', 14, yPosition);
  yPosition += 10;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Étape de Cycle de Vie', 'Impact Environnemental', 'Impact Social']],
    body: [
      ['Matières Premières', 'Faible - 85% recyclé', 'Fournisseurs certifiés commerce équitable'],
      ['Fabrication', 'Moyen - usine alimentée à l\'énergie solaire', 'Salaires décents pour tous les travailleurs'],
      ['Distribution', 'Moyen - logistique optimisée', 'Partenaires de distribution locaux'],
      ['Phase d\'Utilisation', 'Faible - efficacité énergétique', 'Faibles coûts de maintenance'],
      ['Fin de Vie', 'Faible - 95% recyclable', 'Programme de reprise disponible'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
  });
};

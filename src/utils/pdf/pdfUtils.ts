
import jsPDF from 'jspdf';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

// Fonctions utilitaires communes pour la génération de PDF

export const getReportTypeName = (type: string): string => {
  switch (type) {
    case "csrd":
      return "Rapport de Conformité CSRD";
    case "custom":
      return "Rapport de Durabilité Personnalisé";
    case "dpp":
      return "Passeport Produit Numérique";
    case "carbon":
      return "Rapport d'Empreinte Carbone";
    default:
      return "Rapport de Durabilité";
  }
};

export const getReportDescription = (type: string): string => {
  switch (type) {
    case "csrd":
      return "Ce rapport présente la conformité aux exigences de la Directive sur la Publication d'Informations en matière de Durabilité des Entreprises.";
    case "custom":
      return "Ce rapport personnalisé contient les métriques et indicateurs de durabilité sélectionnés.";
    case "dpp":
      return "Passeport Produit Numérique fournissant des informations détaillées sur la durabilité de la gamme de produits.";
    case "carbon":
      return "Analyse complète des émissions de carbone pour tous les scopes et opérations.";
    default:
      return "Rapport de durabilité avec les principaux indicateurs de performance environnementale et sociale.";
  }
};

export const getTimeRangeText = (dateRange: string): string => {
  switch (dateRange) {
    case "current-month":
      return "Mois en cours";
    case "last-month":
      return "Mois dernier";
    case "current-quarter":
      return "Trimestre en cours";
    case "last-quarter":
      return "Trimestre dernier";
    case "ytd":
      return "Depuis le début de l'année";
    case "last-year":
      return "Année dernière";
    case "custom":
      return "Période personnalisée";
    default:
      return "Trimestre dernier";
  }
};

export const setupPdfHeader = (doc: jsPDF, title: string, now: Date): void => {
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Ajouter le titre du rapport
  doc.setFontSize(20);
  doc.setTextColor(44, 62, 80);
  const titleWidth = doc.getTextWidth(title);
  doc.text(title, (pageWidth - titleWidth) / 2, 20);
  
  // Ajouter la date de génération
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  const dateText = `Généré le ${format(now, 'd MMMM yyyy', { locale: fr })}`;
  doc.text(dateText, 14, 30);
};

export const addPdfFooter = (doc: jsPDF): void => {
  const totalPages = doc.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${i} sur ${totalPages}`, pageWidth - 30, doc.internal.pageSize.getHeight() - 10);
    doc.text('Confidentiel - Usage interne uniquement', 14, doc.internal.pageSize.getHeight() - 10);
  }
};

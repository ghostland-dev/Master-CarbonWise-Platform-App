
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';

interface ReportData {
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

export const generatePDF = (data: ReportData): string => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const now = new Date();
  
  // Add report title
  doc.setFontSize(20);
  doc.setTextColor(44, 62, 80);
  const title = data.reportName || `${getReportTypeName(data.reportType)} - ${format(now, 'MMM yyyy')}`;
  const titleWidth = doc.getTextWidth(title);
  doc.text(title, (pageWidth - titleWidth) / 2, 20);
  
  // Add date generated
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  const dateText = `Generated on ${format(now, 'MMMM d, yyyy')}`;
  doc.text(dateText, 14, 30);
  
  // Add report description
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text(getReportDescription(data.reportType), 14, 40);
  
  // Add time period
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text(`Time Period: ${getTimeRangeText(data.dateRange)}`, 14, 50);
  
  // For carbon reports, add scope information
  if (data.reportType === 'carbon') {
    let yPosition = 60;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('Carbon Emissions Summary', 14, yPosition);
    yPosition += 10;
    
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    
    if (data.includeScope1) {
      doc.text('• Scope 1 (Direct emissions): 128.5 tonnes CO₂e', 20, yPosition);
      yPosition += 8;
    }
    
    if (data.includeScope2) {
      doc.text('• Scope 2 (Electricity-related): 245.3 tonnes CO₂e', 20, yPosition);
      yPosition += 8;
    }
    
    if (data.includeScope3) {
      doc.text('• Scope 3 (Value chain): 1,546.2 tonnes CO₂e', 20, yPosition);
      yPosition += 8;
    }
    
    yPosition += 10;
    
    if (data.includeComparison) {
      // Add sample comparison data
      doc.setFontSize(14);
      doc.setTextColor(44, 62, 80);
      doc.text('Year-over-Year Comparison', 14, yPosition);
      yPosition += 10;
      
      // Add a sample table with comparison data
      autoTable(doc, {
        startY: yPosition,
        head: [['Emission Scope', 'Current Period', 'Previous Period', 'Change']],
        body: [
          ['Scope 1', '128.5 tonnes', '145.3 tonnes', '-11.6%'],
          ['Scope 2', '245.3 tonnes', '267.8 tonnes', '-8.4%'],
          ['Scope 3', '1,546.2 tonnes', '1,678.5 tonnes', '-7.9%'],
          ['Total', '1,920.0 tonnes', '2,091.6 tonnes', '-8.2%'],
        ],
        theme: 'grid',
        headStyles: { fillColor: [44, 62, 80] },
      });
    }
  }
  
  // For CSRD reports
  if (data.reportType === 'csrd') {
    let yPosition = 60;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('CSRD Compliance Summary', 14, yPosition);
    yPosition += 10;
    
    // Add sample CSRD compliance table
    autoTable(doc, {
      startY: yPosition,
      head: [['Requirement', 'Status', 'Notes']],
      body: [
        ['Double Materiality Assessment', 'Compliant', 'Assessment completed Q2 2023'],
        ['Value Chain Emissions', 'Partially Compliant', 'Scope 3 data collection ongoing'],
        ['Climate Transition Plans', 'Compliant', '2030 targets established'],
        ['Biodiversity Impact', 'In Progress', 'Assessment scheduled for Q3 2023'],
      ],
      theme: 'grid',
      headStyles: { fillColor: [44, 62, 80] },
    });
  }
  
  // For Digital Product Passport
  if (data.reportType === 'dpp') {
    let yPosition = 60;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('Digital Product Passport', 14, yPosition);
    yPosition += 10;
    
    // Add sample product information
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    doc.text('Product Line: EcoFriendly Series', 20, yPosition);
    yPosition += 8;
    doc.text('Materials: 85% recycled content', 20, yPosition);
    yPosition += 8;
    doc.text('Manufacturing Location: Barcelona, Spain', 20, yPosition);
    yPosition += 8;
    doc.text('Carbon Footprint: 12.3 kg CO₂e per unit', 20, yPosition);
    yPosition += 8;
    doc.text('Recyclability: 95% recyclable components', 20, yPosition);
    yPosition += 15;
    
    // Add sample lifecycle table
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('Product Lifecycle Information', 14, yPosition);
    yPosition += 10;
    
    autoTable(doc, {
      startY: yPosition,
      head: [['Lifecycle Stage', 'Environmental Impact', 'Social Impact']],
      body: [
        ['Raw Materials', 'Low - 85% recycled', 'Fair trade certified suppliers'],
        ['Manufacturing', 'Medium - solar powered factory', 'Living wages for all workers'],
        ['Distribution', 'Medium - optimized logistics', 'Local distribution partners'],
        ['Use Phase', 'Low - energy efficient', 'Low maintenance costs'],
        ['End of Life', 'Low - 95% recyclable', 'Take-back program available'],
      ],
      theme: 'grid',
      headStyles: { fillColor: [44, 62, 80] },
    });
  }
  
  // For custom reports, add placeholder sections
  if (data.reportType === 'custom') {
    let yPosition = 60;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('Custom Sustainability Report', 14, yPosition);
    yPosition += 10;
    
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    doc.text('This custom report contains data selected based on your requirements.', 14, yPosition);
    yPosition += 15;
    
    // Add sample sustainability metrics table
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('Key Sustainability Metrics', 14, yPosition);
    yPosition += 10;
    
    autoTable(doc, {
      startY: yPosition,
      head: [['Metric', 'Current Value', 'Target', 'Progress']],
      body: [
        ['Carbon Emissions', '1,920 tonnes CO₂e', '1,500 tonnes CO₂e by 2025', '78%'],
        ['Renewable Energy', '65% of total', '90% by 2025', '72%'],
        ['Water Usage', '325,000 m³', '250,000 m³ by 2024', '77%'],
        ['Waste to Landfill', '125 tonnes', 'Zero by 2025', '83%'],
        ['Supplier ESG Compliance', '87% of suppliers', '100% by 2024', '87%'],
      ],
      theme: 'grid',
      headStyles: { fillColor: [44, 62, 80] },
    });
  }
  
  // Add footer with page numbers
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - 30, doc.internal.pageSize.getHeight() - 10);
    doc.text('Confidential - Internal Use Only', 14, doc.internal.pageSize.getHeight() - 10);
  }
  
  // Generate a data URL for the PDF
  return doc.output('datauristring');
};

const getReportTypeName = (type: string): string => {
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

const getReportDescription = (type: string): string => {
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

const getTimeRangeText = (dateRange: string): string => {
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

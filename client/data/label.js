// This file keeps track of all labels used, as a step for multilingual support
const label = {
  en: {
    estimatorHeader: 'Asset Distribution Estimator',
    riskInputHeader: 'Choose a Risk Level for your Portfolio',
    lowRisk: '1 Low Risk',
    highRisk: 'High Risk 10',
    dollarValue: 'How much do you plan to invest?',
    dollarValueHelp: 'Amount must be atleast $0',
    distributionHeader: 'Asset Distribution for Risk ',
    portfolioReport: 'Portfolio Report',
    initialRiskLevel: 5,
    initialDollarValue: 100,
    portfolioReportHeading: 'Asset Allocation Report',
    investmentAmount: 'Investment Amount - $',
    conservativePortfolio: 'Conservative Portfolio Risk - ',
    riskierPortfolio: 'Riskier Portfolio Risk - ',
    cancel: 'Cancel',
    print: 'Print'
  },
  es: {
    estimatorHeader: 'Estimador de Distribución de Activos',
    riskInputHeader: 'Elija un nivel de riesgo de su cartera',
    lowRisk: '1 Riesgo bajo',
    highRisk: 'Alto riesgo 10',
    dollarValue: '¿Cuánto va a invertir',
    dollarValueHelp: 'La cantidad debe ser al menos $0',
    distributionHeader: 'Distribución de activos de riesgo ',
    portfolioReport: 'Informe de cartera',
    initialRiskLevel: 5,
    initialDollarValue: 100,
    portfolioReportHeading: 'Informe de asignación de activos',
    investmentAmount: 'Monto de inversión - $',
    conservativePortfolio: 'Cartera conervative Riesgo- ',
    riskierPortfolio: 'Cartera más riesgosa Riesgo - ',
    cancel: 'Cancelar',
    print: 'Impresión',
  }
};

module.exports = label.en;
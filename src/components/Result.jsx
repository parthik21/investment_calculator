import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
  const roi = calculateInvestmentResults(input);
  const initialInvestment =
    roi[0].valueEndOfYear - roi[0].interest - roi[0].annualInvestment;

  console.log(roi);

  // (roi.map(val => console.log(val.year, val.valueEndOfYear)));

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {roi.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.year * yearData.annualInvestment -
            initialInvestment;

          // const investedCapital =
          //   initialInvestment + yearData.year * yearData.annualInvestment;
          const investedCapital = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

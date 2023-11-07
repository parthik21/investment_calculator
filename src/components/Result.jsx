import { calculateInvestmentResults } from "../util/investment.js";

export default function Result({ input }) {

  const roi = calculateInvestmentResults(input);

  console.log(roi);

  // (roi.map(val => console.log(val.year, val.valueEndOfYear)));

  return(
    <section id="result">
      <ul>
        {roi.map((val) => {
          <li>{val.year} {val.valueEndOfYear}</li>
        })}
      </ul>
    </section>
  );
}
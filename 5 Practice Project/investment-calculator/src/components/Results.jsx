import { formatter } from "../util/investment.js";
export default function Results({ investments }) {
    return (
        <div id="results">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capitol</th>
                    </tr>
                </thead>
                <tbody>
                    {investments.map((item, index) => (
                        console.log(item),
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(item.totalInterest)}</td>
                            <td>{formatter.format(item.valueEndOfYear - item.totalInterest)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
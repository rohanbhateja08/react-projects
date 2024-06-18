import headerImage from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <div id="header">
            <img src={headerImage} alt="Investment Calculator"></img>
            <h1>React Investment Calculator</h1>
        </div>
    );
}
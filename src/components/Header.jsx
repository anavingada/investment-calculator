import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
  return (
    <header id="header">
      <figure>
        <img
          src={logo}
          alt="Investment Calculator logo"
        />
      </figure>
      <h1>Investment Calculator</h1>
    </header>
  );
}

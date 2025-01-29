import logo from "../../assets/logo.png";
export default function Logo() {
  return (
    <a href="./index.html">
      <img className="h-14" src={logo} alt="Weather App" />
    </a>
  );
}

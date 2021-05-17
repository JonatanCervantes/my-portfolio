import AlzaidLogo from "../assets/images/alzaid-icon.svg";
import BsbLogo from "../assets/images/bsb-icon.svg";
import JcLogo from "../assets/images/jc-logo.png";

function getProperLogo(type) {
  switch (type) {
    case "AlzaidLogo":
      return AlzaidLogo;
    case "BsbLogo":
      return BsbLogo;
    case "JcLogo":
      return JcLogo;
    default:
      return JcLogo;
  }
}

export { getProperLogo };

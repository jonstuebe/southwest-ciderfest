import onfontready from "onfontready"

import "normalize.css";
import "animate.css";
import "./styles.css";

onfontready('miso', () => {
  document.documentElement.className += "fontLoaded";
}, {
    timeoutAfter: 2500,
    onTimeout: () => {
      document.documentElement.className += "fontNotLoaded";
    }
  })
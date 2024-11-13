"use client";
import { useEffect } from "react";
export default function AdaptiveFontSize() {
  useEffect(() => {
    const docEl = document.documentElement;
    const dpr = window.devicePixelRatio;
    function setBodyFontSize() {
      if (document.body) {
        document.body.style.fontSize = 12 * dpr + "px";
      } else {
        document.documentElement.style.fontSize = 12 * dpr + "px";
      }
    }
    setBodyFontSize();
    setRemUnit();
    if (dpr >= 2) {
      const fakeBody = document.createElement("body");
      const testElement = document.createElement("div");
      testElement.style.border = ".5px solid transparent";
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        docEl.classList.add("hairlines");
      }
      docEl.removeChild(fakeBody);
    }
    function setRemUnit() {
      console.log("setRemUnit", dpr);

      const sale = Math.min((docEl.clientWidth) / 750, 1);
      const rem = sale * 16;
      docEl.style.fontSize = rem + "px";
    }
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        setRemUnit();
      }
    });
  }, []);
  return <></>;
}

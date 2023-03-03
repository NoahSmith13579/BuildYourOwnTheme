import { rootVarGetter, rootVarSetter } from "./cssHelper";
import colorConvert from "color-convert";

export let colorsMain = [
  "red",
  "orange",
  "yellow",
  "chartreuse",
  "white",
  "green",
  "aquamarine",
  "cyan",
  "skyblue",
  "grey",
  "blue",
  "violet",
  "magenta",
  "crimson",
  "black",
];

export function changeColor(
  currentColorType: string,
  hue: number,
  sat: number,
  lum: number
) {
  const varSuffix = currentColorType.charAt(0).toLowerCase();
  const hueVar = "--hue" + "-" + varSuffix;
  const satVar = "--sat" + "-" + varSuffix;
  const lumVar = "--lum" + "-" + varSuffix;
  rootVarSetter(hueVar, `${hue}`);
  rootVarSetter(satVar, `${sat}` + "%");
  rootVarSetter(lumVar, `${lum}` + "%");
}
export function changeHexInput(currentColorType: string, colorInput: string) {
  const HSL = colorConvert.hex.hsl(colorInput);
  const hue = HSL[0];
  const sat = HSL[1];
  const lum = HSL[2];

  const varSuffix = currentColorType.charAt(0).toLowerCase();
  const hueVar = "--hue" + "-" + varSuffix;
  const satVar = "--sat" + "-" + varSuffix;
  const lumVar = "--lum" + "-" + varSuffix;

  rootVarSetter(hueVar, `${hue}`);
  rootVarSetter(satVar, `${sat}` + "%");
  rootVarSetter(lumVar, `${lum}` + "%");
}
export const currentTypeButton = (type: string) => {
  return type === "Primary"
    ? "primary-color-bg"
    : type === "Secondary"
    ? "secondary-color-bg"
    : "accent-color-bg";
};

export let colorsHSL = [];
for (let color of colorsMain) {
  const converted = colorConvert.keyword.hsl(color as any);
  colorsHSL.push(converted);
}

export default changeColor;

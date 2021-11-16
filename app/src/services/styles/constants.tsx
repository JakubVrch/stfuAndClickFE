export const theme = {
  colors: {
    primary: "#ff48c4",
    primaryLightDark: "#ad2e85",
    primaryDark: "#671c4f",
    background: "#1a1326",
    white: "white",
    lightGrey: "hsl(0deg 0% 90%)"
  }
}

export enum bp {
  M1 = 976,
  M2 = 764
}

export function mq(bp: bp) {
  return `@media (max-width: ${bp.valueOf()}px)`;
}

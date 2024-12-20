import { DOMParser, XMLSerializer } from "@xmldom/xmldom";
import { parse } from "path";

export function replaceTag(svg: string, newGroup: string, tag: string) {
  const parsed = extractSVG(svg);
  const parsedNew = extractSVG(newGroup);

  const doc = new DOMParser().parseFromString(parsed, "text/xml");

  const newDoc = new DOMParser().parseFromString(parsedNew, "text/xml");

  let hasit = parsed.includes(tag);

  const gTag = doc.getElementById(tag);

  gTag!.textContent = "";
  gTag?.appendChild(newDoc);

  return new XMLSerializer().serializeToString(doc);
}

export function extractSVG(image: string) {
  return window.atob(String(image).split("base64,").pop()!);
}

export function replaceNetworkEdges(svg: string, newHue: number) {
  const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(parsed, "text/xml");

  const planks = doc.getElementById("edges");

  if (planks) {
    planks.setAttribute('stroke', `hsl(${newHue},100%,50%)`);
  }

  let ok = new XMLSerializer().serializeToString(doc);
  // console.log("new: " + ok);
  return ok;
}


export function replaceStationFrame(svg: string, newHue: number) {
  const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(parsed, "text/xml");

  const planks = doc.getElementById("stations");

  if (planks) {
    planks.setAttribute('stroke', `hsl(${newHue},100%,50%)`);
  }

  let ok = new XMLSerializer().serializeToString(doc);
  // console.log("new: " + ok);
  return ok;
}

export const replacePlanet = (svg: string, colorOne: number, colorTwo: number, colorThree: number) => {

  const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(parsed, "text/xml");

  const one = doc.getElementById("planetOne");
  one?.setAttribute('fill', `hsl(${colorOne},46%,66%)`);

  const two = doc.getElementById("planetTwo");
  two?.setAttribute('fill', `hsl(${colorTwo},7%,43%)`);

  const three = doc.getElementById("planetThree");
  three?.setAttribute('fill', `hsl(${colorThree},17%,30%)`);


  return new XMLSerializer().serializeToString(doc);

}



export function extractEdgeColor(svg: string | undefined) {

  if (!svg) return 0;


  // console.log("extracting: " + svg);
  // const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(svg, "text/xml");
  const planks = doc.getElementById("edges");
  // console.log('planks: ', planks);

  const fill = planks?.getAttribute('stroke');
  // console.log('fill: ', fill);
  let HSL = 0;
  const hslString = fill?.substring(fill.indexOf("hsl("), fill.indexOf(")"));
  // console.log('hslString: ', hslString);
  if (hslString) {
    const hsl = hslString.split(",");
    HSL = parseInt(hsl[0].substring(4))
  }

  return HSL;
}

export function extractStationColor(svg: string | undefined) {

  if (!svg) return 0;


  // console.log("extracting: " + svg);
  // const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(svg, "text/xml");
  const planks = doc.getElementById("stations");
  // console.log('planks: ', planks);

  const fill = planks?.getAttribute('stroke');
  // console.log('fill: ', fill);
  let HSL = 0;
  const hslString = fill?.substring(fill.indexOf("hsl("), fill.indexOf(")"));
  // console.log('hslString: ', hslString);
  if (hslString) {
    const hsl = hslString.split(",");
    HSL = parseInt(hsl[0].substring(4))
  }

  return HSL;
}


export function extractSkyColors(svg: string) {
  // const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(svg, "text/xml");
  const gradient = doc.getElementById("skyGradient");
  // // gradient?.childNodes[0].
  const first = new XMLSerializer().serializeToString(gradient!.childNodes[0]);
  const second = new XMLSerializer().serializeToString(gradient!.childNodes[1]);

  const firstValue = first.substring(first.indexOf("hsl(") + 4, first.indexOf(","));
  const secondValue = second.substring(second.indexOf("hsl(") + 4, second.indexOf(","));
  // console.log("pulled: ", value);
  return [Number(firstValue), Number(secondValue)];
}

export function extractPlanetColors(svg: string) {
  // const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(svg, "text/xml");
  const one = doc.getElementById("planetOne");
  let row = new XMLSerializer().serializeToString(one!);
  const firstValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));

  const two = doc.getElementById("planetTwo");
  row = new XMLSerializer().serializeToString(two!);
  const secondValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));

  const three = doc.getElementById("planetThree");
  row = new XMLSerializer().serializeToString(three!);
  const thirdValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));


  // // // gradient?.childNodes[0].
  // const first = new XMLSerializer().serializeToString(gradient!.childNodes[0]);
  // const second = new XMLSerializer().serializeToString(gradient!.childNodes[1]);

  // const firstValue = first.substring(first.indexOf("hsl(") + 4, first.indexOf(","));
  // const secondValue = second.substring(second.indexOf("hsl(") + 4, second.indexOf(","));
  // console.log("pulled: ", value);
  return [Number(firstValue), Number(secondValue), Number(thirdValue)];
}

export function replaceSkyGradients(
  svg: string,
  newPrimary: number,
  newSecondary: number
) {
  const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(parsed, "text/xml");

  const night = doc.getElementById("skyGradient");
  // const day = doc.getElementById("dayGradient");

  if (newPrimary) {
    const primaryNight =
      'stop offset="0%" stop-color="hsl(' + newPrimary + ',100%,30%)"';
    night?.replaceChild(doc.createElement(primaryNight), night.childNodes[0]);

    // const primaryDay =
    //   'stop offset="0%" stop-color="hsl(' +
    //   rotateColor(newPrimary, 240) +
    //   ',100%,90%)"';

    // day?.replaceChild(doc.createElement(primaryDay), day!.childNodes[0]);
  }

  if (newSecondary) {
    const secondaryNight =
      'stop offset="100%" stop-color="hsl(' + newSecondary + ',100%,30%)"';
    night?.replaceChild(doc.createElement(secondaryNight), night.childNodes[1]);

    // const secondaryDay =
    //   'stop offset="100%" stop-color="hsl(' +
    //   rotateColor(newSecondary, 180) +
    //   ',100%,30%)"';

    // day?.replaceChild(doc.createElement(secondaryDay), day!.childNodes[1]);
  }

  return new XMLSerializer().serializeToString(doc);
}

// export function extractFirstSkyColor(svg: string) {
//   // const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(svg, "text/xml");
//   const gradient = doc.getElementById("skyGradient");
//   // // gradient?.childNodes[0].
//   const first = new XMLSerializer().serializeToString(gradient!.childNodes[0]);

//   const value = first.substring(first.indexOf("hsl(") + 4, first.indexOf(","));
//   // console.log("pulled: ", value);
//   return value;
// }

// export function extractSecondSkyColor(svg: string) {
//   // const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(svg, "text/xml");
//   const gradient = doc.getElementById("skyGradient");
//   // // gradient?.childNodes[0].
//   const first = new XMLSerializer().serializeToString(gradient!.childNodes[1]);

//   const value = first.substring(first.indexOf("hsl(") + 4, first.indexOf(","));
//   // console.log("pulled: ", value);
//   return value;
// }

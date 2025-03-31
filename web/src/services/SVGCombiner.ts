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



export function extractDope(svg: string | undefined) {

  if (!svg) return 0;

  // const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(svg, "text/xml");
  const gradient = doc.getElementById("dope");

  console.log(gradient);
  // // gradient?.childNodes[0].
  const first = new XMLSerializer().serializeToString(gradient!.childNodes[0]);

  console.log("first: ", first);

  const value = first.substring(first.indexOf("hsl(") + 4, first.indexOf(","));

  console.log("value: ", value);
  // console.log("pulled: ", value);
  return value;
}


export function replaceDope(svg: string, newHue: number) {
  const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(parsed, "text/xml");

//     const primaryNight =
//       'stop offset="0%" stop-color="hsl(' + newPrimary + ',100%,30%)"';
//     night?.replaceChild(doc.createElement(primaryNight), night.childNodes[0]);
// <stop stop-color="hsl(347, 0%, 0%)" offset="00%" />
// <stop stop-color="hsl(347, 56%, 31%)" offset="70%" />
// <stop stop-color="hsl(347, 56%, 53%)" offset="90%" />
// <stop stop-color="hsl(347, 56%, 63%)" offset="95%" />
// <stop stop-color="hsl(347, 56%, 83%)" offset="100%" />

console.log("new hue: ", newHue);

const newChildren = [
  'stop stop-color="hsl('+ newHue+', 0%, 0%)" offset="00%"',
  'stop stop-color="hsl('+ newHue+', 56%, 41%)" offset="70%"',
  'stop stop-color="hsl('+ newHue+', 56%, 53%)" offset="90%"',
  'stop stop-color="hsl('+ newHue+', 56%, 63%)" offset="95%"',
  'stop stop-color="hsl('+ newHue+', 56%, 83%)" offset="100%"'
]

  const dope = doc.getElementById("dope");

  console.log("old dope: ", dope?.childNodes[0]);

  for (let i = 0; i < newChildren.length; i++) {
    dope?.replaceChild(doc.createElement(newChildren[i]), dope.childNodes[i]);
  }

  console.log("new dope: ", dope?.childNodes[0]);

  return new XMLSerializer().serializeToString(doc);

}







// export function replaceNetworkEdges(svg: string, newHue: number) {
//   const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(parsed, "text/xml");

//   const planks = doc.getElementById("edges");

//   if (planks) {
//     planks.setAttribute('stroke', `hsl(${newHue},100%,50%)`);
//   }

//   let ok = new XMLSerializer().serializeToString(doc);
//   // console.log("new: " + ok);
//   return ok;
// }


// export function replaceStationFrame(svg: string, newHue: number) {
//   const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(parsed, "text/xml");

//   const planks = doc.getElementById("stations");

//   if (planks) {
//     planks.setAttribute('stroke', `hsl(${newHue},100%,50%)`);
//   }

//   let ok = new XMLSerializer().serializeToString(doc);
//   // console.log("new: " + ok);
//   return ok;
// }

export const replacePlanet = (svg: string, colorOne: number, colorTwo: number, sat: number, light: number) => {

  const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(parsed, "text/xml");

  const one = doc.getElementById("water");
  // one?.setAttribute('fill', `hsl(${colorOne},46%,66%)`);
  one?.setAttribute('fill', `hsl(${colorOne},${sat}%,${light}%)`);

  const two = doc.getElementById("ground");
  // two?.setAttribute('fill', `hsl(${colorTwo},7%,43%)`);
  two?.setAttribute('fill', `hsl(${colorTwo},${sat}%,${light}%)`);
  // const three = doc.getElementById("planetThree");
  // three?.setAttribute('fill', `hsl(${colorThree},17%,30%)`);


  return new XMLSerializer().serializeToString(doc);

}

// export const replacePlanetSL = (svg: string, saturation: number, lightness: number) => {

//   const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(parsed, "text/xml");

//   const one = doc.getElementById("water");

//   const [colorOne, colorTwo] = extractPlanetColors(svg);
//   // one?.setAttribute('fill', `hsl(${colorOne},46%,66%)`);
//   one?.setAttribute('fill', `hsl(${colorOne},${saturation}%,${lightness}%)`);

//   const two = doc.getElementById("ground");
//   // two?.setAttribute('fill', `hsl(${colorTwo},7%,43%)`);
//   two?.setAttribute('fill', `hsl(${colorTwo},${saturation}%,${lightness}%)`);
//   // const three = doc.getElementById("planetThree");
//   // three?.setAttribute('fill', `hsl(${colorThree},17%,30%)`);


//   return new XMLSerializer().serializeToString(doc);

// }

export const replaceNoiseSeed = (svg: string, seed: number) => {

  const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(parsed, "text/xml");

  const one = doc.getElementById("planet");
  const turb = one!.childNodes[0] as unknown as Element;
  // turb.
  // 
  // <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" seed="102" />

  turb.setAttribute('seed', `${seed}`);

  // const primaryNight =
  //   'stop offset="0%" stop-color="hsl(' + newPrimary + ',100%,30%)"';
  // night?.replaceChild(doc.createElement(primaryNight), night.childNodes[0]);


  // one?.setAttribute('fill', `hsl(${colorOne},46%,66%)`);
  // one?.setAttribute('fill', `hsl(${colorOne},25%,80%)`);

  // const two = doc.getElementById("ground");
  // two?.setAttribute('fill', `hsl(${colorTwo},7%,43%)`);
  // two?.setAttribute('fill', `hsl(${colorTwo},25%,80%)`);
  // const three = doc.getElementById("planetThree");
  // three?.setAttribute('fill', `hsl(${colorThree},17%,30%)`);


  return new XMLSerializer().serializeToString(doc);
}

export const extractNoiseSeed = (svg: string) => {
  const doc = new DOMParser().parseFromString(svg, "text/xml");


  const one = doc.getElementById("planet");
  const turb = one!.childNodes[0] as unknown as Element;
  return turb.getAttribute('seed');
  // turb.
}



// export function extractEdgeColor(svg: string | undefined) {

//   if (!svg) return 0;


//   // console.log("extracting: " + svg);
//   // const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(svg, "text/xml");
//   const planks = doc.getElementById("edges");
//   // console.log('planks: ', planks);

//   const fill = planks?.getAttribute('stroke');
//   // console.log('fill: ', fill);
//   let HSL = 0;
//   const hslString = fill?.substring(fill.indexOf("hsl("), fill.indexOf(")"));
//   // console.log('hslString: ', hslString);
//   if (hslString) {
//     const hsl = hslString.split(",");
//     HSL = parseInt(hsl[0].substring(4))
//   }

//   return HSL;
// }

// export function extractStationColor(svg: string | undefined) {

//   if (!svg) return 0;


//   // console.log("extracting: " + svg);
//   // const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(svg, "text/xml");
//   const planks = doc.getElementById("stations");
//   // console.log('planks: ', planks);

//   const fill = planks?.getAttribute('stroke');
//   // console.log('fill: ', fill);
//   let HSL = 0;
//   const hslString = fill?.substring(fill.indexOf("hsl("), fill.indexOf(")"));
//   // console.log('hslString: ', hslString);
//   if (hslString) {
//     const hsl = hslString.split(",");
//     HSL = parseInt(hsl[0].substring(4))
//   }

//   return HSL;
// }


// export function extractSkyColors(svg: string) {
//   // const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(svg, "text/xml");
//   const gradient = doc.getElementById("skyGradient");
//   // // gradient?.childNodes[0].
//   const first = new XMLSerializer().serializeToString(gradient!.childNodes[0]);
//   const second = new XMLSerializer().serializeToString(gradient!.childNodes[1]);

//   const firstValue = first.substring(first.indexOf("hsl(") + 4, first.indexOf(","));
//   const secondValue = second.substring(second.indexOf("hsl(") + 4, second.indexOf(","));
//   // console.log("pulled: ", value);
//   return [Number(firstValue), Number(secondValue)];
// }

export function extractPlanetColors(svg: string) {
  // const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(svg, "text/xml");
  const one = doc.getElementById("water");
  let row = new XMLSerializer().serializeToString(one!);
  const firstValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));

  const two = doc.getElementById("ground");
  row = new XMLSerializer().serializeToString(two!);
  const secondValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));

  // const three = doc.getElementById("planetThree");
  // row = new XMLSerializer().serializeToString(three!);
  // const thirdValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));


  // // // gradient?.childNodes[0].
  // const first = new XMLSerializer().serializeToString(gradient!.childNodes[0]);
  // const second = new XMLSerializer().serializeToString(gradient!.childNodes[1]);

  // const firstValue = first.substring(first.indexOf("hsl(") + 4, first.indexOf(","));
  // const secondValue = second.substring(second.indexOf("hsl(") + 4, second.indexOf(","));
  // console.log("pulled: ", value);
  return [Number(firstValue), Number(secondValue)];
}

export function extractPlanetSL(svg: string) {
  // const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(svg, "text/xml");
  const one = doc.getElementById("water");
  let row = new XMLSerializer().serializeToString(one!);
  const firstValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));
  let color = row.substring(row.indexOf("hsl("), row.indexOf(")") + 1);
  const firstSat = color.substring(color.indexOf(",") + 1, color.lastIndexOf(","));
  const firstLight = color.substring(color.lastIndexOf(",") + 1, color.lastIndexOf(")"));

  // const two = doc.getElementById("ground");
  // row = new XMLSerializer().serializeToString(two!);
  // const secondValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));
  // const color2 = row.substring(row.indexOf("hsl("), row.indexOf(")") + 1);
  // const secondSat = color2.substring(color2.indexOf(",") + 1, color2.lastIndexOf(","));
  // const secondLight = color2.substring(color2.lastIndexOf(",") + 1, color2.lastIndexOf(")"));

  // const three = doc.getElementById("planetThree");
  // row = new XMLSerializer().serializeToString(three!);
  // const thirdValue = row.substring(row.indexOf("hsl(") + 4, row.indexOf(","));


  // // // gradient?.childNodes[0].
  // const first = new XMLSerializer().serializeToString(gradient!.childNodes[0]);
  // const second = new XMLSerializer().serializeToString(gradient!.childNodes[1]);

  // const firstValue = first.substring(first.indexOf("hsl(") + 4, first.indexOf(","));
  // const secondValue = second.substring(second.indexOf("hsl(") + 4, second.indexOf(","));
  // console.log("pulled: ", value);
  return [Number(firstSat), Number(firstLight)];



}






// export function replaceSkyGradients(
//   svg: string,
//   newPrimary: number,
//   newSecondary: number
// ) {
//   const parsed = extractSVG(svg);
//   const doc = new DOMParser().parseFromString(parsed, "text/xml");

//   const night = doc.getElementById("skyGradient");
//   // const day = doc.getElementById("dayGradient");

//   if (newPrimary) {
//     const primaryNight =
//       'stop offset="0%" stop-color="hsl(' + newPrimary + ',100%,30%)"';
//     night?.replaceChild(doc.createElement(primaryNight), night.childNodes[0]);

//     // const primaryDay =
//     //   'stop offset="0%" stop-color="hsl(' +
//     //   rotateColor(newPrimary, 240) +
//     //   ',100%,90%)"';

//     // day?.replaceChild(doc.createElement(primaryDay), day!.childNodes[0]);
//   }

//   if (newSecondary) {
//     const secondaryNight =
//       'stop offset="100%" stop-color="hsl(' + newSecondary + ',100%,30%)"';
//     night?.replaceChild(doc.createElement(secondaryNight), night.childNodes[1]);

//     // const secondaryDay =
//     //   'stop offset="100%" stop-color="hsl(' +
//     //   rotateColor(newSecondary, 180) +
//     //   ',100%,30%)"';

//     // day?.replaceChild(doc.createElement(secondaryDay), day!.childNodes[1]);
//   }

//   return new XMLSerializer().serializeToString(doc);
// }

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

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

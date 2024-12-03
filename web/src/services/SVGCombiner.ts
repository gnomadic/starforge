import { DOMParser, XMLSerializer } from "@xmldom/xmldom";

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

export function replaceFloorPlanks(svg: string, H: number, S: number, L: number) {
  const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(parsed, "text/xml");

  const planks = doc.getElementById("floorplank");

  if (planks) {
    planks.setAttribute('fill', `hsl(${H},${S}%,${L}%)`);
  }

  let ok = new XMLSerializer().serializeToString(doc);
  // console.log("new: " + ok);
  return ok;
}

export function extractFloorColor(svg: string | undefined) {

  if (!svg) return { h: 0, s: 0, l: 0, a: 0 };
  // console.log("extracting: " + svg);
  // const parsed = extractSVG(svg);
  const doc = new DOMParser().parseFromString(svg, "text/xml");
  const planks = doc.getElementById("floorplank");
  // console.log('planks: ', planks);

  const fill = planks?.getAttribute('fill');
  // console.log('fill: ', fill);
  let HSL = { h: 0, s: 0, l: 0, a: 0 };
  const hslString = fill?.substring(fill.indexOf("hsl("), fill.indexOf(")"));
  // console.log('hslString: ', hslString);
  if (hslString) {
    const hsl = hslString.split(",");
    HSL = { h: parseInt(hsl[0].substring(4)), s: parseInt(hsl[1]), l: parseInt(hsl[2]), a: parseInt(hsl[3]) };
  }

  return HSL;
}


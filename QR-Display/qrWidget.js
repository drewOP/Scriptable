// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: infinity;

/* =======================================================
Script Name : QR - Display
Author      : https://github.com/drewop/
Version     : 1.0.0
Description : 
  Display QR-Code with custom Values
Dependencies: N/A
Actions     : 
======================================================= */

const BASE_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const param = args.widgetParameter;
const gradient = new LinearGradient();
gradient.colors = [new Color('#3f5efb'), new Color('#fc466b')];
gradient.locations = [1,0];
gradient.startPoint = new Point(1,1);
gradient.endPoint = new Point(0,0);

const code = await fetchQrCode();
const widget = createWidget(code);
Script.setWidget(widget);
Script.complete();

async function fetchQrCode() {
  const url = `${BASE_URL}${param}`;
  
  try {
    const req = new Request(url);
    const response = await req.loadImage();
    return response;
  } catch (error) {
    console.log(error);
  }
  

}

function createWidget(code) {
  const widget = new ListWidget();
  widget.backgroundGradient = gradient;
  widget.addImage(code);
  widget.setPadding(10, 15, 15, 10);
  return widget;
}

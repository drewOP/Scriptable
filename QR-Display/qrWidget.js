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

const code = await fetchQrCode();
const widget = createWidget(code);
Script.setWidget(widget);
Script.complete();

async function fetchQrCode(code) {
  const url = `${BASE_URL}${code}`;
  
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
  widget.backgroundImage = code;
  return widget;
}
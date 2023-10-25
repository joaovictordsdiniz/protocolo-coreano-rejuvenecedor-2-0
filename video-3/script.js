const dataAtual = new Date();
const dataFormatada = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`;
const spanData = document.getElementById('dataAtual');
spanData.textContent = dataFormatada;

if (!document.querySelector('script[src^="https://player.pandavideo.com.br/api.v2.js"]')) { let s = document.createElement('script'); s.src = 'https://player.pandavideo.com.br/api.v2.js'; s.async = true; document.head.appendChild(s); } window.pandascripttag = window.pandascripttag || []; window.pandascripttag.push(function () { const p = new PandaPlayer('panda-d6436af5-0bac-4692-9109-c6af27f13ea1', { onReady() { p.loadButtonInTime({ fetchApi: true }) } }); })
console.log('Here is contentScript');

createIframe();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Get response in contentScript, the request is from: ', request.from);
});

function createIframe() {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  const iframe = document.createElement('iframe');
  iframe.id = 'iframe-in-root';
  iframe.allow = 'microphone;camera;';
  iframe.sandbox = 'allow-scripts allow-same-origin allow-forms';
  iframe.setAttribute('allowFullScreen', '');
  iframe.scrolling = 'no';
  iframe.style.cssText = `
    width: 50%;
    height: 50%;
    border: 0;
    margin: 0;
    z-index: 2147483647;
    background-color: #EAEAEA;
    border: 1px solid #EAEAEA;
    filter: none;
    display: block;
  `;
  iframe.src = chrome.runtime.getURL('index.html');

  root.style.cssText = `
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 2147483647;
  `;
  root.prepend(iframe);
}

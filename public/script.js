const textbox = document.getElementById('keyOutput');
const normalButton = document.getElementById('normalKeyButton');
const oemButton = document.getElementById('oemKeyButton');

oemButton.addEventListener('click', () => {
  keyRequest(0);
});

normalButton.addEventListener('click', () => {
  keyRequest(1);
});

function keyRequest(type) {
  getData(type).then((data) => {
    textbox.innerHTML = data['key'];
  });
}

async function getData(type) {
  let url = window.location.href;
  switch (type) {
    case 0:
      url += 'api/oem';
      break;
    case 1:
      url += 'api/normal';
      break;
  }
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

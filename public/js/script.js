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
  postData(type).then((data) => {
    textbox.innerHTML = data["key"];
  });
}

// Example POST method implementation:
async function postData(type) {
  let url = window.location.href;
  switch (type) {
    case 0:
      url += 'oem';
      break;
    case 1:
      url += 'normal';
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
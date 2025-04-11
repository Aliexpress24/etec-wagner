


fetch(URL, { method: 'get' })
  .then(response => response.json())
  .then(data => {
    document.getElementById('dados').textContent = JSON.stringify(data, null, 2);
  });

function getDados() {
  fetch('main.php')
    .then(TRALALEIRO);
}

function TRALALEIRO(response) {
  response.json().then(data => {
    console.log(data.nome);
    console.log(data.idade);
  });
}
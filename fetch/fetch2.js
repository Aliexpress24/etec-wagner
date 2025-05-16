const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const img = document.getElementById('img');

btnGo.addEventListener('click', (event) => {
  event.preventDefault();

  const id = characterId.value;

  fetch('api.php?id=' + id)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        content.textContent = "Erro: " + data.error;
        img.src = "";
        img.alt = "";
      } else {
        content.textContent = `Nome: ${data.name}\nStatus: ${data.status}\nEspécie: ${data.species}`;
        img.src = data.image;
        img.alt = data.name;
      }
    })
    .catch((err) => {
      content.textContent = "Erro ao buscar dados.";
      console.error(err);
    });
});

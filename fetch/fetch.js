const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');


const fetchApi = (value) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  });

  return result;
 }
 
    

btnGo.addEventListener('click', (event) => {
    event.preventDefault ();
    const result = fetchApi (characterId.value)
});
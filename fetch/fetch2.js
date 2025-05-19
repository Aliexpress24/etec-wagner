fetch('./main.php')

.then(response => response.json())
.then(data => console.log(data) ) 

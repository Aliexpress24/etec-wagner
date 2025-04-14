<!DOCTYPE html>
<html lang="en">
<head>
<link rel="icon" href="data:,">
    <link rel="stylesheet" href="estilo.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   

    <script src="alunos.js"></script>
    <script>
    function handleResult(response) {
        response.json().then(
            (data) => {
                console.log("Nome: " + data.nome);
                console.log("Idade: " + data.idade);

            }
        );
    }

    fetch("/main.php").then(handleResult);
</script>

</head>
<body>
    <h1>Gerenciar Alunos</h1>

</body>
</html>
<?php
// api.php
header('Content-Type: application/json');

// Verifica se o parâmetro "id" foi enviado
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'ID inválido']);
    exit;
}

$id = intval($_GET['id']);
$url = "https://rickandmortyapi.com/api/character/$id";

// Faz a requisição à API externa
$response = @file_get_contents($url);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao buscar personagem.']);
    exit;
}

// Retorna os dados da API como JSON
echo $response;
 ?>

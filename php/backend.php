<?php
header("Content-Type: application/json");

// Datos de la habitación
$habitacion = [
    "paredes" => ["color" => "#888888", "textura" => "liso"],
    "suelo" => ["color" => "#555555", "textura" => "madera"],
    "decoraciones" => [
        ["tipo" => "poster", "url" => "assets/poster.jpg"],
        ["tipo" => "lampara", "posicion" => [2, 1, -2]]
    ]
];

// Enviar datos como JSON
echo json_encode($habitacion);
?>
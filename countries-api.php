<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$countries = [
    [
        "name" => "Sweden",
        "population" => 10481937
    ],
    [
        "name" => "Japan",
        "population" => 125360000
    ],
    [
        "name" => "Tyskland",
        "population" => 83695430
    ],
    [
        "name" => "USA",
        "population" => 331449281
    ],
    [
        "name" => "Danmark",
        "population" => 5785864
    ]
];

echo json_encode($countries);
?> 
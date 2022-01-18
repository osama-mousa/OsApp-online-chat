<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require __DIR__ . '/vendor/autoload.php';

$app_id = '1331185';
$app_key = 'f1441a10a3b22e52a3c4';
$app_secret = 'd9cda908b7211a0307e5';
$app_cluster = 'eu';

$pusher = new Pusher\Pusher($app_key, $app_secret, $app_id, ['cluster' => $app_cluster]);

print_r($pusher->trigger('room', 'message-received', ['name' => $_POST['name'], 'text' => $_POST['message']]));
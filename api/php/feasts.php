<?php

header ( "Content-Type: application/json; charset=utf-8" );

$allowedOrigins = [
  "https://revive-consecrations.co.uk",
  "https://www.revive-consecrations.co.uk",
  "http://localhost:4200",
];
$origin = $_SERVER [ "HTTP_ORIGIN" ] ?? "";

if ( in_array ( $origin, $allowedOrigins ) ) {
  header ( "Access-Control-Allow-Origin: $origin" );
}

if ( $_SERVER [ "REQUEST_METHOD" ] === "GET" ) {

  require_once  __DIR__ . '/db.php';
  $db = new DB ( );
  $conn = $db->connect ( );

  if ( isset ( $_GET [ "category" ] ) ) {

    echo json_encode (

      $db->query (

        "SELECT `name`, `date`, `dateDescription`, `description`, `url` FROM `feasts` WHERE `category` = :category",
        [ "category" => $_GET [ "category" ] ]

      )

    );

  } else {

    echo json_encode ( [ ] );

  }

} else {

  http_response_code ( 422 );
  echo ( "Request Invalid" );

}
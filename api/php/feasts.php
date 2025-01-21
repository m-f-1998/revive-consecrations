<?php

header ( "Content-Type: application/json; charset=utf-8" );
header ( "Access-Control-Allow-Origin: http://localhost" );

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
<?php
    
    require 'dbconnection.php';

    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
   
//
//    $username = $data->username;
//    $password = $data->password;
//  
//    
//    echo json_encode($request_body);
//    if(isset($data)){
//        
//    $sql = "SELECT * From USER 
//			WHERE username=$username AND password=$password";
//        
//    $result = mysqli_query($conn,$sql);
//    
//    }
    $sql = "SELECT * From child_information";
        
    $result = mysqli_query($conn,$sql);

    $data =array();

    while($row = mysqli_fetch_array($result)){
        $data[] = $row;
    }

    echo json_encode($data);
    
    
?>
<?php
    
    require 'dbconnection.php';

    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    /*SerialNo, ParentsName, Relationship, ChildsName, Dob, HoursPerDay, ContactNumber, Email, Comments, ContactStatus, UpdatedBy, UpdatedTime */


    $SerialNo = $data->SerialNo;
    $ParentsName = $data->ParentsName;
    $Relationship = $data->Relationship;
	$ChildsName = $data->ChildsName;

    $Dob = $data->Dob;
    $HoursPerDay = $data->HoursPerDay;
    $ContactNumber = $data->ContactNumber;
	$Email = $data->Email;

    $Comments = $data->Comments;
    $ContactStatus = $data->ContactStatus;
    $UpdatedBy = $data->UpdatedBy;
	$UpdatedTime = $data->UpdatedTime;
    
   // echo json_encode($request_body);
    if(isset($data)){
        
   /* $sql = "INSERT INTO tbl_backend (name, mobile, designation, salary)
        VALUES ('$name','$mobile','$designation','$salary')"; */
        
    $sql= "INSERT INTO child_information (SerialNo, ParentsName, Relationship, ChildsName, Dob, HoursPerDay, ContactNumber, Email, Comments, ContactStatus, UpdatedBy, UpdatedTime)  VALUES ( '$SerialNo', '$ParentsName', '$Relationship', '$ChildsName', '$Dob', '$HoursPerDay', '$ContactNumber', '$Email', '$Comments', '$Status', '$UpdatedBy', '$UpdatedTime')";
    echo $sql;
    $result = mysqli_query($conn,$sql);
    
    }
?>


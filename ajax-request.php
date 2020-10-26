<?php

if (isset($_POST["action"])) {
    $request = $_POST;
} else {
    if (isset($_GET["action"])) {
        $request = $_GET;
    }
}

switch ($request['action']) {
    case 'save_to_json':

        break;

    case 'get_data':
            
        break;

    case 'delete_data':
            
        break;
    
    default:
        echo json_encode(array('message'=>'error!'));
        exit();
        break;
}



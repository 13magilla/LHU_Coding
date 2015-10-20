<?php

$command = "ypcat passwd | grep -w -i ^".escapeshellarg(urldecode($_POST['UN']));
$result = shell_exec($command);

if($result == NULL) {	

	header('Location: ../index.html');
}

else {
	
	$userinfo = explode(":", $result);// split the result by : seporators
	$storedpwhash = $userinfo[1];// set the pw info
	$storedusername = $userinfo[0];
	

	if(urldecode($_POST['UN']) == $storedusername && $storedpwhash == crypt(urldecode($_POST['PW']), $storedpwhash)) {
		
		header('Location: ../../home/index.html');
	
	}

	else {
	
		header('Location: ../index.html');

	}
	
}

?>

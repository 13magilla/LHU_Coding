<?php
// TODO: Take this and construct authenticator class

$command = "ypcat passwd | grep -w -i ^".escapeshellarg(urldecode($_POST['UN']));
$result = shell_exec($command); // execute shell command

if($result == NULL) {	

	header('Location: ../index.html');
}

else {
	
	$userInfo = explode(":", $result);// split the result by : separators
    $storedUsername = $userinfo[0];
	$storedHash = $userinfo[1];// set the pw hash info
	
    // sanity check on username and check on hashed password against stored hash password
	if(urldecode($_POST['UN']) == $storedusername && $storedpwhash == crypt(urldecode($_POST['PW']), $storedpwhash)) {
		
		header('Location: ../../home/index.html'); // success redirect to the home page
        
        //TODO create session
	
	}

	else {
	
		header('Location: ../index.html'); // failure redirect to the login page

	}
	
}

?>

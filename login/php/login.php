<?php
// TODO: Take this and construct authenticator class

// this command will fetch the user information from the penguin accounts server
$command = "ypcat passwd | grep -w -i ^".escapeshellarg(urldecode($_POST['UN']));
$userInfo = shell_exec($command); // execute shell command

// if userInfo is null the username does not exist
// shell_exec gurantees returning NULL if the result of the query is empty
if($userInfo == NULL) {	

	header('Location: ../index.html'); // failure redirect to login page
}

else {
    
    // if userInfo is not NULL it will be in the following format:
    // USERNAME:$HASH ALGORITHM NUMBER USED FOR PASSWORD$SALT USED FOR HASH$HASHED PASSWORD:more info not needed for login
    
	$userInfoArr = explode(":", $userInfo);// split the userInfo by the : separators
    $storedUsername = $userinfoArr[0]; // grab the stored username
	$storedHash = $userinfoArr[1];// grab the stored password hash info
	
    // sanity check on user entered username
    // crypt takes the user entered password and hashes it then compares the hash with the stored password hash retrieved from penguin
	if(urldecode($_POST['UN']) == $storedusername && $storedpwhash == crypt(urldecode($_POST['PW']), $storedHash)) {
		
		header('Location: ../../home/index.html'); // login success redirect to the home page
        
        // TODO: create and store session info
	
	}

	else {
	
		header('Location: ../index.html'); // login failure redirect to the login page

	}
	
}

?>

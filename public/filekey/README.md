# FileKey
For WebAuthn to work, set id in webauthn_h to your own hostname (IP address won't work).

```
function domInit(){
	main_inner = document.getElementById("main_inner");
	
	
	initWorkers();
	initDB();
	registerBasicSw();

--- webauthn_h = new webauthn_handler({name:"Filekey", id:"filekey.app"});
+++ webauthn_h = new webauthn_handler({name:"Filekey", id:"example.com"});
```
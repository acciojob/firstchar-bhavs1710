function firstChar(text) {
  // your code here
	let t;
	if(text.charAt(0)!=" "){
		t=text.charAt(0);
		return t;
	}
	if(text.charAt(0)==""){
		t=" ";
		return t;
	}
	
}

// Do not change the code below

const text = prompt("Enter text:");

alert(firstChar(text));

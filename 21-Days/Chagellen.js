

/*function countEssential(){
  var res = 0;
	for (let i = 0; i < availableModules.length; i++) {
		if (availableModules[i].essential){
			res++;
		}
	}
	return res;
}*/

/*function find(){
for (let i = 0; i < availableModules.length; i++)
		if (availableModules[i].name==="life-support")
			loadModule(i)
}*/

function loadModule(i){
    //  availableModules[i].essencial=true; 
    // You have to remove this when you take this messenge ”Cannot set property ‘enabled’ of undefined”
  ship.modules.push(availableModules[i]);
}


function findModuleIndex (word){
  for (var i = 0; i < availableModules.length; i++)
		if ( availableModules[i].essential && availableModules[i].name == word)
		 return i
}

function resetLARRY(){
  for (var i = 0; i < 10; i++)
		LARRY.quack();
}

// Estoy agregardo alfo
console.log("Hola");
function setMessage() {
  radio.message=JSON.stringify(navigation);
}


// Chagellen 10#
function activateBeacon(){
		  radio.beacon=true;
}

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));
setMessage();
resetLARRY();
loadModule(findModuleIndex("communication"));



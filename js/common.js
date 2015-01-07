// Send a query to a service
function query(url, callback_name){
	var prefix = url.indexOf('?') >= 0 ? '&' : '?';
	url = url.concat(prefix+'callback='+callback_name);
	script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}


// Format given date
function friendly_date(date){
	var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "June", 
							"July", "Aug", "Sep", "Oct", "Nov", "Dec");
	var day   = date.getDate();
	var month = months[date.getMonth()];
	var year  = date.getFullYear();
	return month + ' ' + day + ', ' + year;
}


// ------------------------- DOM 'n NODES ------------------------------


// Insert node after
function insert_after(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


// New node
function new_node(name, text, classes, id) {
	
	var el   = document.createElement(name);
	var text = document.createTextNode(text);
	el.appendChild(text);
	
	if (typeof(classes) == "string") {
		var attr = document.createAttribute("class");
		attr.value = classes;
		el.setAttributeNode(attr);
	}
	else if (classes) {
		var attr = document.createAttribute("class");
		for (var i = 0; i < classes.length; i++) {
			attr.value += classes[i]+' ';
		}
		el.setAttributeNode(attr);
	}
	
	if (typeof(id) == "string") {
		var attr   = document.createAttribute("id");
		attr.value = id;
		el.setAttributeNode(id);
	}
	
	return el;
}

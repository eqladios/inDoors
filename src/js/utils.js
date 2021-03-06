/*****************************************************
Utility functions for linker.js
*****************************************************/

// Check if company is already in localstorage
var checkDatabase = function(name) {
    if(localStorage[name]) {
		return true;
    }
    return false;
}

// Save ratings into local storage, and keep track of how old it is
var save = function(name, info) {
	localStorage[name] = info;
	var date = new Date();
	localStorage["gd-retrieval-date"] = date.toDateString();
}

// Load rating
var load = function(name) {
    return localStorage[name];
}

// Convert 2500 to 2.5K
function kFormatter(num) {
	if (num > 9999) {
		return (num/10000).toFixed(1)*10 + 'k'
	}
    else if (num > 999) {
		return (num/1000).toFixed(1) + 'k'
	}
	else{
		return num;
	}
}

// Convert span element to an anchor element
function spanToLink(span){
	let anchor = document.createElement('a');
	
	anchor.innerHTML = DOMPurify.sanitize(span.innerHTML);
	span.getAttributeNames()
			.forEach(attrName => {
				const attrValue = span.getAttribute(attrName);
				anchor.setAttribute(attrName, attrValue);
			});
	span.parentNode.replaceChild(anchor, span);
}

const parenthesesRegex = /\s*\(.*?\)\s*/g;

function cleanCompanyName(name){
    name = name.trim();

	// To avoid misdirected name searches
	const replaceManyStr = (obj, sentence) => obj.reduce((f, s) => `${f}`.replace(Object.keys(s)[0], s[Object.keys(s)[0]]), sentence)
	name = replaceManyStr(misdirectArray, name);

	// Remove ampersands because Glassdoor URL's don't work with them
	name = name.replace("&", "");

	// Remove accents/diacritics
	const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	name = normalize(name);

	// Remove text after colons, and vertical bars and dashes surrounded by spaces
	name = name.replace(/(\:|(\s\-\s)|(\s\|\s)|(\s\–\s)).*$/, "");

	// Remove company suffixes 
	name = name.replace(/®|™|(Inc\.)|(Inc)|\sLP|\sPBC/, "");

	// Remove parentheses and text inside of them
    name = name.replace(parenthesesRegex, "");
    
    name = name.trim();

    return name;
}
/************************************* Logged in UI *************************************/
// /jobs/search/* Left result list
[...document.querySelectorAll("[data-control-name='job_card_company_link']")]
	.forEach(element => {
		const name = element.childNodes[2].wholeText;
		appendGlassdoor(element, name);
	});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches("[data-control-name='job_card_company_link']")) {
					const name = node.childNodes[2].wholeText;
					appendGlassdoor(node, name);
				}
			}
		}
}).observe(document, {subtree: true, childList: true});

// /jobs/search/* Right rail top card
var observer = new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		if (mutation.type == "childList") {
			for(let node of mutation.addedNodes) {
				node = node.parentNode;
				if (!(node instanceof HTMLElement)) continue;	// We track only elements, skip other nodes (e.g. text nodes)
			
				// Check the inserted element
				if (node.matches(".jobs-details-top-card__company-url") ||
					node.matches(".jobs-details-top-card__company-info")) {	// Company names w/o hrefs
					let name = node.innerText.split(/\r?\n/)[1];
					if (name !== 'Company Location') {	// No company name
						appendGlassdoor(node, name, twoLines=true);
					}
					else{
						node.parentNode.querySelectorAll(".glassdoor-label-wrapper").forEach(e => e.parentNode.removeChild(e));
					}
				}
			}
		}
		// On text change
		else if (mutation.type == "characterData") {
			let node = mutation.target.parentNode;
			if (!(node instanceof HTMLElement)) continue;	// We track only elements, skip other nodes (e.g. text nodes)

			// Check changed element
			if (node.matches(".jobs-details-top-card__company-url") ||
				node.matches(".jobs-details-top-card__company-info")) {	// Company names w/o hrefs
				let name = node.innerText.split(/\r?\n/)[1];
				if (name !== 'Company Location') {	// No company name
					appendGlassdoor(node, name, twoLines=true)
				}
				else{
					node.parentNode.querySelectorAll(".glassdoor-label-wrapper").forEach(e => e.parentNode.removeChild(e));
				}
			}
		}
	}
}).observe(document, {characterData: true, attributeFilter: [ "href" ], subtree: true, childList: true});

// /my-items/saved-jobs/*
[...document.querySelectorAll(".reusable-search__entity-results-list .entity-result__primary-subtitle")]
	.forEach(element => {
		const name = element.childNodes[2].textContent;
		appendGlassdoor(element, name, twoLines=false, classesToAdd="t-14");
	});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".reusable-search__entity-results-list .entity-result__primary-subtitle")) {	
					const name = node.childNodes[2].textContent;
					appendGlassdoor(node, name, twoLines=false, classesToAdd="t-14"); 
				}
			}
		}
}).observe(document, {subtree: true, childList: true});


// /jobs
[...document.querySelectorAll(".jobs-blended-container .job-card-square__text--1-line .job-card-container__company-name")]
	.forEach(element => {
		const name = element.childNodes[2].wholeText;
		appendGlassdoor(element.parentNode, name, twoLines=true, classesToAdd="artdeco-entity-lockup__subtitle")
});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".jobs-blended-container .job-card-square__text--1-line .job-card-container__company-name")) {
					const name = node.childNodes[2].wholeText;
					appendGlassdoor(node.parentNode, name, twoLines=true, classesToAdd="artdeco-entity-lockup__subtitle")
				}
			}
		}
}).observe(document, {subtree: true, childList: true});

// /company/*/jobs/ Recently posted jobs
[...document.querySelectorAll(".org-jobs-recently-posted-jobs-module .job-card-square__text--1-line .job-card-container__company-name")]
	.forEach(element => {
		const name = element.childNodes[2].wholeText;
		appendGlassdoor(element.parentNode, name, twoLines=true, classesToAdd="artdeco-entity-lockup__subtitle")
});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".org-jobs-recently-posted-jobs-module .job-card-square__text--1-line .job-card-container__company-name")) {
					const name = node.childNodes[2].wholeText;
					appendGlassdoor(node.parentNode, name, twoLines=true, classesToAdd="artdeco-entity-lockup__subtitle")
				}
			}
		}
}).observe(document, {subtree: true, childList: true});

// /company/*
[...document.querySelectorAll(".org-top-card-summary__title")]
	.forEach(element => {
		const name = element.textContent;
		appendGlassdoor(element, name, twoLines=false, classesToAdd="t-14");
	});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".org-top-card-summary__title")) {
					const name = node.textContent;
					appendGlassdoor(node, name, twoLines=false, classesToAdd="t-14");
				}
			}
		}
}).observe(document, {subtree: true, childList: true});

// /jobs/view/* Top card
[...document.querySelectorAll(".jobs-top-card__company-url")]
	.forEach(element => {
		const name = element.textContent;
		appendGlassdoor(element.parentNode, name, twoLines=false, classesToAdd="t-14");
	});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".jobs-top-card__company-url")) {
					const name = node.textContent;
					appendGlassdoor(node.parentNode, name, twoLines=false, classesToAdd="t-14");
				}
			}
		}
}).observe(document, {subtree: true, childList: true});

// /jobs/view/* Similar jobs
[...document.querySelectorAll(".job-card--tile .t-14")]
	.forEach(element => {
		const name = element.wholeText;
		appendGlassdoor(element, name, twoLines=true, classesToAdd="t-12")
});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".job-card--tile .t-14")) {
					const name = node.textContent;
					appendGlassdoor(node, name, twoLines=true, classesToAdd="t-12"); 
				}
			}
		}
}).observe(document, {subtree: true, childList: true});

/************************************* Guest UI *************************************/
// /jobs/* Left result list and /jobs/view/* Bottom results list  
[...document.querySelectorAll(".job-result-card__subtitle-link")]
	.forEach(element => {
		const name = element.textContent;
		appendGlassdoor(element, name);
	});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".job-result-card")) {
					const nameNode = node.querySelector(".job-result-card__subtitle-link");
					const name = nameNode.textContent;
					appendGlassdoor(nameNode, name);
				}
			}
		}
}).observe(document, {subtree: true, childList: true});

// /jobs/* Right top card
new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".topcard")) {
					const nameNode = node.querySelector(".topcard__org-name-link")
					const name = nameNode.textContent;
					appendGlassdoor(nameNode.parentNode.parentNode, name);
				}
			}
		}
}).observe(document, {subtree: true, childList: true, attributes: true});

// /jobs/view/* Top card
[...document.querySelectorAll(".topcard__org-name-link")]
	.forEach(element => {
		const name = element.textContent;
		appendGlassdoor(element.parentNode.parentNode, name);
	});
	
// /jobs/view/* Right rail
[...document.querySelectorAll(".people-also-viewed__list .result-card__subtitle--reduced-whitespace")]
	.forEach(element => {
		const name = element.textContent;
		appendGlassdoor(element, name, twoLines=true, classesToAdd="result-card__subtitle--reduced-whitespace");
	});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(".people-also-viewed__list .result-card__subtitle--reduced-whitespace")) {
					const name = node.textContent;
					appendGlassdoor(node, name, twoLines=true, classesToAdd="result-card__subtitle--reduced-whitespace");
				}
			}
		}
}).observe(document, {subtree: true, childList: true});

// /company/* Right Rail
[...document.querySelectorAll(".show-more-less__list .result-card__title--reduced-whitespace")]
	.forEach(element => {
		const name = element.textContent;
		appendGlassdoor(element, name, twoLines=true, "result-card__subtitle result-card__subtitle--reduced-whitespace");
	});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)
				
				// check the inserted element
				if (node.matches(".show-more-less__list .result-card__title--reduced-whitespace")) {
					const name = node.textContent;
					appendGlassdoor(node, name, twoLines=true, "result-card__subtitle result-card__subtitle--reduced-whitespace");
				}
			}
		}
}).observe(document, {subtree: true, childList: true});
	
// /company/* Top card
[...document.querySelectorAll(":not(.profile) .top-card-layout__title")]
	.forEach(element => {
		const name = element.textContent;
		appendGlassdoor(element, name);
	});

new MutationObserver(function(mutations) {
	for(let mutation of mutations) {
		for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;	// we track only elements, skip other nodes (e.g. text nodes)

				// check the inserted element
				if (node.matches(":not(.profile) .top-card-layout__title")) {
					const name = node.textContent;
					appendGlassdoor(node, name);
				}
			}
		}
}).observe(document, {subtree: true, childList: true});
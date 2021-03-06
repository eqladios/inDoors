// /jobs
[...document.querySelectorAll('.company')]
    .forEach(nameNode => {
        const name = nameNode.textContent;
        appendGlassdoor(nameNode.parentNode, name);
});

// /cmp/
const cmpNode = document.querySelector('.cmp-CompactHeaderCompanyName');

if(cmpNode) {
    appendGlassdoor(cmpNode.parentNode.nextElementSibling, cmpNode.textContent);
}

// /viewjob
const viewjobNode = document.querySelector('.jobsearch-InlineCompanyRating a');

if(viewjobNode) {
    appendGlassdoor(viewjobNode.parentNode.parentNode, viewjobNode.textContent);
}
async function fetchHtmlAsText(url) {  // https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
    return await (await fetch(url)).text();
}

async function loadHtml(element, path) {
    const contentDiv = document.getElementById(element);
    contentDiv.innerHTML = await fetchHtmlAsText(path);
}
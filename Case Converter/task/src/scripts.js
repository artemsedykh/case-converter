const textarea = document.getElementsByTagName("textarea")[0];

const uppercasebtn = document.getElementById('upper-case');

uppercasebtn.addEventListener("click",
    function () {
        textarea.value = textarea.value.toUpperCase();
    });

const lowercasebtn = document.getElementById('lower-case');

lowercasebtn.addEventListener("click",
    function () {
        textarea.value = textarea.value.toLowerCase();
    });

const propercasebtn = document.getElementById('proper-case');

propercasebtn.addEventListener("click",
    function () {
        let words = textarea.value.split(" ");
        words.forEach(
            function (w, i, array){
                array[i] = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
            }
        );
        textarea.value = words.join(" ");
    });

const sentencecasebtn = document.getElementById('sentence-case');

sentencecasebtn.addEventListener("click",
    function () {
        let words = textarea.value.split(" ");
        let first = true;
        for (let i = 0; i < words.length; i++){
            if (first){
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
            }
            else {
                words[i] = words[i].toLowerCase();
            }
            console.log(words[i].slice(-1));
            first = [".", "!", "?"].includes(words[i].slice(-1));
            console.log(first);
        }
        textarea.value = words.join(" ");
    });

const savetxtbtn = document.getElementById('save-text-file');

savetxtbtn.addEventListener("click",
    function () {
        download('text.txt', textarea.value)
    })

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
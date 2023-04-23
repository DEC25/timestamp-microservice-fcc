const PROTOCOL = window.location.protocol;
const HOST = window.location.host;
const EXAMPLE_URL = `${PROTOCOL}//${HOST}/api`

let example1 = document.getElementById('example1');
let example2 = document.getElementById('example2');
let example3 = document.getElementById('example3');

example1.innerHTML += `<a href="${EXAMPLE_URL}/">[host]/api/</a>`;
example2.innerHTML += `<a href="${EXAMPLE_URL}/2023-04-22">[host]/api/2023-04-22</a>`;
example3.innerHTML += `<a href="${EXAMPLE_URL}/1682224429635">[host]/api/1682224429635</a>`;

import "./assets/css/index.css";

function render() {
  var div = document.createElement("div");
  div.innerHTML = "Hello World";
  document.body.appendChild(div);

  var div2 = document.createElement("div");
  div2.innerHTML = "Jack and Rose";
  document.body.appendChild(div2);
}
render();
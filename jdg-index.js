const jdgA = document.querySelectorAll(".jdg-a");
const faPlus = document.querySelectorAll(".fa-plus");
const valid = [];

const createHandler = (i) => {
  return () => {
    if (valid[i]) {
      faPlus[i].style =
        "-webkit-transform: rotate(45deg); transform: rotate(45deg);";
    } else {
      faPlus[i].style = "";
    }
    valid[i] = !valid[i];
  };
};

for ([i, item] of jdgA.entries()) {
  valid[i] = true;
  item.addEventListener("click", createHandler(i));
}

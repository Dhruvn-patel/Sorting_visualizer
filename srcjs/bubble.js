let count = 0;
async function bubble() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      count++;
      ele[j].style.background = "blue";
      ele[j + 1].style.background = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await wait(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "cyan";
      ele[j + 1].style.background = "cyan";
    }
    ele[ele.length - i - 1].style.background = "rgb(5, 184, 10)"; //green
  }
}

const bubbleSortBtn = document.querySelector(".bubble");

bubbleSortBtn.addEventListener("click", async function () {

  disableSortingBtn();
  disableSizeBtn();
  disableArrayBtn();
  await bubble();
  await enableSortingBtn();
  await enableSizeBtn();
  await enableArrayBtn();
});
async function selection() {
  console.log("hello");
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    let min_index = i;
    //current values of idx to compare 
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      //find miniIndex
      ele[j].style.background = "red";
      await wait(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        if (min_index != i) {
          //default color
          ele[min_index].style.background = "cyan";
        }
        min_index = j;
      } else {
        ele[j].style.background = "cyan";
      }
    }
    await wait(delay);
    swap(ele[min_index], ele[i]); //inside main.js
    ele[min_index].style.background = "cyan";
    ele[i].style.background = "rgb(5, 184, 10)"; //green
  }
}

const selectionSortBtn = document.querySelector(".selection");
selectionSortBtn.addEventListener("click", async function () {



  disableSortingBtn();
  disableSizeBtn();
  disableArrayBtn();
  await selection();
  await enableSortingBtn();
  await enableSizeBtn();
  await enableArrayBtn();
});

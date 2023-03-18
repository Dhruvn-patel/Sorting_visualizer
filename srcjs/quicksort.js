async function partition(ele, low, high) {
    let i = low - 1;
  
    ele[high].style.background = "red";
  
    for (let j = low; j <= high - 1; j++) {
      //color current element
      ele[j].style.background = "yellow";
      await wait(delay);
  
      if (parseInt(ele[j].style.height) < parseInt(ele[high].style.height)) {
        i++;
        swap(ele[i], ele[j]); //inside main.js
        ele[i].style.background = "red";
        if (i != j) {
          ele[j].style.background = "red";
        }
        await wait(delay);
      } else {
        ele[j].style.background = "blue";
      }
    }
    i++;
    await wait(delay);
    swap(ele[i], ele[high]);
    ele[high].style.background = "blue";
    ele[i].style.background = "rgb(5, 184, 10)";
    await wait(delay);
  
    for (let k = 0; k < ele.length; k++) {
      if (ele[k].style.background != "rgb(5, 184, 10)") {
        ele[k].style.background = "cyan";
      }
    }
  
    return i;
  }
  
  async function quick(ele, low, high) {
    if (low < high) {
      let pivotIndex = await partition(ele, low, high);
      quick(ele, low, pivotIndex - 1);
      quick(ele, pivotIndex + 1, high);
    } else {
      if (low >= 0 && low < ele.length && high >= 0 && high < ele.length) {
        ele[high].style.background = "rgb(5, 184, 10)";
        ele[low].style.background = "rgb(5, 184, 10)";
      }
    }
  }
  
  const quickSortBtn = document.querySelector(".quick");
  quickSortBtn.addEventListener("click", async function () {
 
  
    const ele = document.querySelectorAll(".bar");
    disableSortingBtn();
    disableSizeBtn();
    disableArrayBtn();
    await quick(ele, 0, ele.length - 1);
    await enableSortingBtn();
    await enableSizeBtn();
    await enableArrayBtn();
  });

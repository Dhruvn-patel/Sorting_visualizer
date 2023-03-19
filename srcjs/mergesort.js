async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
  
    let left = new Array(n1);
    let right = new Array(n2);
  
    for (let i = 0; i < n1; i++) {
      await wait(delay);
      ele[low + i].style.background = "blue";
      left[i] = ele[low + i].style.height;
    }
    for (let i = 0; i < n2; i++) {
      await wait(delay);
      ele[mid + 1 + i].style.background = "red";
      right[i] = ele[mid + 1 + i].style.height;
    }
    await wait(delay);
  
    let i = 0;
    let j = 0;
    let k = low;
    while (i < n1 && j < n2) {
      await wait(delay);
      if (parseInt(left[i]) <= parseInt(right[j])) {
        if (n1 + n2 === ele.length) {
          ele[k].style.background = "rgb(5, 184, 10)";
        } else {
          ele[k].style.background = "lightgreen";
        }
        ele[k].style.height = left[i];
        i++;
        k++;
      } else {
        if (n1 + n2 === ele.length) {
          ele[k].style.background = "rgb(5, 184, 10)";
        } else {
          ele[k].style.background = "lightgreen";
        }
        ele[k].style.height = right[j];
        j++;
        k++;
      }
    }
  
    while (i < n1) {
      await wait(delay);
  
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "rgb(5, 184, 10)";
      } else {
        ele[k].style.background = "lightgreen";
      }
  
      ele[k].style.height = left[i];
      i++;
      k++;
    }
    while (j < n2) {
      await wait(delay);
  
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "rgb(5, 184, 10)";
      } else {
        ele[k].style.background = "lightgreen";
      }
  
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  
  async function mergeSort(ele, l, r) {
    if (l >= r) {
      return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
  }
  
  const mergeSortBtn = document.querySelector(".merge");
  mergeSortBtn.addEventListener("click", async function () {

    
  
    let ele = document.querySelectorAll(".bar");
    disableSortingBtn();
    disableSizeBtn();
    disableArrayBtn();
    await mergeSort(ele, 0, ele.length - 1);
    await enableSortingBtn();
    await enableSizeBtn();
    await enableArrayBtn();
  });
async function insertion() {
    console.log("Insertion");
    const ele = document.querySelectorAll(".bar");
    for (let i = 1; i < ele.length; i++) {
      let key = ele[i].style.height;
      let j = i - 1;
      ele[i].style.background = "blue";
  
      await wait(delay);
  
      while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
        ele[j].style.background = "blue";
        ele[j + 1].style.height = ele[j].style.height;
        j--;
  
        await wait(delay);
  
        for (let k = i; k >= 0; k--) {
          ele[k].style.background = "rgb(5, 184, 10)"; //green
        }
      }
      ele[j + 1].style.height = key;
      ele[i].style.background = "rgb(5, 184, 10)"; //green
    }
  }
  
  const insertionBtn = document.querySelector(".insertion");
  insertionBtn.addEventListener("click", async function () {
    
  
  
    disableSortingBtn();
    disableSizeBtn();
    disableArrayBtn();
    await insertion();
    await enableSortingBtn();
    await enableSizeBtn();
    await enableArrayBtn();
  });
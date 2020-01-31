const copy = tableClassName => {
  try {
    // get the table dom element
    const table = document.querySelector(`.${tableClassName}`);

    // setup for copying
    const range = document.createRange();
    const sel = window.getSelection();
    sel.removeAllRanges();

    // select the table
    range.selectNodeContents(table);
    sel.addRange(range);

    document.execCommand("Copy");

    // deselecting the table (otherwise the table gets highlighted)
    sel.removeAllRanges();
    return true;
  } catch (error) {
    console.log("error: ", error);
    return false;
  }
};

export default copy;

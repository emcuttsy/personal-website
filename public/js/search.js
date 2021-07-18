let pagesIndex, searchIndex;

async function initSearchIndex() {
  try {
    const response = await fetch("/index.json");
    pagesIndex = await response.json();
    searchIndex = lunr(function () {
      this.field("title");
      this.field("categories");
      this.field("content");
      this.ref("href");
      pagesIndex.forEach((page) => this.add(page));
    });
  } catch (e) {
    console.log(e);
  }
}

initSearchIndex();
export default function Searchbar() {
  return (
    <div className="article-search-area">
      <input type="text" className="article-search-text" />
      <i className="fa fa-search article-search-btn" aria-hidden="true"></i>
    </div>
  );
}

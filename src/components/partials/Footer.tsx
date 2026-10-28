// Footer of the website
export default function Footer() {
  return (
    <div className="w-full h-auto px-40 py-4 bg-slate-900 text-white-text">
      <h3 className="text-xl">Help</h3>
      <hr className="w-14 border-white-text" />
      <ul className="py-4">
        <li>
          <a className="text-grey-1">Forums</a>
        </li>
        <li>
          <a className="text-grey-1">Tutorial Video</a>
        </li>
      </ul>

      <hr className="py-3 border-white-text" />
      <ul>
        <li className="inline mr-10">
          <a className="text-grey-1">Terms of Service</a>
        </li>
        <li className="inline mr-10">
          <a className="text-grey-1">Privacy</a>
        </li>
        <li className="inline">
          <a className="text-grey-1">Content Policy</a>
        </li>
      </ul>
    </div>
  );
}

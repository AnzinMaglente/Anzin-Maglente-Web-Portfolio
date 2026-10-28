import MediaGalleryComponent from "../partials/MediaGalleryComponent";

export default function AdminMediaTab() {
  return (
    <div>
      <div className="flex mx-6 items-center justify-between">
        {/* Section Title */}
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-600">Media</h2>
          <button className="p-3 bg-slate-900 hover:bg-slate-800 text-white  transition rounded-xl shadow cursor-pointer">
            Add New Media
          </button>
        </div>
      </div>
      <hr className="w-19/20 mx-auto my-6 border-grey-1" />

      {/* Photo Gallery */}
      <div className="w-19/20 max-h-120 mx-auto my-6 overflow-y-scroll bg-white shadow-lg rounded-2xl p-8">
        <MediaGalleryComponent />
      </div>
    </div>
  );
}

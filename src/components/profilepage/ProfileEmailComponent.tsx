export default function ProfileEmailComponent() {
  return (
    <div className="flex items-center gap-4 mb-5 bg-white shadow-md rounded-2xl p-8">
      <div className="w-14 h-14 rounded-lg bg-gray-400" />
      {/* Email Icon here */}
      <div className="flex-col mx-5 content-center">
        <p>username@gmail.com</p>
        <p className="text-gray-500">Date added</p>
      </div>
    </div>
  );
}

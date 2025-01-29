export default function Favorite({ handleModal }) {
  return (
    <div
      onClick={handleModal}
      className="p-2 hover:bg-black/40 bg-black/20 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <span>Saved Location List</span>
    </div>
  );
}

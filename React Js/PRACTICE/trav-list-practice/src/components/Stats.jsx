export default function Stats({ items }) {
  if (!items.length)
    return (
      <div className="stats">
        Start adding some items to pack your packing list ✈️🌍
      </div>
    );
  const total = items.length;
  const packedList = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedList / total) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `👜 you have ${total} items on your list, and you already packed
            ${packedList} (${percentage}%)`
          : `You got everything. Ready to go ✈️`}
      </em>
    </footer>
  );
}

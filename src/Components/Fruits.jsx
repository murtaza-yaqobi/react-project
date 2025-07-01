function Fruits({ fruits }) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-500 flex-wrap gap-10">
      {fruits.map((fruit) => (
        <h1 key={fruit.name} className="border p-3 rounded-xl bg-gray-900">
          {fruit.emoji} - {fruit.name} - {fruit.price}
        </h1>
      ))}
    </div>
  );
}
export default Fruits;

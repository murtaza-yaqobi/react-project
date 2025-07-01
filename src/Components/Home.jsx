import Fruit from "./Fruits.jsx";
function Home() {
  const fruits = [
    {
      emoji: "🥝",
      name: "Kiwi",
      price: "120 AfG",
    },
    {
      emoji: "🍋",
      name: "Lemon",
      price: "90 AfG",
    },
    {
      emoji: "🍌",
      name: "Banana",
      price: "150 AfG",
    },
    {
      emoji: "🍎",
      name: "Apple",
      price: "100 AfG",
    },
    {
      emoji: "🍒",
      name: "Cherries",
      price: "120 AfG",
    },
    {
      emoji: "🥭",
      name: "Mango",
      price: "150 AfG",
    },
  ];
  return (
    <>
      <Fruit fruits={fruits} />
    </>
  );
}
export default Home;

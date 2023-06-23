export default function Clicker({ message, buttonText }) {
  const HandleClick = () => {
    alert(message);
  };
  return (
    <div>
      <button onClick={HandleClick}>{buttonText}</button>
    </div>
  );
}

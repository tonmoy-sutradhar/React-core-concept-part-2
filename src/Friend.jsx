export default function ({ friend }) {
  const { name, email } = friend;
  return (
    <div
      style={{
        border: "2px solid orange",
        margin: "20px",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
    </div>
  );
}

// console.log(friend);

export function Age(prop) {
  return (
    <div>
      {prop.age >= 18 ? (
        <p>Your age is: {prop.age}</p>
      ) : (
        <p>You are very young!</p>
      )}
    </div>
  );
}

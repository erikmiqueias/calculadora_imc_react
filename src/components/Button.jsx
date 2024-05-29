import "./Button.css";

const Button = ({ id, text, action }) => {
  const hadleAction = (e) => {
    action(e);
  };
  return (
    <button id={id} onClick={hadleAction}>
      {text}
    </button>
  );
};

export default Button;

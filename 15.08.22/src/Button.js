function Button(props) {
    function clickMe() {
      props.changeNumber(100500);
    }

   /*  (local function) clickMe(): void */
    return <button onClick={clickMe}>Нажми {props.name}</button>
  }

  export default Button;
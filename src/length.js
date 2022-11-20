function length() {
  let userInput = prompt("please input character");
  let chkLength = userInput.length;
  // let remaningChar = chkLength - 140;

  alert(
    `you have written ${chkLength} charater and you have left ${
      chkLength - 140
    } char`
  );

  // console.log();
}

export default length;

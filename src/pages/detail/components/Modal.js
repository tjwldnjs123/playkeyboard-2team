import React from 'react';
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const krLower = [
  ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'],
  ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
  ['쌍자음', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '지우기'],
  ['!@#', 'EN', ':-)', '띄어쓰기', '.', '엔터'],
];
const krUpper = [
  ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ'],
  ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
  ['쌍자음', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '지우기'],
  ['!@#', 'EN', ':-)', '띄어쓰기', '.', '엔터'],
];
const enUpper = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'back'],
  ['!@#', '한', ':-)', 'space', '.', 'enter'],
];
const enLower = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'back'],
  ['!@#', '한', ':-)', 'space', '.', 'enter'],
];
const Modal = (props) => {
  const [shift, setShift] = useState(false);
  const [en, setEn] = useState(false);
  return (
    <>
      <div>
        {num.map((el) => (
          <button key={el}>{el}</button>
        ))}
        {en
          ? shift
            ? krLower.map((el) => <button key={el}>{el}</button>)
            : krUpper.map((el) => <button key={el}>{el}</button>)
          : shift
          ? enUpper.map((el) => <button key={el}>{el}</button>)
          : enLower.map((el) => <button key={el}>{el}</button>)}
      </div>
    </>
  );
};

export default Modal;

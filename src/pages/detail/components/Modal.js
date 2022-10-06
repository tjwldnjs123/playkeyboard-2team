import { useState, useRef } from 'react';
import * as Hangul from 'hangul-js';
import styled from 'styled-components';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const krLower = [
  ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'],
  ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
  ['↑', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '←'],
  ['!@#', 'EN', ':-)', '띄어쓰기', '.', '↵'],
];
const krUpper = [
  ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ'],
  ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
  ['↑', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '←'],
  ['!@#', 'EN', ':-)', '띄어쓰기', '.', '↵'],
];
const enUpper = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['↑', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
  ['!@#', '한', ':-)', 'space', '.', '↵'],
];
const enLower = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['↑', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '←'],
  ['!@#', '한', ':-)', 'space', '.', '↵'],
];
const Modal = ({ setModal }) => {
  const [shift, setShift] = useState(false);
  const [en, setEn] = useState(false);
  const [charArr, setCharArr] = useState([]);
  const keyboardRef = useRef();
  const inputRef = useRef();

  const handleWriteChar = (e) => {
    if (
      e.target.textContent === '↑' ||
      e.target.textContent === '한' ||
      e.target.textContent === 'EN' ||
      e.target.textContent === '!@#' ||
      e.target.textContent === ':-)' ||
      e.target.textContent === '↵'
    ) {
      inputRef.current.value = Hangul.assemble([...charArr]);
    } else if (e.target.textContent === '←') {
      inputRef.current.value = Hangul.assemble(
        [...charArr].slice(0, [...charArr].length - 1)
      );
      setCharArr((prev) => [...prev].slice(0, [...charArr].length - 1));
    } else if (
      e.target.textContent === '띄어쓰기' ||
      e.target.textContent === 'space'
    ) {
      inputRef.current.value = Hangul.assemble([...charArr, ' ']);
      setCharArr((prev) => [...prev, ' ']);
    } else {
      inputRef.current.value = Hangul.assemble([
        ...charArr,
        e.target.textContent,
      ]);
      setCharArr((prev) => [...prev, e.target.textContent]);
    }
  };
  const handleControlKeyboard = (e) => {
    if (e.target.textContent === '↑') {
      setShift((prev) => !prev);
    } else if (e.target.textContent === '한' || e.target.textContent === 'EN') {
      setEn((prev) => !prev);
      setShift(false);
    }
    handleWriteChar(e);
  };

  const resetModal = () => {
    setModal(false);
    setCharArr([]);
  };

  const handleShowModal = (e) => {
    keyboardRef.current.contains(e.target) ? setModal(true) : resetModal();
  };

  return (
    <StyledDiv onClick={handleShowModal}>
      <Main ref={keyboardRef}>
        <StyledInput
          type='text'
          placeholder='마음껏 테스트 해보세요'
          ref={inputRef}
          readOnly
        />
        <KeyboardContainer>
          <Container>
            {num.map((el) => (
              <button key={el} onClick={handleControlKeyboard}>
                {el}
              </button>
            ))}
          </Container>
          {en
            ? shift
              ? enUpper.map((el) => (
                  <Container key={el}>
                    {el.map((el) => (
                      <button key={el} onClick={handleControlKeyboard}>
                        {el}
                      </button>
                    ))}
                  </Container>
                ))
              : enLower.map((el) => (
                  <Container key={el}>
                    {el.map((el) => (
                      <button key={el} onClick={handleControlKeyboard}>
                        {el}
                      </button>
                    ))}
                  </Container>
                ))
            : shift
            ? krUpper.map((el) => (
                <Container key={el}>
                  {el.map((el) => (
                    <button key={el} onClick={handleControlKeyboard}>
                      {el}
                    </button>
                  ))}
                </Container>
              ))
            : krLower.map((el) => (
                <Container key={el}>
                  {el.map((el) => (
                    <button key={el} onClick={handleControlKeyboard}>
                      {el}
                    </button>
                  ))}
                </Container>
              ))}
        </KeyboardContainer>
      </Main>
    </StyledDiv>
  );
};

export default Modal;

const StyledDiv = styled.div`
  max-width: ${({ theme }) => theme.width.s20Ultra};
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #00000066;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 3rem;
  margin: 8px 0;
  padding: 5px 12px;
  background-color: #00000014;
  border: none;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000014;

  button {
    height: 3rem;
    margin: 2px;
    padding: 5px;
    border: none;
    border-radius: 3px;
    background-color: #fff;
    &:active {
      color: #fff;
      background-color: #00000024;
    }
  }
`;

const KeyboardContainer = styled.div`
  width: 100%;
  background-color: #fff;

  ${Container} {
    &:first-child {
      button {
        width: 2.3rem;
      }
    }

    &:nth-child(2) {
      button {
        width: 2.3rem;
      }
    }

    &:nth-child(3) {
      button {
        width: 2.3rem;
      }
    }

    &:nth-child(4) {
      button {
        width: 2.3rem;

        &:first-child,
        &:last-child {
          width: 3rem;
        }
      }
    }

    &:last-child {
      button {
        &:first-child {
          width: 3rem;
        }
        &:nth-child(2) {
          width: 2.3rem;
        }
        &:nth-child(3) {
          width: 2.3rem;
        }
        &:nth-child(4) {
          width: 9rem;
        }
        &:nth-child(5) {
          width: 2.3rem;
        }
        &:last-child {
          width: 3rem;
        }
      }
    }
  }
`;

import styled from "styled-components";
export const AddAuthorSection = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
export const AddAuthorImgDiv = styled.div`
  display: flex;
  flex: 50%;
  width: 50%;
  background: var(--add-left-bg);
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AddAuthorImgLabel = styled.label`
  font-family: "Poppins";
  cursor: pointer;
  color: #aeaeae;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  background: var(--add-left-photo-bg);
  border: 3px dashed rgba(0, 0, 0, 0.3);
  border-radius: 17px;
  height: 428px;
  width: 315px;
  font-size: 14px;
  justify-content: center;
`;
export const AddAuthorImgPlus = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  align-self: center;
`;
export const AddAuthorImgInput = styled.input`
  display: none;
`;
export const AddAuthorInfo = styled.div`
  flex: 50%;
  width: 50%;
  height: 100vh;
  padding: 48px 123px;
`;
export const AddAuthorInfoTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  font-family: "Poppins";
  color: var(--main-text-color);

`;
export const AddAuthorForm = styled.form`
  width: 100%;
  padding-top: 12px;
`;
export const AddAuthorInputDiv = styled.div`
  position: relative;
  height: 3em;
  margin-bottom: 1.6em;
  & input:focus + label,
  textarea:focus + label {
    top: -0.5em;
    left: 0.8em;
    color: rgb(28, 164, 248);
    font-size: 0.8em;
    font-weight: 600;
    z-index: 5;
  }
  & input:not(:placeholder-shown):not(:focus) + label {
    top: -0.5em;
    left: 0.8em;
    font-size: 0.8em;
    font-weight: 600;
    z-index: 5;
  }
`;
export const AddAuthorInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1em;
  border:var(--add-right-input-border);
  border-radius: 0.5em;
  outline: none;
  padding: 1em;
  z-index: 1;
  background: none;
  caret-color: var(--main-text-color);
color: var(--main-text-color);
  &:focus {
    border: 0.1em solid rgb(28, 164, 248);
  }
`;
export const AddAuthorLabel = styled.label`
  position: absolute;
  left: 1em;
  top: 0.7em;
  padding: 0 0.25em;
  background-color: var(--main-bg-color); 
  color: var(--add-right-input-color);
  font-size: 1em;
  transition: 0.4s;
`;
export const AddAuthorSelect = styled.select`
  position: relative;
  padding-left: 1em;
  appearance: none;
  width: 100%;
  height: 100%;
  font-size: 1em;
  border:var(--add-right-input-border);
  border-radius: 0.5em;
  outline: none;
  z-index: 1;
  background: none;
  color: var(--add-right-input-color);
  &:focus {
    border: 0.1em solid rgb(28, 164, 248);
  }
`;
export const AddAuthorSelectOption = styled.option`
  color: #80868b;
  font-size: 1em;
  transition: 0.4s;
`;
export const AddAuthorOptionSelectedArrowDown = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 15px;
  top: 10px;
  filter: invert(47%) sepia(7%) saturate(13%) hue-rotate(326deg) brightness(97%)
    contrast(86%);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &.active {
    transform: rotateX(180deg);
  }
`;
export const AddAuthorTextarea = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1em;
  border:var(--add-right-input-border);
  border-radius: 0.5em;
  outline: none;
  padding: 2.5em;
  z-index: 1;
  background: none;
  resize: none;
  overflow: hidden;
  color: var(--add-right-input-color);
  caret-color: var(--main-text-color);
color: var(--main-text-color);
  &:focus {
    border: 0.1em solid rgb(28, 164, 248);
  }
`;
export const AddAuthorSubmitBtn = styled.button`
  margin-top: 60px;
  border: none;
  background: var(--profile-button-bg);
  color: var(--profile-button-color);
  width: 100%;
  padding: 10px;
  border-radius: 99px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 18px;
`;

export const AddAuthorImgAdded = styled.img`
  height: 428px;
  width: 315px;
  border-radius: 20px;
  position: absolute;
  visibility: hidden;
  object-fit: cover;
  &.active{
    visibility: visible;
  }
`
import { styled } from "styled-components";
const ValidationMessage = styled.span`
  color: #383131;
`;
export const InputField = ({
  name,
  value,
  onChange,
  errorMessage,
  placeholder,
}) => {
  return (
    <div>
      <input
        type="text"
        className="form-control name px-4"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
    </div>
  );
};

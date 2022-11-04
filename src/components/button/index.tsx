import styled from "styled-components";

interface DefaultProps {
  disabled?: boolean;
  label: string;
  color: string;
  background: string;
  borderColor: string;
  icon?: any;
  handleClick?: any;
  filled?: boolean;
  width?: any;
}

export default function DefaultButton(props: DefaultProps): JSX.Element {
  return (
    <Button
      disabled={props.disabled}
      width={props.width}
      onClick={props.handleClick}
      color={props.color}
      border={props.borderColor}
      background={props.background}
    >
      {props.label}
    </Button>
  );
}

const Button = styled.button<{
  width: string;
  color: string;
  background: string;
  border: string;
}>`
  outline: inherit;
  height: 30px;
  width: ${({ width }) => width};
  border: 1px solid ${({ border }) => border};
  border-radius: 2px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  transition: 0.5s;

  :hover {
    background-color: ${({ background }) => background};
    opacity: 0.7;
  }
`;

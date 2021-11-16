import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useAppDispatch } from "app/hooks";
import { click } from "features/click/clickSlice";

export default function ClickForm() {
  const [teamName, setTeamName] = useState<string>("");
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      dispatch(click(teamName));
      navigate(`/${teamName}`);
    }}>
      <InputButtonGroup>
        <Input type="text" placeholder="Team Name" value={teamName} onChange={(e: any) => setTeamName(e.target.value)} />
        <Button type="submit" value="Click" disabled={teamName.length <= 0} />
      </InputButtonGroup>
    </form>
  )
}

const InputButtonGroup = styled.div`
  height: 3rem;
  padding: 0.5rem 0.5rem 0.75em 0.5rem;
  border: 0.3rem solid ${(props: any) => props.theme.colors.primary};
  border-radius: 3.7rem;
  box-shadow: 0px 0px 10px ${(props: any) => props.theme.colors.primary};
  font-size: 1.5rem;
  display: inline-flex;
`
const Input = styled.input`
  border: 1px solid ${(props: any) => props.theme.colors.white};
  padding: 0.2em 0.2rem 0.2rem 1.8rem;
  height: 100%;
  border-radius: 4rem 0rem 0rem 4rem;
  width: 15rem;
  :focus {
    border: 1px solid ${(props: any) => props.theme.colors.lightGrey};
    outline: none;
    background-color: ${(props: any) => props.theme.colors.lightGrey};
  };
`
const Button = styled.input`
  border: 1px solid ${(props: any) => props.theme.colors.primary};
  margin: 0;
  padding: 0.2em 0.2rem 0.2rem 0.8rem;
  box-sizing: content-box;
  height: 100%;
  width: 5rem;
  text-align: left;
  border-radius: 0rem 4rem 4rem 0rem;
  background-color: ${(props: any) => props.theme.colors.primary};
  color: ${(props: any) => props.theme.colors.white};
  &:hover {
    border: 1px solid ${(props: any) => props.theme.colors.primaryLightDark};
    outline: none;
    background-color: ${(props: any) => props.theme.colors.primaryLightDark};
  };
  &:active {
    border: 1px solid ${(props: any) => props.theme.colors.primaryDark};
    outline: none;
    background-color: ${(props: any) => props.theme.colors.primaryDark};
  };
  &:disabled {
    border: 1px solid ${(props: any) => props.theme.colors.primaryDark};
    outline: none;
    background-color: ${(props: any) => props.theme.colors.primaryDark};
  };
`
import styled from "@emotion/styled";
import { useAppDispatch } from "app/hooks";
import { click } from "features/click/clickSlice";

export default function ClickButton({ teamName }: { teamName: string }) {
  const dispatch = useAppDispatch()
  
  return (
    <StyledButton type="button" onClick={() => dispatch(click(teamName))}>Click</StyledButton>
  )
}

const StyledButton = styled.button`
  border: 1px solid ${(props: any) => props.theme.colors.primary};
  padding: 0.2em 0.2rem 0.2rem 0.2rem;
  width: 100%;
  border-radius: 17rem 17rem 17rem 17rem;
  background-color: ${(props: any) => props.theme.colors.primary};
  margin: 0;
  color: ${(props: any) => props.theme.colors.white};
  font-size: 5rem;
  box-shadow: 0px 0px 10px ${(props: any) => props.theme.colors.primary};
  font-family: 'Bungee Outline';
  font-weight: 600;
  line-height: 7rem;
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
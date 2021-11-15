import { useAppDispatch } from 'app/hooks'
import { click } from 'features/click/clickSlice'


export default function ClickButton ({ teamName }: { teamName: string} ) {
    const dispatch = useAppDispatch()
    return (
        <button type="button" onClick={() => dispatch(click(teamName))}>Click</button>
    )
}
import { useParams } from "react-router-dom";
import ClickButton from "features/click/ClickButton"

export default function ClickPage () {
    let params = useParams();
    return (
        <>
            {params.teamName && <ClickButton teamName = {params.teamName}/>}
        </>
    );
}
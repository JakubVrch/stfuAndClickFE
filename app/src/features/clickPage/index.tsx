import { useParams } from "react-router-dom";
import ClickButton from "features/click/ClickButton"
import CopyUrl from "features/copyUrl";

export default function ClickPage () {
    let params = useParams();
    return (
        <>
            <CopyUrl/>
            { params.teamName && <ClickButton teamName = {params.teamName}/> }
        </>
    );
}
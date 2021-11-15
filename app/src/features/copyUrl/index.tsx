export default function CopyUrl () {
    return (
        <input 
            type="text"
            value={window.location.href}
            onFocus={(event) => event.target.select()}
            readOnly
        />
    );
}
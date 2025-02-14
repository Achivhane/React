export default function TabButton({lebal, onSelect}){
    return(
        <li>
            <button onClick={onSelect}>{lebal}</button>
        </li>
    )
}
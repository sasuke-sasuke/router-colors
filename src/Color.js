import { useParams } from "react-router-dom";

export default function Color() {
    const color = useParams()
    return (
        <div>
            <h1>{color}</h1>
        </div>
    )
}
import {useState} from 'react';
import {Link} from 'react-router-dom';
import ColorForm from './ColorForm';

export default function ColorFactory() {
    const [colors, setColors] = useState(() => ['red', 'green', 'blue'])
    return (
        <>
            <div>
                <h1>Welcome to the Color Factory</h1>
                <Link to='/colors/new'>
                    Add a color
                </Link>
            </div>
            <div>
                <h3>Please select a color</h3>
                <nav>
                    <ul>
                        {colors.map(color => <li key={color}><Link to={`/colors/${color}`}>{color}</Link></li>)}
                    </ul>
                </nav>
            </div>
        </>
    )
}
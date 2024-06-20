// Page -1 
import { useNavigate } from "react-router-dom";

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1
                style={{ color: '#ff4000', }}>
                Welcome to Weather App
            </h1>
            <button
                style={{
                    backgroundColor: '#ff4000',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => navigate('/weather')}
            >
                Find out the weather
            </button>
        </div>
    );
}

export default WelcomePage;

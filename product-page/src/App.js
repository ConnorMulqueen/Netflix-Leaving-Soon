import logo from './img/icon-high-res-react-color.png';
import './App.css';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix 'Leaving Soon' Extension</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Browse titles soon to be removed from Netflix
        </p>

        <Button variant="contained">
            Chrome Extension
        </Button>


        <div className="button-container">
          <div className="buttons">
            <Button variant="contained" startIcon={<GitHubIcon />} href="https://github.com/ConnorMulqueen/Netflix-Leaving-Soon/tree/main">GitHub</Button>
          </div>
          <div className="buttons">
            <Button>
              <a href="https://www.buymeacoffee.com/27JYSTw" target="_blank">
                <img style={{ height: "36px"}} src="https://img.buymeacoffee.com/button-api/?text=Buy me a beer&emoji=🍺&slug=27JYSTw&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" />
              </a>
            </Button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;

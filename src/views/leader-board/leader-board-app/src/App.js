
import './App.css';
import header from './assets/img/leaderboard-header.svg';

function App() {
  return (
    <div className="App">
      <div className="background">
          <div id="bg"></div>
          <div className="topContainer1">
            <div className="circleA"></div>
            <div className="circleB"></div>          
          </div>
          <div className="topContainer2">
            <div className="circleC"></div>
          </div>
      </div>
      <div id="header" className="container">
        <div id="logo"></div>
        <img src={header} className="headerImg" alt="97 SECOND Trivia Challenge Leaderboard" />
      </div>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>NAME</th>
            <th>FROM</th>
            <th>SCORE</th>
            <th>TIME COMPLETED</th>
          </tr>
        </thead>
      </table>
      <div id="scrollContainer">
          <table cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td>1. Michelangelo D.</td>
                <td>CA, USA</td>
                <td>20</td>
                <td>78 seconds</td>
              </tr>
              <tr>
                <td>2. Jane L.</td>
                <td>NV, USA</td>
                <td>20</td>
                <td>80 seconds</td>
              </tr>
              <tr>
                <td>3. Julia T.</td>
                <td>MO, USA</td>
                <td>20</td>
                <td>82 seconds</td>
              </tr>
              <tr>
                <td>4. Tim W.</td>
                <td>UK</td>
                <td>19</td>
                <td>90 seconds</td>
              </tr>  
              <tr>
              <td>5. JOHN P.</td>
                <td>CA, USA</td>
                <td>18</td>
                <td>96 seconds</td>
              </tr>
              <tr>
                <td>6. Michelangelo B.</td>
                <td>NY, USA</td>
                <td>17</td>
                <td>90 seconds</td>
              </tr>
              <tr>
                <td>7. HANS W.</td>
                <td>FL, USA</td>
                <td>16</td>
                <td>96 seconds</td>
              </tr>
              <tr>
                <td>8. Tim W.</td>
                <td>NY, USA</td>
                <td>19</td>
                <td>80 seconds</td>
              </tr>  
              <tr>
                <td>9. JOHN P.</td>
                <td>UK</td>
                <td>1</td>
                <td>96 seconds</td>
              </tr>
              <tr>
                <td>10. Julia T.</td>
                <td>NY, USA</td>
                <td>19</td>
                <td>80 seconds</td>
              </tr>                  
            </tbody>               
          </table>
        </div>
    </div>
  );
}

export default App;

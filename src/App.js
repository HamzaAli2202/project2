import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="main">
    <h1>School Days</h1>
    <div className="sub">
      <h5>School Friends</h5>
      <ol>
        <li>Shahid</li>
        <li>Saddam</li>
        <li>Yakhud</li>
        <li>Tofik</li>
        <li>Salim</li>
      </ol>
    </div>
   <div className="sub">
    <h5>School Routine</h5>
    <ol type="a">
      <li>I used to woke up early in the morning</li>
      <li>I used to Brush my teeth</li>
      <li>I used to take Bath</li>
      <li>I used to take breakfast</li>
      <li>I used to catch my school bus</li>
    </ol>
   </div>
   <div className="sub">
    <h5>Sports</h5>
    <ol>
      <li>Cricket</li>
      <li>Football</li>
      <li>Karate</li>
      <li>Swimming</li>
    </ol>
   </div>
   <div className="sub">
    <h5>Subject</h5>
    <ol>
      <li>English</li>
      <li>Marathi</li>
      <li>Hindi</li>
      <li>Urdu</li>
      <li>Science</li>
      <li>Maths</li>
    </ol>
   </div>
   </div>
  );
}

export default App;

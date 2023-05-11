// import logo from './logo.svg';
import CustomNavbar from './components/CustomNavbar';
import MiddlePart from './components/MiddlePart';
import Card from './components/Card';
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <MiddlePart />

      <h1 >Featured</h1>
      <div className='FeaturedCard'>
      <Card title='' body='The Leetcode Beginner Guide' chapters='4' items='17' />
      <Card title='Leetcode Interview Crash Course' body='Data Structures And Algorithms' chapters='13' items='144' />
      <Card title='Easy Collection' body='Top Interview Questions' chapters='9' items='48' />
      <Card title='Detailed Explanation of' body='Dynamic Programming' chapters='6' items='55' /> 
      </div>

      <h1>Interview</h1>
      <div className='InterviewCard'>
      <Card title='Leetcode Interview Crash Course' body='Cheatsheets' chapters='1' items='3' />
      <Card title='Leetcode Interview Crash Course' body='Data Structures And Algorithms' chapters='13' items='144' />
      <Card title='Leetcode Interview Crash Course' body='System Design for Interviews and Beyond' chapters='16' items='80' />
      <Card title='Leetcode Interview Crash Course' body='Google Interview' chapters='9' items='85' /> 
      </div>

      <h1>Learn</h1>
      <div className='LearnCard'>
      <Card title='' body='The Leetcode Beginner Guide' chapters='4' items='17' />
      <Card title='Detailed Explanation of' body='Dynamic Programming' chapters='6' items='55' /> 
      <Card title='Introduction to Data Structure' body='Arrays 101' chapters='6' items='31' />
      <Card title='Detailed Explanation of' body='SQL Language' chapters='4' items='36' />
      </div>

      <Footer /> 

    </div>
  );
}

export default App;

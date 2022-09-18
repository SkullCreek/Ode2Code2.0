import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Reports = () => {

  const [dailyAmount, setDailyAmount] = useState('0');
  const [dailyCount, setDailyCount] = useState('0');
  const [monthlyAmount, setMonthlyAmount] = useState('0');
  const [monthlyCount, setMonthlyCount] = useState('0');
  const [yearlyCount, setYearlyCount] = useState('0');
  const [yearlyAmount, setYearlyAmount] = useState('0');

  useEffect(() => {
    gettodays();
    getdailycount();
    getmonthlyamount();
    getmonthlycount();
    getyearlyamount();
    getyearlycount();
  }, [])

  const gettodays = () => {
    axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/daily.php')
    .then(function (response) {
      setDailyAmount(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  const getdailycount = () => {
    axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/dailycount.php')
    .then(function (response) {
      setDailyCount(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  const getmonthlyamount = () => {
    axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/monthly.php')
    .then(function (response) {
      setMonthlyAmount(response.data);
      
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  const getmonthlycount = () => {
    axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/monthlycount.php')
    .then(function (response) {
      setMonthlyCount(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  const getyearlyamount = () => {
    axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/yearly.php')
    .then(function (response) {
      setYearlyAmount(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  const getyearlycount = () => {
    axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/yearlycount.php')
    .then(function (response) {
      setYearlyCount(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  
  return (
    <div className="projects-section">
        <div className="projects-section-header">
            <p>Reports</p>
        </div>
        <div className="projects-section-line" id='report-container'>
            <aside>
              <h1>Daily</h1>
              <p>{dailyAmount} Rs.</p>
              <p>{dailyCount} unit</p>
            </aside>
            <aside>
              <h1>Monthly</h1>
              <p>{monthlyAmount} Rs.</p>
              <p>{monthlyCount} units</p>
            </aside>
            <aside>
              <h1>Yearly</h1>
              <p>{yearlyAmount} Rs</p>
              <p>{yearlyCount} units</p>
            </aside>
        </div>
    </div>
  )
}

export default Reports
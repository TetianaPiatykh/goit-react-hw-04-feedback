import PropTypes from 'prop-types';
import { StatisticsList } from './App.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  console.log(positivePercentage());
    return (<StatisticsList>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total()}</li>
            <li>Positive feedback: {positivePercentage()} %</li>
        </StatisticsList>)
};
    
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};


    // <ul>
    //     <li>Good: {this.state.good}</li>
    //     <li>Neutral: {this.state.neutral}</li>
    //     <li>Bad: {this.state.bad}</li>
    //     <li>Positive feedback: {this.countPositiveFeedbackPercentage()}% </li>
    // </ul>

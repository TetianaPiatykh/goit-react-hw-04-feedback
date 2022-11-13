import { useState } from "react";
import { FeedbackOptions } from './FeedbackOptions';
import { SectionTitle } from "./SectionTitle";
import { Statistics } from "./Statistics";
// import { StatisticTitleSection, BtnList, Btn, StatisticsSection } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const FeedbackOptionsNames = ['good', 'neutral', 'bad'];

  const handleFeedbackClick = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

   const countPositiveFeedbackPercentage = () => {
return Math.round((good * 100) / countTotalFeedback());
  };



    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={FeedbackOptionsNames}
            onLeaveFeedback={handleFeedbackClick} />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
          />) : ( <p>There is no feedback</p> )}
        </SectionTitle>
      </div>
    )
  
};

    // const totalFeedback = this.countTotalFeedback();
    // const goodValue = this.state.good;
    // let positivFeedback = 0;

    // if (totalFeedback > 0) {
    //   positivFeedback = Math.round((goodValue / totalFeedback) *  100 );
    // }
    // console.log(positivFeedback);
    // return positivFeedback;
import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  )
}


const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad
  const averageScore = (good - bad) / totalFeedback || 0
  const positivePercentage = (good / totalFeedback) * 100 || 0

  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total feedback" value={totalFeedback} />
      <StatisticLine text="Average score" value={averageScore.toFixed(2)} />
      <StatisticLine text="Positive feedback" value={`${positivePercentage.toFixed(2)}%`} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const totalFeedback = good + neutral + bad

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      {totalFeedback > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App
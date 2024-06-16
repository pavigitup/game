import {
  MainContainer,
  Header,
  ChoiceCon,
  Option,
  ScoreCon,
  ScoreTitle,
  ScoreValue,
  RulesCon,
  Rules,
} from '../StyledComponents'
import Playing from '../Playing'
import GameOver from '../GameOver'

const Container = props => {
  const {choices} = props
  return (
    <MainContainer>
      <Header>
        <ChoiceCon>
          <Option>Rock</Option>
          <Option>Paper</Option>
          <Option>Scissors</Option>
        </ChoiceCon>
        <ScoreCon>
          <ScoreTitle>Score</ScoreTitle>
          <ScoreValue>0</ScoreValue>
        </ScoreCon>
      </Header>
      <Playing choices={choices} />
      <GameOver />
      <RulesCon>
        <Rules>RULES</Rules>
      </RulesCon>
    </MainContainer>
  )
}

export default Container

import {CenterContainer} from '../StyledComponents'
import Choice from '../Choice'

const Playing = props => {
  const {choices} = props
  return (
    <CenterContainer>
      {choices.map(choice => (
        <Choice choice={choice} key={choice.key} />
      ))}
    </CenterContainer>
  )
}

export default Playing

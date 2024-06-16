import {ImgCon, Img} from '../StyledComponents'

const Choice = props => {
  const {choice} = props
  const {imageUrl, id} = choice
  return (
    <ImgCon>
      <Img src={imageUrl} alt={id} />
    </ImgCon>
  )
}

export default Choice

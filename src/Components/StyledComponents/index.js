import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #223a5f;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  border: 1px solid #ffffff;
  margin: 5%;
  border-radius: 20px;
  padding: 2%;
`

export const ChoiceCon = styled.div`
  width: 40%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Option = styled.h1`
  font-size: 2vw;
  line-height: 14px;
`

export const ScoreCon = styled.div`
  width: 20%;
  background-color: #ffffff;
  text-align: center;
  border-radius: 20px;
`

export const ScoreTitle = styled.h1`
  font-size: 2vw;
  color: #223a5f;
  line-height: 14px;
`

export const ScoreValue = styled.p`
  font-size: 4vw;
  color: #223a5f;
  line-height: 14px;
`

export const CenterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 10%;
`
export const ImgCon = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
export const Img = styled.img`
  width: 100%;
`

export const RulesCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`
export const Rules = styled.button`
  color: #223a5f;
  margin: 5%;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 25px;
`

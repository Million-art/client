import styled from 'styled-components'
const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    color:rgb(55, 93, 219);
    font-size: 2.5rem;
    text-align: center;
    margin:30px 0px;
}

`
const Wraper= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: 500px;
`
const Left=styled.div`
width: 48%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Right=styled.div`
width: 50%;
height: 100%;
img{
    width: 100%;
    height: 90%;
    overflow-y: hidden;
    border-radius: 10px;
}
`
export default function Hero() {
  return (
     <Container >

        <h1>How we Care?</h1>
        <Wraper>  
            <Left>
                 <h2>We work to keep your health .</h2>
                 <p>We work to keep your health.</p>
            </Left>
            <Right>
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_26/2908346/190624-culturally-competent-care-3-khn-ew-349p.jpg"  alt='img'/>
            </Right>
         
        </Wraper>
    </Container>
   )
}

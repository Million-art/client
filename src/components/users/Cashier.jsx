import styled from "styled-components";
const Container =styled.div`

`
 const  Cashier=()=> {
  return (
    <div> 
        <Container>
            <form>
                <label> Medicine Name</label><br></br>
                <input type="text"   />
              
                <button type="submit">Submit</button>
            </form>

        </Container>
    </div>
  )
}
export default  Cashier;
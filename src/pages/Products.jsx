import styled from "styled-components";
import ProductsList from '../components/ProductsList'
import Modal from 'react-modal';
import '../components/style/products.scss'
import { useState } from "react";
const Container = styled.div`
    margin-top:100px;
    display: flex;
    flex-direction: column;
    h1{
        color:rgb(55, 93, 219);
        text-decoration:underline;
        text-align:center;
    }
    .wrapper{
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       justify-content:center;
       overflow: hidden;
       width: 100%;
           .item-container{
            display: flex;
            flex-direction:column;
            justify-content:center;
            margin:0px 10px;
            width:25%;
            height:400px;
            border-radius:15px;
            
            img{
                height:300px;
                border-radius:15px;

              
            }
            .info{
                p{
                    display:none;
                }
                button{
                    width:95%;
                    height:40px;
                    border:none;
                    border-radius:15px;
                    padding:5px;
                    margin:5px;
                    background-color:rgb(30, 100, 139);
                    color:white;
                    font-size:22px;
                    font-weight:bold;
                    cursor:pointer;
                    &:hover{
                        background-color:rgb(55, 93, 219);

                    }
                }
                
            }
        }
    }

`
 
 
const style={
    
        content: {
            position: 'absolute',
             marginTop:'10px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        
        }

export default function Products(){
 
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalData ,setModalData]=useState(null)

    const [cashier, setCashier] = useState(true)
    const createBill=()=>{

    }

  

   

  function closeModal() {
    setIsOpen(false);
  }
    return(
        <Container>
            <h1>Avilable Products</h1>
           <div   className='wrapper'>
            {ProductsList.map((item,id)=>(
              <div  className='item-container'key={id} >
                <img src={item.img} alt='product' />
                <div className='info'>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <button onClick={()=>{
                        setModalData(item)
                        setIsOpen(true)
                        }
                    }>View
                    
                    </button>
                </div>
               
              </div>

          ))}
                    <Modal className={'modal'}
                    isOpen={modalIsOpen}
                    onRe    questClose={closeModal}
                    style={style}
                    >
 
                        <h1 style={{textAlign:'center'}}>Product Details</h1>
                             {
                                modalIsOpen && (
                                    
                                    <div  className="modal-content">
                                        <img src={modalData.img} alt='product' />
                                        <div className='info'>
                                            <h2>{modalData.title}</h2>
                                            <p>{modalData.text}</p>
                                            <div className="btn">
                                                <button className="btn-close" onClick={closeModal} >Close</button>
                                                {cashier?<button className="btn-bill" onClick={createBill}>Create Bill</button>:''}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                                 {        Modal.setAppElement('body')}
                    </Modal>
         </div>
      
       
         </Container>
    )
}

 
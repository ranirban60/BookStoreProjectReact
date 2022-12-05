import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Footer from '../Component/Footer/Footer';
//import CardComponent from '../Components/CardDetails/CardComponent';
// import './Book.css'
// import AppBarComponent from '../Component/AppBarComponent/AppBarComponent';
// import Cart from './Cart';
import { Card } from '@mui/material';

export default function Book(props) {
  console.warn("props", props);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginpage')
    } else {
      loadAllBook();
    }
  }, []);

  const loadAllBook = async () => {
    await axios.get(`http://localhost:8080/Book/getallbook`)
      .then((response) => {
        console.log(response)
        setData(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleBookSearch = async (searchBook) => {
    if (searchBook) {
      let result = await axios.get(`http://localhost:8080/Book/getByBookName/${searchBook}`)
      result = await result.data;
      loadAllBook.setData(result);
    } else {
      loadAllBook();

    }
  }

  const handleAddToCart = (productId) => {
    console.log(productId);
    localStorage.setItem("bookId", productId)
    navigate('/cart')
  }


  return (
    <div>
      {/* <AppBarComponent bookInfo={setData} /> */}

      <h1>List of Books</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          data.map((item, index) => {

            return <div style={{ margin: '50px 134px', width: '30%' }} key={index}>
              <Card style={{ backgroundColor: 'LightGrey', width: '100%' }}>
                <p>Book Id :{item.bookId}</p>
                <p>Book Name : {item.bookName}</p>
                <p>Book Autor : {item.authorName}</p>
                <p>Price : {item.price}</p>
                <p>Quantity : {item.quantity}</p>
            </Card>

              <button className='addtocart-button' onClick={() => handleAddToCart(item.bookId)}>
                ADD TO CART

              </button>
              <button className='wishlist-button'>WISHLIST</button>

            </div>
          })
        }
      </div>

      {/* <Footer /> */}
    </div>
  )
}
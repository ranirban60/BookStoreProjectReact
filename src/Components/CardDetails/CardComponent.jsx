import React from 'react';
import { Card } from '@mui/material';

export default function CardComponent(props) {
    return (
        <div>
            <Card style={{ backgroundColor: 'LightGrey', width: '100%' }}>
                <p>Book Id :{props.bookInfo.bookId}</p>
                <p>Book Name : {props.bookInfo.bookName}</p>
                <p>Book Autor : {props.bookInfo.authorName}</p>
                <p>Price : {props.bookInfo.price}</p>
                <p>Quantity : {props.bookInfo.quantity}</p>
            </Card>
        </div>
    )
}
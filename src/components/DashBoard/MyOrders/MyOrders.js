import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])
    const [cancel, setCancel] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [cancel])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteMyOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    setCancel(!cancel)

                }
            })
    }


    return (
        <div>
            <Typography variant="h4" sx={{ fontWeight: 500, color: '#DE3163' }}>
                Your Orders are here

            </Typography>
            {myOrders?.map((product) => (
                <div>
                    <div>
                        <img src={product?.img} alt="" />
                    </div>
                    <Typography variant="h5" color="text.contained" gutterBottom>
                        Name:{product?.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} variant="h6" component="div">
                        price:$ {product?.price}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="body2">
                        Number:{product?.number}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="body2">
                        Address:{product?.address}
                    </Typography>

                    <Button style={{
                        backgroundColor:
                            'red'
                    }} variant="contained" onClick={() => handleDelete(product?._id)}>Delete</Button>

                </div>

            ))}



        </div>
    );
};

export default MyOrders;
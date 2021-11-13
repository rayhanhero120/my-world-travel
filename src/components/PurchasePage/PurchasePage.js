
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PurchasePage.css'

const PurchasePage = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://polar-peak-09049.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    console.log(product)


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {


        fetch('https://polar-peak-09049.herokuapp.com/order', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Order Successful')
                    reset();
                }
            })

    }


    return (
        <div>
            <div>
                <Typography variant="h4" sx={{ fontWeight: 500, color: '#DE3163' }}>
                    You are now in puchase page.Make sure your order

                </Typography>


                <Typography variant="h5" color="text.contained" gutterBottom>
                    Name:{product?.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} variant="h6" component="div">
                    {product?.description}
                </Typography>
                <Typography sx={{ mb: 1.5, fontWeight: 'bold' }} color="text.secondary">
                    Invented: {product?.invented}
                </Typography>
                <Typography variant="body2">
                    Fuel Source: {product?.fuel_source}
                </Typography>
                <Typography sx={{ fontWeight: 'bold' }} variant="body2">
                    Price:${product?.price}
                </Typography>
                <div>
                    <img src={product?.img} alt="" />
                </div>
            </div>

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" defaultValue={product?.name} {...register("name", { required: true })} />
                <br />
                <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                <input placeholder="price" defaultValue={product?.price} {...register("price", { required: true })} />
                <br />
                <input placeholder="number" defaultValue="" {...register("number")} />
                <br />
                <input placeholder="address" defaultValue="" {...register("address")} />
                <br />
                <input placeholder="img" defaultValue={product?.img} {...register("img", { required: true })} />
                <br />

                {errors.email && <span className="error">This field is required</span>}
                <br />

                <input type="Submit" />
            </form>
        </div>


    );
};

export default PurchasePage;
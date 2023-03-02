import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProducItem from '../components/ProducItem';
import { addProducts } from '../redux/products/actions';

const Home = () => {

    const hello = [1, 2, 3, 4,]
    const ok = hello + ""
    console.log(ok)
    const [id, setId] = useState(-1)
    const allProducts = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;

        const productName = form.productName.value
        const category = form.category.value
        const image = form.image.value
        const price = form.price.value
        const quantity = form.quantity.value

        const data = {
            id,
            productName,
            category,
            image,
            price,
            quantity
        }

        console.log(data)

        dispatch(addProducts(data))
        event.target.reset()
    }

    console.log(allProducts)
    return (
        <div>
            <main className="py-16">
                <div className="productWrapper">

                    <div className="productContainer" id="lws-productContainer">

                        {allProducts && allProducts.map(product => <ProducItem product={product} ></ProducItem>)}


                    </div>

                    <div>

                        <div className="formContainer">
                            <h4 className="formTitle">Add New Product</h4>
                            <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit}>

                                <div className="space-y-2">
                                    <label for="lws-inputName">Product Name</label>
                                    <input className="addProductInput" id="lws-inputName" type="text" required name='productName' />
                                </div>

                                <div className="space-y-2">
                                    <label for="lws-inputCategory">Category</label>
                                    <input className="addProductInput" id="lws-inputCategory" type="text" required name='category' />
                                </div>

                                <div className="space-y-2">
                                    <label for="lws-inputImage">Image Url</label>
                                    <input className="addProductInput" id="lws-inputImage" type="text" required name='image' />
                                </div>

                                <div className="grid grid-cols-2 gap-8 pb-4">

                                    <div className="space-y-2">
                                        <label for="ws-inputPrice">Price</label>
                                        <input className="addProductInput" type="number" id="lws-inputPrice" required name='price' />
                                    </div>

                                    <div className="space-y-2">
                                        <label for="lws-inputQuantity">Quantity</label>
                                        <input className="addProductInput" type="number" id="lws-inputQuantity" required name='quantity' />
                                    </div>
                                </div>

                                <button type="submit" id="lws-inputSubmit" className="submit" onClick={() => setId(prev => prev + 1)}>Add Product</button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>

        </div>
    );
};

export default Home;
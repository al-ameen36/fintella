import { Link } from 'react-router-dom';
import styles from "./products.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../state/cart.slice';
import { useEffect } from 'react';

const rows = [
    { id: 1, name: "Product 1", price: 20000, instock: 121 },
    { id: 2, name: "Product 2", price: 20000, instock: 121 },
    { id: 3, name: "Product 3", price: 20000, instock: 121 },
    { id: 4, name: "Product 4", price: 20000, instock: 121 },
    { id: 5, name: "Product 5", price: 20000, instock: 121 },
];

export default function Products() {
    const dispatch = useDispatch();
    const { cart, status } = useSelector((state) => state.cart);
    useEffect(() => {
        console.log(cart);
    }, [cart])

    function handleAddToCart(product) {
        dispatch(addToCart(product)).then((res) => {
            console.log(res);
        })
    }
    return (
        <div>
            <section>
                <h1>Products</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                            <td>In Stock</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((product, i) => {
                            return <tr key={product.name + "-" + i}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.instock}</td>
                                <td><Link to={'/product'} state={{ product }}>view more</Link></td>
                                <td><button onClick={() => handleAddToCart(product)}>add to cart</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

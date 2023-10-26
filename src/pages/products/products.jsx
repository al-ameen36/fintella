// import QRCode from "react-qr-code";

// export default function Checkout() {
//     return (
//         <div>
//             <h1>Checkout page</h1>
//             <div style={{ background: 'white', padding: '16px' }}>
//                 <QRCode value="hey" />
//             </div>
//         </div>
//     )
// }
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../state/cart.slice';
import { useEffect, useState } from 'react';
import { getProducts } from '../../state/product.slice';

export default function Cart() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])
    const [qtys, setQtys] = useState([])
    const { cart, status } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getProducts()).then((res) => {
            setProducts(res.payload?.products);
        })
    }, [products])

    function handleAddToCart(product) {
        dispatch(addToCart(product))
    }
    return (
        <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-header pb-0">
                                <h6>Products</h6>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">category</th>
                                                <th className="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">In Stock</th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products ?
                                                products.map(product =>
                                                    <tr key={product.id}>
                                                        <td>
                                                            <div className="d-flex px-2 py-1">
                                                                {/* <div>
                                                                    <img src="../src/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
                                                                </div> */}
                                                                <div className="d-flex flex-column justify-content-center">
                                                                    <h6 className="mb-0 text-sm">{product.name}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="text-xs font-weight-bold mb-0">{product.category}</p>
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <span className="text-secondary text-xs font-weight-bold">&#8358;{product.price}</span>
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <span className="text-secondary text-xs font-weight-bold">230</span>
                                                        </td>
                                                        <td className="align-middle">
                                                            {/* <div>
                                                                <button onClick={() => reduceQty(product.id)} className="btn btn-primary  font-weight-bold text-xs me-2" style={{ display: "inline-block !important" }}>
                                                                    -
                                                                </button>
                                                                0
                                                                <button onClick={() => addQty(product.id)} className="btn btn-primary  font-weight-bold text-xs d-i-block ms-2" style={{ display: "inline-block !important" }}>
                                                                    +
                                                                </button>

                                                            </div> */}
                                                            <button onClick={() => handleAddToCart(product)} className="btn btn-primary d-block font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                Add To Cart
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                                : null}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


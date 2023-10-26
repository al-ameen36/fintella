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
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
                                                <th className="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">quantity</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">In Stock</th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2 py-1">
                                                        <div>
                                                            <img src="../src/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="mb-0 text-sm">Iphone 15</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-xs font-weight-bold mb-0" style={{ width: "200px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio dolorum fuga atque excepturi quis...</p>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <span className="text-secondary text-xs font-weight-bold">1,500,000</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <span className="text-secondary text-xs font-weight-bold">230</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <span className="text-secondary text-xs font-weight-bold">230</span>
                                                </td>
                                                <td className="align-middle">
                                                    <a href="" className="btn btn-primary d-block font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                        Edit
                                                    </a>
                                                    <a href="" className="btn btn-danger d-block font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
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

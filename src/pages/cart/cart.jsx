import { useDispatch, useSelector } from 'react-redux';
import { checkout, removeFromCart } from '../../state/cart.slice';
import { useEffect, useState } from 'react';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import QRCode from 'react-qr-code';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// eslint-disable-next-line react/prop-types
export function BasicModal({ qrValue, removeQR }) {
    const handleClose = () => removeQR();

    return (
        <div>
            <Modal
                open={Boolean(qrValue)}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Scan the QR code to Checkout
                    </Typography>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={qrValue}
                        viewBox={`0 0 256 256`} />
                </Box>
            </Modal>
        </div>
    );
}
// 

export default function Cart() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    const [qr, setQr] = useState(null)
    useEffect(() => {
        console.log(cart);
    }, [cart])

    useEffect(() => {
        console.log(qr);
    }, [qr])

    function handleRemoveFromCart(product) {
        dispatch(removeFromCart(product))
    }

    function handleCheckout(cart) {
        const products = cart.map(item => ({ id: item.id, unit: 1 }))
        dispatch(checkout({ vendor_id: 1, products })).then((res) => {
            if (res.code)
                setQr(res.code)
            else
                setQr("GTJ9F3LK36")

        })
    }

    return (
        <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            {qr ? <BasicModal qrValue={qr} removeQR={() => setQr(null)} /> : null}
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-header pb-0">
                                <h6>Shopping Cart</h6>
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
                                            {cart ?
                                                cart.map(product =>
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
                                                            <span className="text-secondary text-xs font-weight-bold">1</span>
                                                        </td>
                                                        <td className="align-middle">
                                                            <button onClick={() => handleRemoveFromCart(product)} className="btn btn-primary d-block font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                Remove To Cart
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                                : null}
                                        </tbody>
                                    </table>
                                    <button onClick={() => handleCheckout(cart)} className="mx-4 btn btn-danger d-block font-weight-bold text-xs" >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


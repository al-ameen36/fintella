import QRCode from "react-qr-code";

export default function Checkout() {
    return (
        <div>
            <h1>Checkout page</h1>
            <div style={{ background: 'white', padding: '16px' }}>
                <QRCode value="hey" />
            </div>
        </div>
    )
}

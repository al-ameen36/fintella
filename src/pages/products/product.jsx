import { useLocation } from "react-router-dom"

export default function Product() {
    const location = useLocation()
    return (
        <div>
            {location.state.product ? location.state.product.name : "No item selected!"}
        </div>
    )
}

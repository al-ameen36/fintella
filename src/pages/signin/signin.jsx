import signinBGImg from "../../assets/curved-images/curved6.jpg"
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSigninMutation } from '../../state/user.slice';

export default function Signin() {
    const [signin, result] = useSigninMutation()
    const [formData, setFromData] = useState({ phone: null, password: null })
    const { cart, status } = useSelector((state) => state.cart);
    useEffect(() => {
        console.log(result);
        localStorage.setItem("token", JSON.stringify(result.data?.token))
    }, [result])
    useEffect(() => {
        console.log(formData);
    }, [formData])

    function handleSignin() {
        signin(formData)
    }

    function handleChange(ev) {
        setFromData(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
    }
    return <div>
        <div className="container position-sticky z-index-sticky top-0">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4" style={{ backgroundColor: "#fff" }}>
                        <div className="container-fluid pe-0">
                            <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                                Soft UI Dashboard
                            </a>
                            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon mt-2">
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navigation">
                                <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7">
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html">
                                            <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-2" href="../pages/profile.html">
                                            <i className="fa fa-user opacity-6 text-dark me-1"></i>
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-2" href="../pages/sign-up.html">
                                            <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                            Sign Up
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-2" href="../pages/sign-in.html">
                                            <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                            Sign In
                                        </a>
                                    </li>
                                </ul>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="btn btn-round btn-sm mb-0 btn-outline-primary me-2" href="https://www.creative-tim.com/builder?ref=navbar-soft-ui-dashboard">Online Builder</a>
                                </li>
                                <ul className="navbar-nav d-lg-block d-none">
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/product/soft-ui-dashboard" className="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark">Free download</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <main className="main-content  mt-0">
            <section>
                <div className="page-header min-vh-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                <div className="card card-plain mt-8">
                                    <div className="card-header pb-0 text-left bg-transparent">
                                        <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                                        <p className="mb-0">Enter your email and password to sign in</p>
                                    </div>
                                    <div className="card-body">
                                        <form role="form">
                                            <label>Phone Number</label>
                                            <div className="mb-3">
                                                <input onChange={handleChange} name="phone" type="email" className="form-control" placeholder="Phone Number" aria-label="Phone" aria-describedby="phone-addon" />
                                            </div>
                                            <label>Password</label>
                                            <div className="mb-3">
                                                <input onChange={handleChange} name="password" type="email" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked="" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={handleSignin} type="button" className="btn bg-gradient-info w-100 mt-4 mb-0" disabled={!formData.phone || !formData.password}>Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                        <p className="mb-4 text-sm mx-auto">
                                            Dont have an account?
                                            <a href="" className="text-info text-gradient font-weight-bold">Sign in</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 m-0 p-0">
                                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                    <div className="oblique-image bg-cover position-absolute fixed-top h-100 w-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${signinBGImg})` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
}

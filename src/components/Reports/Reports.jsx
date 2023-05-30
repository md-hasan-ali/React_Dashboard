import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './report.css'
import { AiOutlineUser } from 'react-icons/ai'
import { SlCalender } from 'react-icons/sl'
import { FiUsers } from 'react-icons/fi'
import arrowBottom from '../../images/arrow-bottom.png'
import home from '../../images/home.png'
import image1 from '../../images/image1.png'
import Search from '../../images/search.svg'
import user1 from '../../images/user2.png'
// import user from '../../images/user.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { getStoreCart, local } from '../../layout/fackbd';
// import { deleteData } from '../../layout/remove';


const Reports = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('/userInfo.json')
            .then(res => res.json())
            .then(data => setUsers(data.slice(0, 15)))
    }, [])
    let hasan = 0;
    const [products, setProducts] = useState([])
    const [items, setItem] = useState([]);
    for (const lan of items) {
        hasan = lan.id;
    }

    const deleteData = (e) => {
        console.log("delete data", e.target);
    }
    useEffect(() => {
        fetch('user.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 5)))
    }, [])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // localstorage area 
    useEffect(() => {
        const storeCart = getStoreCart();
        const saveCart = [];
        for (const id in storeCart) {
            const abaleProduct = products.find(product => product.id === id);
            if (abaleProduct) {
                const quentity = storeCart[id];
                abaleProduct.quantity = quentity;
                saveCart.push(abaleProduct);
            }
        }
        setItem(saveCart);
    }, [products]);


    const handleAddToCart = (selectedProduct) => {
        const { id } = selectedProduct;
        let newItem = [];
        const axsis = items.find(product => product.id === selectedProduct.id)
        if (!axsis) {
            selectedProduct.quantity = 1;
            newItem = [...items, selectedProduct];
        }
        else {
            const rest = items.filter(product => product.id !== selectedProduct.id);
            axsis.quantity = axsis.quantity + 1;
            newItem = [...rest, axsis];
        }
        setItem(newItem);
        local(id);
    }
    return (
        <div>
            <div className='row reports'>
                <div className="col-12">
                    <div className="report-title">
                        <h4>Reports</h4>
                        <button variant="primary" onClick={handleShow}><AiOutlineUser /> Add User</button>
                    </div>
                    <div className="report-buttons">
                        <button> <img src={image1} alt="" /> Quick Filter <img src={arrowBottom} alt="" /> </button>
                        <button style={{ borderRadius: "30px" }}><SlCalender /> Period </button>
                        <button style={{ borderRadius: "30px" }}><img src={home} alt="" /> Property </button>
                        <button style={{ borderRadius: "30px" }}><FiUsers /> Tenant </button>
                        <span>23 of 34 items found!</span>
                    </div>

                    <div className="users">
                        <div className="user-title">
                            <span>Users</span>
                            <span>Other info</span>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <div className="single-user">
                                    <img src={user1} alt="" />
                                    <h2>User name name one</h2>
                                    <span>User Id - 123</span>
                                </div>
                                <div className="info-details">
                                    <li>13 080,38 <span>Data no 1</span> </li>
                                    <li>13 080,38 <span>Data no 1</span> </li>
                                    <li>13 080,38 <span>Data no 1</span> </li>
                                </div>
                            </div>
                            <div className="col-lg-9 pt-5">
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Property ID</th>
                                            <th>Apartment ID</th>
                                            <th>Type</th>
                                            <th>Number</th>
                                            <th>Date 1</th>
                                            <th>Additional Data</th>
                                            <th>Data 2</th>
                                            <th>Amount</th>
                                            <th>Balance</th>
                                        </tr>
                                    </thead>
                                    {
                                        users.map((order, index) =>
                                            <tbody key={order._id}>
                                                <tr>
                                                    <td>{order.Property}</td>
                                                    <td>{order.Property_ID}</td>
                                                    <td>{order.Apartment_ID}</td>
                                                    <td>{order.Type}</td>
                                                    <td>{order.Number}</td>
                                                    <td>{order.Date1}</td>
                                                    <td>{order.Additional_Data}</td>
                                                    <td>{order.Date2}</td>
                                                    <td>{order.Amount}</td>
                                                    <td>{order.Balance}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal_first'>
                <Modal
                    show={show}
                    onHide={handleClose}

                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='main_modal_search'>
                            <h5>Search members</h5>
                            <div className='searchBtn'>
                                <input type="text" placeholder='Type name or email' />
                                <button><img src={Search} alt="search" /></button>
                            </div>
                        </div>
                        <div className='dataAdded'>
                            <div className="single_dataAdded">
                                {
                                    items.map(item => {
                                        const { id, name, img, email } = item;
                                        return <div key={id} className='main_singleModeldata'>
                                            <div className='single_modalUser'>
                                                <img src={img} alt="user" />
                                                <div className='content_dataAdded'>
                                                    <p>{name}</p>
                                                    <Link to="mailto:mike@mail.com">{email}</Link>
                                                </div>
                                            </div>
                                            <button onClick={() => deleteData(id)} type="button" class="btn-close" aria-label="Close"></button>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="onoffarea">
                            <p>Add everyone from this list</p>
                            <div className='offonarea'>
                                <div class="toggle">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className='user_area'>
                            <h4>All Users</h4>
                            <div id='dataSend'>
                                {
                                    products.map(product => {
                                        const { id, name, img, email } = product;
                                        return <article className="single_user"
                                            key={id} onClick={() => handleAddToCart(product)}>
                                            <div className='single_modalUser'>
                                                <img src={img} alt="user" />
                                                <p>{name}</p>
                                            </div>
                                            <Link to={`mailto:{email}`}>{email}</Link>
                                        </article>
                                    })

                                }

                            </div>
                        </div>
                    </Modal.Body>
                    {
                        hasan ? <Modal.Footer>
                            <Button className='btn-styleNew' onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button className='btn-styleNew active' >Add User</Button>
                        </Modal.Footer> : <Modal.Footer>
                            <Button className='btn-styleNew hover' onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button className='btn-styleNew hover active' >Add User</Button>
                        </Modal.Footer>
                    }
                </Modal>
            </div>
        </div >
    );
};

export default Reports;
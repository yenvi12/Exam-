import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem"; // Import MenuItem từ file khác
import { Carousel, Image, Container, Row, Form, Col, Button, Modal } from "react-bootstrap"; // Import Modal
import { PurchaseContext } from "./PurchaseContext"; // Import PurchaseContext
import useMyHook from "../hooks/hooks"; // Sử dụng custom hook
import pizza1 from "../images/pizza1.jpg";
import pizza2 from "../images/pizza2.jpg";
import pizza3 from "../images/pizza3.jpg";

const PizzaHouse = () => {
  const menuItems = useMyHook(); // Lấy dữ liệu thực đơn bằng custom hook
  const { purchasedItems, setPurchasedItems } = useContext(PurchaseContext); // Lấy sản phẩm từ context và hàm cập nhật
  const [showCart, setShowCart] = useState(false); // Trạng thái để mở/đóng giỏ hàng

  // Xử lý khi nhấn nút My Purchases để mở/đóng giỏ hàng
  const handleBuyClick = () => {
    setShowCart(true); // Mở modal giỏ hàng
  };

  const handleCloseCart = () => {
    setShowCart(false); // Đóng modal giỏ hàng
  };

  // Xử lý tăng số lượng
  const handleIncrease = (index) => {
    const updatedItems = [...purchasedItems];
    updatedItems[index].quantity += 1;
    updatedItems[index].totalPrice = (updatedItems[index].price * updatedItems[index].quantity).toFixed(2);
    setPurchasedItems(updatedItems);
  };

  // Xử lý giảm số lượng
  const handleDecrease = (index) => {
    const updatedItems = [...purchasedItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      updatedItems[index].totalPrice = (updatedItems[index].price * updatedItems[index].quantity).toFixed(2);
    } else {
      // Nếu số lượng là 1 và người dùng giảm, thì xóa mục khỏi danh sách
      updatedItems.splice(index, 1);
    }
    setPurchasedItems(updatedItems);
  };

  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container px-5">
            <h2 className="navbar-brand fs-3 fw-normal mb-0">Pizza House</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center mx-4"
              id="navbarNav"
            >
              <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex ms-auto" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Search
                </button>
              </form>
              {/* Nút My Purchases với số lượng sản phẩm đã mua */}
              <button className="btn btn-warning ms-3" onClick={handleBuyClick}>
                My Purchases ({purchasedItems.length})
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Banner */}
      <Carousel>
        <Carousel.Item>
          <Image src={pizza1} alt="First slide" />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>If you're looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={pizza2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Cheese Pizza</h3>
            <p>Cheese lovers, this is for you!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src={pizza3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Pepperoni Pizza</h3>
            <p>For those who love a bit of spice!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Menu Section */}
      <div className="bg-dark text-white py-5">
        <section className="container px-5">
          <h2 className="text-left mb-4">Our Menu</h2>
          <div className="row g-4 justify-content-center">
            {menuItems && menuItems.length > 0 ? (
              menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))
            ) : (
              <p>Loading menu...</p>
            )}
          </div>
        </section>
      </div>

      {/* Modal for Purchases Section (Cart) */}
      <Modal show={showCart} onHide={handleCloseCart} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Purchases</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {purchasedItems && purchasedItems.length > 0 ? (
            <table className="table purchases-table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {purchasedItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>${item.totalPrice}</td>
                    <td>
                      <div className="quantity-controls">
                        <button onClick={() => handleIncrease(index)}>+</button>
                        <button onClick={() => handleDecrease(index)}>-</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No purchases made yet.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-hover" variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Form Section */}
      <section className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center mb-4">Book Your Table</h2>
          <Row className="justify-content-center mx-4">
            <Form>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Your Name *" required />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Your Email *" required />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formService">
                    <Form.Select required>
                      <option value="">Select a Service</option>
                      <option>Dine In</option>
                      <option>Takeaway</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formComment">
                <Form.Control as="textarea" rows={4} placeholder="Please write your comment" />
              </Form.Group>
              <Button variant="warning" type="submit">
                Send Message
              </Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PizzaHouse;
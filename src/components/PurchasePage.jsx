import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PurchaseContext } from "./PurchaseContext";

const PurchasePage = () => {
  const { state } = useLocation(); // Lấy item từ state được truyền qua navigate
  const { item } = state || {}; // Kiểm tra nếu item tồn tại
  const [quantity, setQuantity] = useState(1); // Khởi tạo state để quản lý số lượng
  const { setPurchasedItems } = useContext(PurchaseContext); // Lấy hàm setPurchasedItems từ context
  const navigate = useNavigate(); // Hook để điều hướng

  // Nếu không có item trong state, hiển thị thông báo lỗi
  if (!item) {
    return <div>Product not found!</div>;
  }

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  // Xử lý khi người dùng xác nhận mua hàng
  const handlePurchase = (e) => {
    e.preventDefault();
    const purchasedItem = {
      title: item.title,
      quantity,
      totalPrice: (item.price * quantity).toFixed(2),
    };
    // Cập nhật danh sách các sản phẩm đã mua trong context
    setPurchasedItems((prevItems) => [...prevItems, purchasedItem]);
    alert(
      `You have purchased ${quantity} of ${item.title} for $${(
        item.price * quantity
      ).toFixed(2)}`
    );
    navigate("/"); // Điều hướng trở lại trang chính sau khi mua
  };

  // Điều hướng trở lại trang menu
  const handleBackClick = () => {
    navigate("/"); // Điều hướng trở lại trang PizzaHouse
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Purchase {item.title}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={item.image} className="img-fluid" alt={item.title} />
        </div>
        <div className="col-md-6">
          <h5>{item.title}</h5>
          <p>Price: ${item.price.toFixed(2)}</p>
          {item.originalPrice && (
            <p>
              Original Price: <del>${item.originalPrice.toFixed(2)}</del>
            </p>
          )}
          <form onSubmit={handlePurchase}>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="mb-3">
              <p>Total Price: ${(item.price * quantity).toFixed(2)}</p>
            </div>
            <button type="submit" className="btn btn-success">
              Confirm Purchase
            </button>
          </form>
          {/* Back Button */}
          <button onClick={handleBackClick} className="btn-hover mt-3">
            Back to Pizza Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
import { useState, useEffect } from "react";
import { data } from '../components/data'; // Import dữ liệu từ file data.js


// Custom Hook to fetch menu items data
function useMyHook() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Giả lập thời gian trễ của việc lấy dữ liệu
        setTimeout(() => {
          setMenuItems(data); // Sử dụng dữ liệu từ file data.js
          console.log('Loaded data:', data); // Thêm dòng này để kiểm tra dữ liệu
        }, 500); // Độ trễ 0.5s để mô phỏng việc gọi API
        
        // Nếu bạn muốn sử dụng API thực, có thể thay thế như dưới đây:
        // const response = await fetch('https://api.example.com/menu-items'); 
        // const result = await response.json();
        // setMenuItems(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Chỉ chạy một lần khi component mount

  return menuItems;
}

export default useMyHook;
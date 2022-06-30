import React, { useState } from "react";
import { FaHornbill } from "react-icons/fa";
const Navbar = () => {
  const [total, setTotal] = useState(0);

  return (
    <div class="container-fluid bg-primary px-0">
      <div className="text-white container d-flex justify-content-between align-items-center py-2">
        <h1>
          <FaHornbill /> Billing App
        </h1>
        <h3>Paid Total: {total}</h3>
      </div>
    </div>
  );
};

export default Navbar;

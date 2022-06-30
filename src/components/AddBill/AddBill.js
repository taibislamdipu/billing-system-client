import React from "react";
import Modal from "../Modal/Modal";

const AddBill = () => {
  const handleAddBill = (state, props) => {
    alert("clicked");
  };

  return (
    <div>
      <div className="container d-flex justify-content-between align-items-center mt-5 bg-primary rounded">
        <div className="d-flex w-25 align-items-center my-3">
          <p className="text-white fw-bold me-3">Billings</p>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add New Bill
          </button>
          <Modal />
        </div>
      </div>

      <div className="container mt-2 px-0">
        <table class="table table-hover">
          <thead className="bg-primary text-white">
            <tr>
              <th scope="col">Billing ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Paid Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td className="d-flex">
                <div className="me-2">Edit</div>
                <div>Delete</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddBill;

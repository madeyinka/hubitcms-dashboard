import React, { Fragment, useEffect, useState } from "react";
// import { Form } from "react-bootstrap";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  createPublisher,
  clearErrors,
} from "../../../Redux/actions/publisherActions";

import "./createpublisher.css";

import PageTitle from "../../layouts/PageTitle";

const CreatePublisher = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    website: "",
    sitetitle: "",
    description: "",
    product_type: "",
    status: "",
  });

  const {
    name,
    email,
    phone,
    company,
    address,
    website,
    title,
    description,
    product_type,
    status,
  } = user;

  const [logo, setLogo] = useState("");
  const [logoPreview, setLogoPreview] = useState("/images/default_avatar.jpg");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.publisher
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }

    if (error) {
      console.log(error);
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("company", company);
    formData.set("address", address);
    formData.set("website", website);
    formData.set("title", title);
    formData.set("description", description);
    formData.set("product_type", product_type);
    formData.set("status", status);
    formData.set("logo", logo);

    dispatch(createPublisher(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "logo") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setLogoPreview(reader.result);
          setLogo(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  return (
    <Fragment>
      <PageTitle
        title="Create a New Publisher"
        headingPara="Add, edit and manage publishers here."
        //   activeMenu="CreatePublisher"
        //   motherMenu="Shop"
      />

      <div className="row">
        {/* <form onSubmit={submitHandler} encType="multipart/form-data"> */}
        <div className="col-lg-8">
          <div className="card p-4 ">
            <form encType="multipart/form-data" onSubmit={submitHandler}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">
                    Valid Email is required.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    required
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">
                    Valid Phone Number is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    required
                    name="company"
                    value={company}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">
                    Valid Company Name is required.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    required
                    name="address"
                    value={address}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">Input a Valid Address.</div>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website Url"
                    required
                    name="website"
                    value={website}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">Input a Website Url</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Site title"
                    required
                    name="title"
                    value={title}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">Input a site title</div>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    required
                    name="description"
                    value={description}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">
                    Valid Description is required.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type"
                    required
                    name="product_type"
                    value={product_type}
                    onChange={onChange}
                  />
                  <div className="invalid-feedback">Type is required.</div>
                </div>
                <div className="col-md-6 mb-3">
                  {/* <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Status"
                    required
                  /> */}
                  <select
                    class="form-control  name='status'
                                value={status}
                                onChange={onChange}"
                  >
                    <option selected disabled>
                      Status
                    </option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <img
                    width={80}
                    height={80}
                    src={logoPreview}
                    className="rounded-circle"
                    alt="Avatar Preview"
                  />
                  <div className="invalid-feedback">Type is required.</div>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    accept="image/*"
                    type="file"
                    maxSize={3145728}
                    autoComplete="off"
                    name="logo"
                    onChange={onChange}
                  />
                </div>
              </div>
              <br />
              <button
                type="submit"
                disabled={loading ? true : false}
                class="btn btn-primary"
              >
                Create Publisher
              </button>
            </form>
          </div>
          {/* </div> */}
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="item2">
              {/* <div className=""> */}
              <div className="css-10ib5jr">
                <div className="css-1wpwbv3">
                  <div className="css-soonpg">
                    <input
                      accept="image/*"
                      type="file"
                      // file={values.avatarUrl}
                      maxSize={3145728}
                      // onDrop={handleDrop}
                      autoComplete="off"
                      // name="logo"
                      // onChange={onChange}
                    />

                    <div className="placeholder css-7zlern">
                      {/* <img
                        src={logoPreview}
                        className="rounded-circle"
                        alt="Avatar Preview"
                      /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="css-v73erd iconify iconify--ic"
                        sx="[object Object]"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z"
                          fill="currentColor"
                        />
                        <circle cx={13} cy={14} r={3} fill="currentColor" />
                        <path
                          d="M21 6h-3.17l-1.24-1.35A1.99 1.99 0 0 0 15.12 4h-6.4c.17.3.28.63.28 1c0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2c-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="css-176slt">Upload photo</span>
                    </div>
                  </div>
                </div>

                <span className="css-3mdpyg">
                  Supports *.jpg, *.jpeg, *.png
                </span>

                <label className=" css-1ahyjy">
                  <span className="css-1ew5r76">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round" />
                    </label>
                  </span>
                  <span className="css-k36ljx">
                    <h3 className=" css-1fzyuai">Publish</h3>
                    <p className="css-11r9ii4">
                      Disabling this will automatically send the user a
                      verification email
                    </p>
                  </span>
                </label>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </Fragment>
  );
};

export default CreatePublisher;

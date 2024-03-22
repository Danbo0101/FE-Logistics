import Accordion from 'react-bootstrap/Accordion';
import Select from 'react-select';
import { FcPlus } from "react-icons/fc";
import "./ManageProduct.scss";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const ManageProduct = () => {

    const [nameCompany, setNameCompany] = useState("");
    const [nameSeaPortDepart, setNameSeaPortDepart] = useState("");
    const [nameSeaPortArrival, setNameSeaPortArrival] = useState("");
    const [departDay, setDepartDay] = useState("");
    const [arrivalDay, setArrivalDay] = useState("");
    const [shippingTime, setSkippingTime] = useState("");
    const [isShippingTime, setIsShippingTime] = useState(false);
    const [productIntroduce, setProductIntroduce] = useState("");

    const [logo, setLogo] = useState(null);
    const [previewLogo, setPreviewLogo] = useState("");

    const options = [
        { value: 'EASY', label: 'EASY' },
        { value: 'MEDIUM', label: 'MEDIUM' },
        { value: 'HARD', label: 'HARD' },
    ];

    const optionsSeaPort = [
        { value: 'HCM', label: 'Hồ Chí Minh' },
        { value: 'DN', label: 'Đà Nẵng' },
        { value: 'HN', label: 'Hà Nội' },
        { value: 'Taiwan', label: 'Taiwan' },
        { value: 'Korea', label: 'Korea' },
        { value: 'Thailand', label: 'Thailand' },


    ];

    const handleCalculateSkippingTime = () => {
        let arrivalDate = new Date(arrivalDay);
        let departureDate = new Date(departDay);

        const timeDifference = arrivalDate.getTime() - departureDate.getTime();
        let daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        // console.log(daysDifference);

        if (daysDifference && daysDifference > 0) {
            setIsShippingTime(true)
            setSkippingTime(daysDifference);
            return;
        }
        if (daysDifference && daysDifference <= 0) {
            toast.warn("Invalid Shipping Day");
            setIsShippingTime(false);
        }



    }

    useEffect(() => {
        handleCalculateSkippingTime();
    }, [arrivalDay, departDay])







    const handleUploadLogo = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewLogo(URL.createObjectURL(event.target.files[0]));
            setLogo(event.target.files[0]);
            console.log("state image create", logo);
        }
    }

    const handleSubmitNewLCL = () => {
        if (!nameCompany) {
            toast.error("Invalid Name Company");
            return;
        };
        if (!nameSeaPortDepart) {
            toast.error("Invalid Name Sea Port Depart");
            return;
        };
        if (!nameSeaPortArrival) {
            toast.error("Invalid Name Sea Port Arrival");
            return;
        };
        if (!nameSeaPortDepart) {
            toast.error("Invalid Name Sea Port Depart");
            return;
        }
        if (shippingTime <= 0) {
            if (!departDay) {
                toast.error("Invalid Depart Day");
                return;
            }
            if (!arrivalDay) {
                toast.error("Invalid Arrival Day");
                return;
            }
        }
        if (!productIntroduce) {
            toast.error("Invalid Product Introduction");
            return;
        }

        console.log(nameCompany, nameSeaPortDepart, nameSeaPortArrival, departDay, arrivalDay, shippingTime, productIntroduce)
        toast.success("Add new LCL Success");

    }


    return (
        <div className="manage-product-container">
            <div className="add-new">
                <fieldset className="border rounded-3 p-3 ">
                    <legend className="float-none w-auto px-3">Add new LCL:</legend>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"

                            value={nameCompany}
                            onChange={(event) => setNameCompany(event.target.value)}
                        />
                        <label>Name Company</label>
                    </div>



                    <div className="row">
                        <div className="form-floating mb-3 col-6">
                            <input
                                type="date"
                                className="form-control"

                                // value={nameCompany}
                                onChange={(event) => setDepartDay(event.target.value)}
                            />
                            <label>Depart Day</label>
                        </div>
                        <div className="form-floating mb-3 col-6">
                            <input
                                type="date"
                                className="form-control"

                                // value={nameCompany}
                                onChange={(event) => setArrivalDay(event.target.value)}
                            />
                            <label>Arrival Day</label>
                        </div>
                    </div>
                    <div
                        className="shipping-time"
                    >{isShippingTime ?
                        <>
                            Container shipping time is  <b>{shippingTime}</b>  days

                        </>
                        :
                        <>

                        </>
                        }</div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={productIntroduce}
                            onChange={(event) => setProductIntroduce(event.target.value)}
                        />
                        <label>Product Introduction</label>
                    </div>

                    <div className="row">
                        <div className="form-floating my-3 col-6">

                            <Select
                                // defaultValue={optionsSeaPort[0]}
                                onChange={setNameSeaPortDepart}
                                options={optionsSeaPort}
                                placeholder={"Sea Port Depart ..."}
                                menuPlacement="auto" // Hiển thị menu ở vị trí phù hợp


                            />
                        </div>
                        <div className="form-floating my-3 col-6">
                            <Select
                                // defaultValue={optionsSeaPort[0]}
                                onChange={setNameSeaPortArrival}
                                options={optionsSeaPort}
                                placeholder={"Sea Port Arrival ..."}
                                menuPlacement="auto" // Hiển thị menu ở vị trí phù hợp


                            />
                        </div>
                    </div>

                    <div className="more-actions form-group">
                        <label className='"form-label label-upload' htmlFor='labelUploadCreate'>
                            <FcPlus />
                            Upload File Logo
                        </label>
                        <input
                            type='file'
                            id='labelUploadCreate'
                            hidden
                            onChange={(event) => handleUploadLogo(event)}
                        />

                    </div>
                    <div className='col-md-12 img-preview mt-2'>
                        {previewLogo ?
                            <img src={previewLogo} />
                            :
                            <span>Preview Logo</span>
                        }
                        {/* <span>Preview Image</span> */}

                    </div>

                    <div className="d-flex justify-content-center">
                        <div
                            onClick={() => handleSubmitNewLCL()}
                            className="btn btn-warning mt-3 ms-auto me-auto">
                            Save
                        </div>
                    </div>
                </fieldset>
            </div>


        </div>
    )
}

export default ManageProduct;
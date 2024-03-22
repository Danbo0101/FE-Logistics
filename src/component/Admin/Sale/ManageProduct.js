import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Accordion from 'react-bootstrap/Accordion';
import Select from 'react-select';
import "./ManageProduct.scss";

const ManageProduct = () => {

    const options = [
        { value: 'EASY', label: 'EASY' },
        { value: 'MEDIUM', label: 'MEDIUM' },
        { value: 'HARD', label: 'HARD' },
    ];
    return (
        <div className="manage-product-container">
            <div className="title ">
                Manage Product
            </div>
            <div className="add-new">
                <fieldset className="border rounded-3 p-3">
                    <legend className="float-none w-auto px-3">Add new Quiz:</legend>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name Quiz"
                        // value={name}
                        // onChange={(event) => setName(event.target.value)}
                        />
                        <label>Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Description Quiz"
                        // value={description}
                        // onChange={(event) => setDescription(event.target.value)}
                        />
                        <label>Description</label>
                    </div>

                    <div className="form-floating my-3">
                        <Select
                            // defaultValue={difficulty}
                            // onChange={setDifficulty}
                            options={options}
                            placeholder={"Quiz type ..."}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <div
                            // onClick={() => handleSubmitNewQuiz()}
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
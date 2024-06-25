const CreateAccount =({ formData, handleChange, handleSubmit })=> {

    return (
        <main className="main" id="createAcctMain">
            <div className="container">
                <h2 className="text-capitalize text-danger">Create an account</h2>
                <form className="create-account" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="firstName">First</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="lastName">last</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="mb-3 button-div">
                        <button className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default CreateAccount
export default function RegesterForm(input) {
    return (
        <form className=" g-3 m-3 p-5">
            <div className="col-md-4">
                <label for="validationDefault01" className="form-label">First name</label>
                <input type="text" pattern="[a-zA-Z]+" className="form-control" id="validationDefault01" required />
            </div>
            <div className="col-md-4">
                <label for="validationDefault02" className="form-label">Last name</label>
                <input type="text" pattern="[a-zA-Z]+" className="form-control" id="validationDefault02" required />
            </div>
            <div className="col-md-4">
                <label for="validationDefault02" className="form-label">email</label>
                <input type="email" pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}" className="form-control" id="validationDefault02" required />
            </div>
            <div className="col-md-4">
                <label for="validationDefaultUsername" className="form-label">Username</label>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                </div>
            </div>
            <div className="col-md-4">
                <label for="inputPassword6" className="col-form-label">Password</label>
            </div>
            <div class="col-md-4">
                <input type="password" id="inputPassword6"  className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            <div class="col-md-4">
                <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                </span>
            </div>
            <div className="col-md-4">
                <label for="validationDefault02" className="form-label">confirm passwrd</label>
                <input type="password" className="form-control" id="validationDefault02" required />
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                    <label className="form-check-label" for="invalidCheck2">
                        Agree to terms and conditions
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </div>
        </form>
    );
}
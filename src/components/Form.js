import { withRouter } from "react-router-dom";

function Form(props) {
    function goToThanks(e) {
        e.preventDefault();
        props.history.push("/thanks");
    }

    return (
        <div className="Form">
            <form onSubmit={goToThanks}>
                <label>Name:
                    <input type="text" onChange={props.handleChange} />
                    <input className="button" type="submit" value="Submit"/>
                </label>
            </form>
        </div>
    );
}

export default withRouter(Form);

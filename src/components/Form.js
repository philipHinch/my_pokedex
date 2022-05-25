const Form = () => {
    return (
        <form className="container">
            <div className="searchInputContainer">
                <input type="text" name="searchInput" id="searchInput" placeholder="Search..." autoFocus />
            </div>
        </form>
    );
}

export default Form;
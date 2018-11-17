import Select from 'react-select'

const SearchBar = () => (
    <React.Fragment>
        <div className="row">
            <label>Genre</label>
            <Select />
            <label>Duration</label>
            <Select />
            <label>Rating</label>
            <Select />
        </div>
        <button className="button">Show me something!</button>
    </React.Fragment>
)

export default SearchBar;
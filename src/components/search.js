import { PureComponent } from "react";

class Search extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({value: evt.target.value});
    }

    handleSubmit() {
        this.props.handleSubmit(this.state.value);
    }

    render() {
        return (
            <div className="ui input">
                <input
                    type="text"
                    placeholder="Search movie..."
                    style={{ marginRight: '10px' }}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <button onClick={this.handleSubmit} className="ui icon button">
                    <i className="search icon" />
                </button>
            </div>
        )
    }
}

export default Search;
import React from 'react';

const withSearch = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            searchTerm: ""
        };
        handleChange = ({ target: { value } }) => {
            this.setState({ searchTerm: value });
        };
        render() {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Search"
                        className="search"
                        defaultValue={this.state.searchTerm}
                        onChange={this.handleSearch}
                    />
                    <WrappedComponent searchTerm={this.state.searchTerm}/>
                </>

            );
        }
    };
}

export default withSearch;

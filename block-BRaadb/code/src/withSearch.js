import React from 'react';

const withSearch = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            searchTerm: "",
        };
        handleSearch = ({ target: { value } }) => {
            this.setState({ searchTerm: value });
        };
        render() {
            return (
                <>
                    <input
                        placeholder="Search"
                        className="search"
                        value={this.state.searchTerm}
                        onChange={this.handleSearch}
                    />
                    <WrappedComponent searchTerm={this.state.searchTerm}/>
                </>

            );
        }
    };
}

export default withSearch;

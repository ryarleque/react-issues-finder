import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { getReactIssuesList, getReactIssuesListByTitle } from '../../js/actions/index';
import './SearchBar.css';

const mapStateToProps = (state) => {
    return { reactIssuesList: state.reactIssuesList };
};

const mapDispatchToProps = dispatch => {
    return {
        getReactIssuesList: param => dispatch(getReactIssuesList(param)),
        getReactIssuesListByTitle: param => dispatch(getReactIssuesListByTitle(param))
    }
};

const SearchBar = (props) => {
    const { getReactIssuesList, getReactIssuesListByTitle, reactIssuesList } = props;
    const [isListVisible, setListVisible] = useState(false);
    let searchInput = React.createRef();

    useEffect(() => {
        getReactIssuesList();
    }, []);

    function formatRequest(item) {
        return item.replace(' ', '-');
    }

    function handleChange()  {
        let params = formatRequest(searchInput.current.value.trim()); 
        (params === '') ? getReactIssuesList() : getReactIssuesListByTitle(params); ;
        setListVisible(true);
    } 

    function handleClickItem(title) {
        searchInput.current.value = title;
        let params = formatRequest(title);
        getReactIssuesListByTitle(params);
        setListVisible(false);
    }

    return (
        <div className="search">
            <input type="text" className="search__input" placeholder="Finding react issue" ref={searchInput} onChange={() => handleChange()}/>
            {isListVisible ?
                <div className="search__list">
                    {reactIssuesList.map(item => (
                        <div className="search__item">
                            <div key={item.node_id} className="search__name" onClick={() => handleClickItem(item.title)}>{item.title}</div>
                        </div>
                    ))}
                </div>
                : null}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
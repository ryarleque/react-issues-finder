import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './List.css';
import { useSelector } from "react-redux";

export const List = () => {
    let reactIssuesList = useSelector(state => state.reactIssuesList);

    return (
        <div className="list">
            {reactIssuesList != null ? reactIssuesList.map(el => (
                <a className="list__card" href={el.html_url} target="_link">
                    <span className="list__item">
                        <span className="list__title">{el.title}</span>
                    </span>
                    <span className="list__item">
                        <span className="list__user"> <FontAwesomeIcon icon="user" className="list__user-icon" /> {el.user.login}</span>
                        <span>
                            {el.labels.map(label => (
                                <span className="list__label" style={{ background: '#' + label.color }} >{label.name}</span>
                            ))}
                        </span>
                    </span>
                </a>
            )) : null }
        </div>
    );
};
import React from 'react';
import "./PersonList.css";

export const PersonList = ({persons, selectedPerson, handlePersonClick}) => (
    <div className="personListContainer">
        {
            persons && persons.map((person, index) => {
                const classNames = [
                    "personListItem",
                    (person === selectedPerson) ? "selectedPerson" : ""
                ].join(" ");
                return (
                    <div key={index} className={classNames} onClick={() => handlePersonClick(person)}>
                        <span className="personName">{person}</span>
                        <span className="personIcon" role="img" aria-label="right-arrow">🔼</span>
                    </div>
                )
            })
        }
    </div>
)
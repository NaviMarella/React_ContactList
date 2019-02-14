import React, { Component } from 'react';
import "./MainContainer.css";
import { PersonList } from "../components/PersonList";
import Input from "../components/Input";
import DetailsContainer from "./DetailsContainer";

export class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: "",
            filteredPersons: [],
            selectedPerson: ""
        }
    }

    componentDidMount(){
        const { people } = this.props;
        const { searchTerm } = this.state;
        const filteredList = this.getFilteredList(people, searchTerm);
        const selPerson = filteredList.length > 0 ? filteredList[0].name : "";
        this.setState({
            filteredPersons: filteredList,
            selectedPerson: selPerson
        })
    }

    getFilteredList = (people, searchTerm) => {
        return people.filter(function (person) {
            let name = person.name.toLowerCase();
            return name.indexOf(searchTerm) > -1;
        });
    }

    handlePersonClick = (name) => {
        this.setState({
            selectedPerson: name
        })
    }

    getPersons = () => {
        let { filteredPersons } = this.state;
        return filteredPersons.map(person => person.name);
    }

    getSelectedPerson = () => {
        let { filteredPersons, selectedPerson } = this.state;
        return selectedPerson ? filteredPersons.filter(per => per.name === selectedPerson)[0] : null;
    }

    handleInputChange = (val) => {
        const { people } = this.props;
        let list = this.getFilteredList(people, val);
        const selPerson = list.length > 0 ? list[0].name : "";
        this.setState({
            searchTerm: val,
            filteredPersons: list,
            selectedPerson: selPerson
        });
    }

    render(){
        const persons = this.getPersons();
        const { selectedPerson } = this.state;
        const currentPerson = this.getSelectedPerson();
        return(
            <div className="mainContainer">
                <div className="peopleContainer">
                    <Input type="search" handleInput={this.handleInputChange}/>
                    <PersonList
                        persons={persons}
                        handlePersonClick={this.handlePersonClick}
                        selectedPerson={selectedPerson}
                    />
                </div>
                <div className="personDetailsContainer">
                    <DetailsContainer person={currentPerson}/>
                </div>
            </div>
        )
    }
}
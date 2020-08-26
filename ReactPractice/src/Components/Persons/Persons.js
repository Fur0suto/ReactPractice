import React, { PureComponent } from "react";
import Person from "./Person/Person";
import AuthContext from "../Context/auth-context";
class Persons extends PureComponent {
  /* shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate')
    if (
      nextProps.persons !== this.props.persons || 
      nextProps.changed !== this.props.changed || 
      nextProps.clicked !== this.props.clicked){
      return true;
    } 
    else {
        return false;
    }
  } */

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return (
      <AuthContext.Consumer>
        {(context) =>
          this.props.persons.map((person, index) => {
            return (
              <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}
              />
            );
          })
        }
      </AuthContext.Consumer>
    );
  }
}

export default Persons;

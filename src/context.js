import React, { Component } from "react"

const Context = React.createContext()

export class Provider extends Component {
    state = {
        contacts : [
            {
              id: 1,
              name: 'Nazih Ibrahim',
              email: 'nazihibrahim@info.io',
              phone: '0901-898-2345'
            },
            {
              id: 2,
              name: 'Nicole Udeh',
              email: 'nicoleudeh@gmail.com',
              phone: '0705-491-2040'
            },
            {
              id: 3,
              name: 'Jato Joseph',
              email: 'jatojoseph@yahoomail.com',
              phone: '0900-993-3043'
            },
         ]
        };

        render() {
            return (
             <Context.Provider value={this.state}>
                {this.props.children}
             </Context.Provider>
            )
        }
}


export const Consumer = Context.Consumer;
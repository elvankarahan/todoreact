import React from "react";
import UserService from "../services/UserService";


class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            testreq:''
        }
    }
    componentDidMount(){
        UserService.test().then((response) => {
            this.setState({ testreq: response.data})
        });
    }
    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Test</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.testreq.map(
                                note => 
                                <tr>
                                     <td> {note}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}
export default Test;
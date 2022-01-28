import React from 'react';


class  List extends React.Component{
    render(){
        return(    
         
            <div class="container">
        <form id="formEmail" action="">

        <div class="line">
                <label for="Name">Name:</label>
                <input type="text" id="Name"/>
            </div>
            <div class="line">
                <label for="email">Email:</label>
                <input type="email" id="email"/>
            </div>
        

        

            <div class="line submitline">
                <button class="button" id="submitBtn">Send</button>
                <button class="button" id="resetBtn">Reset</button>
            </div>
        </form>
    </div>
    
    
       
        )
    }
}



export default List

import React from 'react'
export const View = ({feedbacks}) => {
    
    return feedbacks.map(feedback=>(
        
        <tr key={feedback.name}>
            <td>{feedback.name}</td>
            <td>{feedback.email}</td>
            <td>{feedback.phone}</td>
          
            <td>{feedback.radiobutton}</td>
                      
        </tr>            
    
))
}

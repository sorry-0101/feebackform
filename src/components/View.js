import React from 'react'
export const View = ({feedbacks}) => {
    
    return feedbacks.map(feedback=>(
        
        <tr key={feedback.isbn}>
            <td>{feedback.isbn}</td>
            <td>{feedback.title}</td>
            <td>{feedback.author}</td>
            <td>{feedback.radiobutton}</td>
                      
        </tr>            
    
))
}

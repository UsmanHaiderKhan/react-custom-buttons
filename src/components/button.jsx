export default function Button({mode="filled",Icon,children, ...props}) {
    // Todo: Build this component!
   //  const buttonClass =  `button ${mode}-button`;
    const buttonClass = `button ${mode}-button ${Icon ? 'icon-button' : ''}`;
    return(
         
       <button className={buttonClass} {...props}>
         {/* If Icon is passed, render it inside a span with a special class */}
         {Icon && (
           <span className="button-icon">
             <Icon />
           </span>
         )}
         {/* Wrap children in a span */}
         <span>{children}</span>
       </button>
      
         
        )
   
    
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
   }
   
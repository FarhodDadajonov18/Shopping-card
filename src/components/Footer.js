import React from 'react'

function Footer() {
  return (
     <footer className="page-footer">
          <div className="container">
             <div className="footer-copyright">
               <div className="container">
                    © {new Date().getFullYear()} Copyright text
                 <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
            </div>
         </div>
       </div>
  </footer>
  )
}

export default Footer
import React from 'react'

function Header() {
    console.log("Header Rendered")
  return (
    <div>
      <h2>Header</h2>
    </div>
  )
}

export default React.memo(Header) // renderd hobe na

// export default Header .... a renderd hoy
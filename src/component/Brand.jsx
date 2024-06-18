
function Brand({ brand_path }) {
  return (
    <>
      {
        brand_path ?
          <img 
              src = { brand_path }
              alt = ""
              className = "header__logo"
          /> 
          : "SPaICTHub"
      }
    </>
  )
}

export default Brand

import spinner from "./__Iphone-spinner-1.gif"

const Loader = () => {
  return (
    <div className = "loader">
        <img src = {spinner} />
        <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader
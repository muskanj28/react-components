const Contact = () => {
  return <>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
    <h1 className="mt-4">Contact US</h1>
    <div className="mb-3 rounded-pill mt-3 ">

      <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name" /></div>

    <div className="mb-3">

      <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
    </div>
    <div className="mb-3">

      <textarea className="form-control" id="name" placeholder="Message" style={{ height: 100 }}></textarea> </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    <div className="col">
      <img src=""/>

    </div>
    </div>
    </div>
  </>
}
export default Contact;
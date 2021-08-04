import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { data } from '../data/templatesData'
import image from '../images/1.jpg'
const CreateNew = () => {
    return (
        <div className='container'>
            <Nav />
            <div className="row mt-5">
                {data.map(i => (
                    <div key={i.id} className="col-md-3">
                        <Link to={`/editor/${i.id}`}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to={`/editor${i.id}`} className="btn btn-primary">Select</Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreateNew

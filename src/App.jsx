import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <h1 className="text-center text-success my-4">CARD</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="300px" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="300px" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." height="300px" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

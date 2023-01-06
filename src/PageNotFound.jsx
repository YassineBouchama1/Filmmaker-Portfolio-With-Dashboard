import React from 'react'
import MainNavBar from './Theme1/Components/MainNavBar'
export default function PageNotFound() {
  return (
  <div className='container'>
    <MainNavBar/>
    <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
        <h1 class="display-1 fw-bold text-light">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
        <p class="lead">
            The page you’re looking for doesn’t exist.
          </p>
        <a href="/" class="btn btn-dark">Go Home</a>
    </div>
</div>
</div>
  )
}

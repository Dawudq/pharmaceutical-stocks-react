import React from 'react';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"


function News() {
  return (
    <div className="news">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">News</h1>
            <p>
              I am aaron and I am gay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
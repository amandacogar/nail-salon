import React, { useState } from "react";

function Review() {
  return (
    <>
      <section className="section" id="review">
        <div id="review-image">
          <h2 className="heading" id="review-heading">
            reviews
          </h2>
        </div>
        <div id="review-posts">
          <div className="review">
            <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam expedita, amet suscipit error harum vero sit nemo quis, repellat culpa deserunt iure nam.</div>
            <div className="signature">- Example Signature</div>
          </div>
          <div className="review">
            <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam expedita, amet suscipit error harum vero sit nemo quis, repellat culpa deserunt iure nam.</div>
            <div className="signature">- Example Signature</div>
          </div>
          <div className="review">
            <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam expedita, amet suscipit error harum vero sit nemo quis, repellat culpa deserunt iure nam.</div>
            <div className="signature">- Example Signature</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div className="mb-3 my-5 container">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        <h2>Name</h2>
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
      />

      <div className="container">
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="AreaUnderTheCurve_21"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            AreaUnderTheCurve_21
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="BinomialTheorem_13"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            BinomialTheorem_13
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="BinomialTheorem_24"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            BinomialTheorem_24
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="AreaUnderTheCurve_15"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            AreaUnderTheCurve_15
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="AreaUnderTheCurve_2"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            AreaUnderTheCurve_2
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="BinomialTheorem_3"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            BinomialTheorem_3
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="BinomialTheorem_4"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            BinomialTheorem_4
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="AreaUnderTheCurve_5"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            AreaUnderTheCurve_5
          </label>
        </div>
      </div>

      <div>
        <Link
          to={"/test"}
          style={{
            textDecoration: "none",
          }}
        >
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg" type="button">
              Start Test
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

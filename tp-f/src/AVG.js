import React from 'react';
import './AVG.css';

function AVG() {
    return (
        <div className="container">
            <h1 className="title">평균 가격 찾기</h1>
            <form action='' id='selector' method='GET' className="form">
                <div className="form-group">
                    <label htmlFor="selection">검색  :
                        <input type='text' placeholder='(필수)' name="selection" className="input" />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="company">제조사 :
                        <input type='text' placeholder='(필수 아님)' name="company" className="input" />
                    </label>
                </div>
                <button type='submit' className="custom-btn btn-8"><span>Readme more</span></button>
            </form>
            <button className="custom-btn btn-8">사진 올리기</button>
        </div>
    );
}

export default AVG;

import React from 'react';

import "./AVG.css";
function AVG() {

    return (
        <div>
            <h1>평균 가격 구하기</h1>
            <form>
                검색 : <input type='text' name="selection" /><br />
                제조사 : <input type='text' name="company" />
                <button type='submit' name="items">찾기</button>
            </form>
        </div>
    );
}

export default AVG;

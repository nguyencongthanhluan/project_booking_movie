import React, { Component } from 'react';
let array = [];
class DetailItem extends Component {
    renderDay = () => {
        var thu=["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
        const date = new Date();
        let day = date.getDate();
        for (let i = 1; i <= 3; i++) {
          if (day > 31) {
            day = 1;
            array.push("0" + day);
            day++;
          } else  if (day < 10) {
              array.push("0" + day);
              day++;
            } else {
              array.push(day);
              day++;
            }
            console.log(day)
        }
      };
    render() {
        return (
            <div className="overflow mb-3">
            { this.renderDay()}

            {array.map((ngay, index) => (
              <button
                // onClick={() => {
                //   this.handleLichChieuPhim(item);
                // }}
                key={index}
                className="btn btn-light px-4 mx-1"
              >
                
                {ngay}
              </button>
            ))}
          </div>
        );
    }
}

export default DetailItem;
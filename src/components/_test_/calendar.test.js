import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Calendar from "../Calendar"


describe('日历组件', () => {
   it("是否展示当前月份", () => {
      const { getByText } = render(<Calendar />)
      const curMonth = new Date().getMonth() + 1
      const curYear = new Date().getFullYear()
      expect(getByText(`${curYear}年${curMonth}月`)).toBeInTheDocument()
   });


   it('点击左图标展示前一个月的数据', () => {
      const { getByTestId, getByText } = render(<Calendar />);
      const ele = getByTestId('front');

      fireEvent.click(ele);

      let currentMonth = new Date().getMonth() + 1;
      let currentYear = new Date().getFullYear();

      if (currentMonth == 1) {
         currentMonth = 12
         currentYear = currentYear - 1
      } else {
         currentMonth = currentMonth - 1
      }



      expect(getByText(`${currentYear}年${currentMonth}月`)).toBeInTheDocument()
   })


   it('点击右图标展示后一个月的数据', () => {
      const { getByTestId, getByText } = render(<Calendar />);
      const ele = getByTestId('next');

      fireEvent.click(ele);

      let currentMonth = new Date().getMonth() + 1;
      let currentYear = new Date().getFullYear();

      if (currentMonth == 12) {
         currentMonth = 1
         currentYear = currentYear + 1
      } else {
         currentMonth = currentMonth + 1
      }



      expect(getByText(`${currentYear}年${currentMonth}月`)).toBeInTheDocument()
   })

})

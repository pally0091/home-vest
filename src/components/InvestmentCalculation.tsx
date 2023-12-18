"use client";
import React, { useEffect, useRef, useState } from "react";
import { Chart, ChartData } from "chart.js/auto";
import Slider from "./ui/Slider";

const InvestmentCalculation = () => {
  const [investment, setInvestment] = useState(50000);
  const [propertyValueGrowth, setPropertyValueGrowth] = useState(50);
  const [annualRentalYield, setAnnualRentalYield] = useState(10);
  const [projectedReturn, setProjectedReturn] = useState(0);
  const chartRef = useRef<Chart | null>(null);
  const [totalRentalIncome, setTotalRentalIncome] = useState(0);
  const [totalValueAppreciation, setTotalValueAppreciation] = useState(0);

  useEffect(() => {
    const calculateValues = () => {
      const totalRentalIncome = investment * (annualRentalYield / 100) * 5;
      const valueAppreciation = investment * (propertyValueGrowth / 100);
      setTotalRentalIncome(totalRentalIncome);
      setTotalValueAppreciation(valueAppreciation);
      const investmentData = [];
      const rentalIncomeData = [];
      const appreciationData = [];

      for (let i = 1; i <= 5; i++) {
        const rentalIncome = totalRentalIncome * i * 0.8;
        const appreciation = valueAppreciation;

        investmentData.push(investment);
        rentalIncomeData.push(rentalIncome);
        appreciationData.push(appreciation);
      }
      const projectedReturn = totalRentalIncome + valueAppreciation;
      setProjectedReturn(projectedReturn);

      return { investmentData, rentalIncomeData, appreciationData };
    };

    const canvas = document.getElementById(
      "investmentChart"
    ) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        const values = calculateValues();

        const data: ChartData<"bar", number[], string> = {
          labels: ["2024", "2025", "2026", "2027", "2028"],
          datasets: [
            {
              type: "bar",
              label: "Investment",
              data: values.investmentData,
              backgroundColor: "#2C9889",
              barThickness: 54,
            },
            {
              type: "bar",
              label: "Total Rental Income",
              data: values.rentalIncomeData,
              backgroundColor: "#DF6F4F",
              barThickness: 54,
            },
            {
              type: "bar",
              label: "Value Appreciation",
              data: values.appreciationData,
              backgroundColor: "#7047D1",
              borderRadius: 10,
              barThickness: 54,
            },
          ],
        };

        chartRef.current = new Chart(ctx, {
          type: "bar",
          data,
          options: {
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false, // Hides the vertical grid lines
                },
              },
              y: {
                stacked: true,
                // grid: {
                //   display: false, // Hides the horizontal grid lines
                // },
              },
            },
            plugins: {
              legend: {
                display: false, // Hides the legend
              },
            },
          },
        });
      }
    }
  }, [investment, propertyValueGrowth, annualRentalYield]);

  return (
    <div className="investment-calculator max-w-[1500px] mx-auto">
      <p className="text-[#EE7214] text-[15px] uppercase text-center">
        WE are changing the way you invest
      </p>
      <h3 className="text-[36px] font-semibold text-center">
        Investment Calculator
      </h3>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="bg-[#F2F2F2]  border border-[#DCDCDC] rounded-md px-5 py-10 text-justify">
          <h4 className="text-[20px] font-semibold">
            How much do you want to invest?
          </h4>
          <Slider
            content="Initial Investment"
            minValue={10000}
            maxValue={200000}
            price
            onChange={(e) => setInvestment(e)}
          />
          <Slider
            content="Property Value Growth(over 5 year)"
            minValue={0}
            maxValue={100}
            percent
            onChange={(e) => setPropertyValueGrowth(e)}
          />
          <Slider
            content="Expected annual rental yield"
            minValue={0}
            maxValue={100}
            percent
            onChange={(e) => setAnnualRentalYield(e)}
          />
          <p className="mt-5 text-[12px]">
            All projected values are before any property costs and platform
            fees, and based on a 5-year holding period. We expect the asset
            value to grow 30% over the next 5 years.*
          </p>
        </div>
        <div className="flex flex-col justify-center align-middle items-center">
          <h1 className="text-xl">Projected investment return of</h1>
          <h1 className="text-xl font-bold">
            $ {projectedReturn.toFixed(2)} in 5 Years
          </h1>
          <div className="rounded-[18px] flex flex-col lg:flex-row justify-between align-middle items-center border-[#DCDCDC] bg-[#F2F2F2] max-w-[522px] mx-auto w-full px-12 py-9 my-6">
            <div className="flex justify-start align-top items-start gap-2">
              <div className="w-[12px] h-[12px] rounded-full bg-[#2C9889] mt-2"></div>
              <div>
                <p className="text-[11px]">Investment</p>
                <p className="font-bold">$ {investment}</p>
              </div>
            </div>
            <div className="flex justify-start align-top items-start gap-2">
              <div className="w-[12px] h-[12px] rounded-full bg-[#DF6F4F] mt-2"></div>
              <div>
                <p className="text-[11px]">Total Rental Income</p>
                <p className="font-bold">$ {totalRentalIncome.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex justify-start align-top items-start gap-2">
              <div className="w-[12px] h-[12px] rounded-full bg-[#7047D1] mt-2"></div>
              <div>
                <p className="text-[11px]">Total Value Appreciation</p>
                <p className="font-bold">
                  $ {totalValueAppreciation.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[540px] max-h-[200px]">
            <canvas id="investmentChart" width="540" height="200"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculation;

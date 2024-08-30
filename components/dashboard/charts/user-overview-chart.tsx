"use client";
import React from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions } from "chart.js";
import { User } from "@prisma/client";
import "chart.js/auto";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type UserOverViewChartProps = {
    data: User[];
};

const UserOverViewChart = ({ data }: UserOverViewChartProps) => {
    let width: number, height: number, gradient;
    function getGradient(ctx, chartArea) {
        const chartWidth = chartArea.right - chartArea.left;
        const chartHeight = chartArea.bottom - chartArea.top;
        if (!gradient || width !== chartWidth || height !== chartHeight) {
            width = chartWidth;
            height = chartHeight;
            gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, "#4393BE");
            gradient.addColorStop(0.5, "yellow");
            gradient.addColorStop(1, "#CC2168");
        }

        return gradient;
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const activeUsersByMonth = [];
    const inactiveUsersByMonth = [];

    for (let i = 0; i < months.length; i++) {
        let activeCount = 0;
        let inactiveCount = 0;

        for (let j = 0; j < data.length; j++) {
            const user = data[j];
            const userMonth = new Date(user.createdAt).getMonth();

            if (userMonth === i) {
                if (user.isActive) {
                    activeCount++;
                } else {
                    inactiveCount++;
                }
            }
        }

        activeUsersByMonth.push(activeCount);
        inactiveUsersByMonth.push(inactiveCount);
    }

    const currentData = {
        labels: months,
        datasets: [
            {
                label: "Active",
                data: activeUsersByMonth,
                borderColor: function (context) {
                    if (context) {
                        const chart = context.chart;
                        const chartArea = chart.chartArea;
                        if (!chartArea) {
                            return;
                        }
                        return getGradient(chart.ctx, chartArea);
                    }
                    return "black";
                },
            },
            {
                label: "UnActive",
                data: inactiveUsersByMonth,
                borderColor: function (context) {
                    if (context) {
                        const chart = context.chart;
                        const chartArea = chart.chartArea;
                        if (!chartArea) {
                            return;
                        }
                        return getGradient(chart.ctx, chartArea);
                    }
                    return "black";
                },
            },
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
        backgroundColor: "transparent",
        resizeDelay: 1,
    };

    return (
        <div className="bg-background rounded-md p-3 w-[60%]">
            <span className="font-bold text-lg">Overview</span>
            <Chart
                type="line"
                data={currentData}
                options={options}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
};

export default UserOverViewChart;

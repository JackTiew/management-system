import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;

const DoughnutChart = (props) => {

    const { data, legend, title } = props;

    return (
        <div>
            {
                data &&
                    <Doughnut
                        data={{
                            labels: data.map(x => x.label),
                            datasets: [
                                {
                                    label: legend,
                                    data: data.map(x => x.value),
                                    backgroundColor: [
                                        "rgba(43, 63, 229, 0.8",
                                        "rgba(250, 192, 19, 0.8",
                                        "rgba(253, 135, 135, 0.8",
                                        "rgba(129, 190, 171, 0.9)",
                                        "rgba(148, 0, 129, 0.9)",
                                        "rgba(196, 129, 193, 0.3)",
                                        "rgba(91, 0, 5, 1)",
                                        "rgba(116, 60, 223, 0.6)",
                                        "rgba(7, 206, 21, 0.7)",
                                        "rgba(210, 124, 45, 0.6)",
                                    ]
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                title: {
                                    text: title
                                }
                            }
                        }}
                    />
            }
        </div>
    )
}

export default DoughnutChart;
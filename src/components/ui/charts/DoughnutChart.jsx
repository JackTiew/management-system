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
                                },
                            ]
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
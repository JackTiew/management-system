import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;

const LineChart = (props) => {

    return (
        <div>
            <Line
                data={{
                    labels: ['A', 'B', 'C'],
                    datasets: [
                        {
                            label: 'Revenue',
                            data: [200, 300, 400],
                        },
                        {
                            label: 'Loss',
                            data: [90, 80, 70],
                        }
                    ]
                }}
                options={{
                    plugins: {
                        title: {
                            text: 'Revenue Sources'
                        }
                    }
                }}
            />
        </div>
    )
}

export default LineChart;
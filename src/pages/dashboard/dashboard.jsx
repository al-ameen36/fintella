import { BarChart } from '@mui/x-charts/BarChart';
import styles from "./dashboard.module.css"
import { PieChart } from '@mui/x-charts';

export default function Dashboard() {
    return (
        <div>
            <section className={styles.overview_cards}>
                <div>
                    <h2>Total Items</h2>
                    <p>230</p>
                </div>
                <div>
                    <h2>Sold</h2>
                    <p>1171</p>
                    <p>This month</p>
                </div>
                <div>
                    <h2>No of Customers</h2>
                    <p>190</p>
                </div>
            </section>
            <section className={styles.charts} style={{ paddingInlineStart: '.5rem' }}>
                <div>
                    <BarChart
                        xAxis={[
                            {
                                label: 'Sales',
                                id: 'sales',
                                data: ['Jan', 'Feb', 'Mar', "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                scaleType: 'band',
                            },
                        ]}
                        series={[
                            {
                                data: [200, 105, 311, 200, 105, 311, 200, 105, 311, 200, 105, 311],
                            },
                        ]}
                        width={600}
                        height={300}
                    />
                </div>
                <div>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
            </section>
        </div>
    )
}

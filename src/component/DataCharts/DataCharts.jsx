import DataTable from "react-data-table-component";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

export default function DataCharts() {
    const data = [
        {
            id: 1, userName: 'yoggi', email: 'Yoggi.s@test.com', deviceName: 'laptop', brand: 'Lenovo', model: 'thinkpad', serialNumber: 1245
        },
        {
            id: 2, userName: 'yoggi', email: 'Yoggi.s@test.com', deviceName: 'mouse', brand: 'Lenovo', model: 'thinkpad', serialNumber: 1245
        },
        {
            id: 4, userName: 'yoggi', email: 'Yoggi.s@test.com', deviceName: 'printer', brand: 'Lenovo', model: 'thinkpad', serialNumber: 1245
        },
        {
            id: 5, userName: 'yoggi', email: 'Yoggi.s@test.com', deviceName: 'laptop', brand: 'Lenovo', model: 'thinkpad', serialNumber: 1245
        },
        {
            id: 6, userName: 'yoggi', email: 'Yoggi.s@test.com', deviceName: 'laptop', brand: 'Lenovo', model: 'thinkpad', serialNumber: 1245
        },

    ];
    const totals = data.reduce((accumulator, currentItem) => {
        // Increment laptop count
        if (currentItem.deviceName === 'laptop') {
            accumulator.laptops += 1;
        }
        // Increment mouse count
        if (currentItem.deviceName === 'mouse') {
            accumulator.mice += 1;
        }
        // Increment keyboard count
        if (currentItem.deviceName === 'printer') {
            accumulator.printers += 1;
        }
        return accumulator;
    }, { laptops: 0, mice: 0, printers: 0 });
    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'username',
            selector: row => row.userName,
            sortable: true,
        },
        {
            name: 'email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'model',
            selector: row => row.model,
            sortable: true,
        },
    ];
    return (
        <div>
            <div className='bg-white mb-5 p-7 w-max'>
                <h2>Total Items in inventory</h2>
                <BarChart
                    layout="vertical"
                    width={500}
                    height={50}
                    data={[totals]}
                // padding={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis hide type="number" />
                    <YAxis hide dataKey="name" type="category" />
                    <Tooltip cursor={false} wrapperStyle={{ display: "none" }} />
                    <Legend />
                    <Bar dataKey="laptops" stackId="a" fill='#8884d8' />
                    <Bar dataKey="mice" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="printers" stackId="a" fill="#ffc658" />

                </BarChart>
            </div>
            <div>
                <div className="table-data">
                    <h2>Last added items</h2>
                    <DataTable
                        data={data}
                        columns={columns}
                    />
                </div>
            </div>
        </div>
    )
}

import DataTable from "react-data-table-component"
// import data from 
export default function DataCharts() {
    const data = [
        {
            name: 'ok1',
            device: 'laptopq',
            sn: 12341231,
        },
        {
            name: 'ok2',
            device: 'mousew',
            sn: 12341231,
        },
        {
            name: 'ok3',
            device: 'mouses',
            sn: 12341231,
        },
        {
            name: 'ok4',
            device: 'laptopz',
            sn: 12341231,
        }
    ];
    const columns = [
        {
            name: 'name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'device',
            selector: row => row.device,
            sortable: true
        },
    ]

    return (
        <div className="w-full p-20">
            <h2 className="">Last added items</h2>
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </div>
    )
}

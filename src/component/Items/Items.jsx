import { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import styled from 'styled-components'
import button from '../button';
const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;
const ClearButton = styled(button)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton type="button" onClick={onClear}>
            X
        </ClearButton>
    </>
);
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
    {
        name: 'device',
        selector: row => row.deviceName,
        sortable: true,
    },
    {
        name: 'Lended Date',
        selector: row => row.Lended,
        sortable: true,
    },
    {
        name: 'Return Date',
        selector: row => row.returnDate,
        sortable: true,
    },
    {
        name: 'Used',
        selector: row => row.isUsed,
        sortable: true,
    },
    {
        name: 'Service',
        selector: row => row.isService,
        sortable: true,
    },
];

export default function Items({ data }) {
    console.log({ data })
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredData = data.filter(
        item => item.userName && item.userName.toLowerCase().includes(filterText.toLocaleLowerCase()),
    );
    console.log({ filteredData })
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div>
            <div className="table-data">
                <DataTable
                    title="Contact List"
                    columns={columns}
                    data={filteredData}
                    pagination
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    selectableRows
                    persistTableHead
                />
            </div>
        </div>
    )
}

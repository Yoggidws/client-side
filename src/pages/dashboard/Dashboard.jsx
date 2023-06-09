import AssetsIT from '../../component/AssetsIT/AssetsIT'
import DataCharts from '../../component/DataCharts/DataCharts'
import Header from '../../component/header/Header'
import Inventory from '../../component/Inventory/Inventory'
import { Tab } from '@headlessui/react'
import { faBoxesStacked, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Dashboard() {
    const [isClicked, setIsClicked] = useState('dashboard');
    const handleToogle = (isClicked) => {
        setIsClicked(isClicked)
    }

    return (
        <>
            <Header />
            <div className='flex flex-col p-8'>
                <Tab.Group>
                    <Tab.List className='flex justify-center gap-2 pb-7 '>
                        <Tab
                            className={`bg-white w-32 rounded ${isClicked === 'dashboard' ? 'header-title-orange' : ''}`}
                            onClick={() => handleToogle('dashboard')}>
                            <FontAwesomeIcon icon={faWindowRestore} className=" pr-3" />
                            Dashboard
                        </Tab>
                        <Tab
                            className={`bg-white w-32 rounded ${isClicked === 'inventory' ? 'header-title-orange' : ''}`}
                            onClick={() => handleToogle('inventory')}>
                            <FontAwesomeIcon icon={faBoxesStacked} className=" pr-3" />
                            Inventory
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <AssetsIT />
                            <DataCharts />
                        </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels>
                        <Tab.Panel>
                            <Inventory />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    )
}

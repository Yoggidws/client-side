import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function AssetsIT() {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <div className='Assets-it flex flex-row gap-[1px] w-full justify-center'>
            <div className='flex flex-col bg-white p-5 m-1 rounded-xl'>
                <span>ASSETS OVERVIEW</span>
                <div className='flex flex-row'>
                    <div className="laptop flex flex-col w-40  mt-6">
                        <span className=' rounded-full bg-blue-300 w-20 h-20 flex items-center justify-center mb-10'>
                            <FontAwesomeIcon icon={faLaptop} />
                        </span>
                        <h2 className=' text-sm'>Total Laptops</h2>
                        <h3 className=' text-2xl'>230</h3>
                    </div>
                    <div className="laptop flex flex-col w-40 mt-6">
                        <span className=' rounded-full bg-blue-300 w-20 h-20 flex items-center justify-center mb-10'>
                            <FontAwesomeIcon icon={faLaptop} />
                        </span>
                        <h2 className=' text-sm'>Total Laptops</h2>
                        <h3 className=' text-2xl'>230</h3>
                    </div>
                    <div className="laptop flex flex-col w-40 mt-6">
                        <span className=' rounded-full bg-blue-300 w-20 h-20 flex items-center justify-center mb-10'>
                            <FontAwesomeIcon icon={faLaptop} />
                        </span>
                        <h2 className=' text-sm'>Total Laptops</h2>
                        <h3 className=' text-2xl'>230</h3>
                    </div>
                    <div className=" w-80 h-72 justify-center flex">
                        <ResponsiveContainer width={"100%"} aspect={1}>
                            <PieChart width={300} height={300}>
                                <Pie
                                    isAnimationActive={false}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={70}
                                    fill="#8884d8"
                                    label
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className='p-5 m-1 rounded-xl bg-white'>
                <span> Dept users</span>
                <div className=" w-80 h-72 justify-center flex">
                    <ResponsiveContainer width={"100%"} aspect={1}>
                        <PieChart width={400} height={400}>
                            <Pie
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

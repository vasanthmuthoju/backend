import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { app } from './firebase/Firebase.config.js'
import { useNavigate } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer} from 'recharts'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend as ChartLegend } from 'chart.js'
ChartJS.register(ArcElement, ChartTooltip, ChartLegend)
import { MdAttachMoney, MdCalendarToday, MdBarChart, MdPeople } from 'react-icons/md'


const monthlyData = [
  { name: 'Jan', users: 400, sales: 240 },
  { name: 'Feb', users: 300, sales: 139 },
  { name: 'Mar', users: 200, sales: 980 },
  { name: 'Apr', users: 278, sales: 390 },
  { name: 'May', users: 189, sales: 480 },
]

const dailySalesData = [
  { day: 'Mon', sales: 120 },
  { day: 'Tue', sales: 80 },
  { day: 'Wed', sales: 150 },
  { day: 'Thu', sales: 200 },
  { day: 'Fri', sales: 250 },
  { day: 'Sat', sales: 300 },
  { day: 'Sun', sales: 350 },
]

const pieData = {
  labels: ['Electronics', 'Clothing', 'Furniture', 'Books'],
  datasets: [
    {
      label: 'Sales Distribution',
      data: [300, 200, 100, 150],
      backgroundColor: ['#f87171', '#60a5fa', '#facc15', '#6ee7b7'],
      borderWidth: 1,
    },
  ],
}


const categorySalesData = [
  { category: 'Electronics', sales: 1200 },
  { category: 'Clothing', sales: 800 },
  { category: 'Furniture', sales: 500 },
  { category: 'Books', sales: 400 },
]

function Dashboard() {
  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
    navigate('/Home')
  }

  return (
    <div className="flex h-172">
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Overview</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Settings</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Profile</a>
        </nav>
      </aside>

      
      <div className="flex-1 flex flex-col">
        
        <header className="flex justify-between items-center bg-blue-500 text-white p-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100 font-medium"
          >
            Sign Out
          </button>
        </header>

        
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Welcome to your dashboard</h2>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <MdAttachMoney size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Sales</p>
                <p className="text-xl font-bold text-green-600">₹1,20,000</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <MdCalendarToday size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Monthly Sales</p>
                <p className="text-xl font-bold text-blue-600">₹35,000</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                <MdBarChart size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Yearly Sales</p>
                <p className="text-xl font-bold text-purple-600">₹4,50,000</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                <MdPeople size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="text-xl font-bold text-orange-600">1,200</p>
              </div>
            </div>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">User Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Sales Overview</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Daily Sales</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dailySalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Product Category Sales</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={categorySalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          
          <div className="bg-white p-4 rounded shadow col-span-1 md:col-span-2 mt-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Sales Distribution</h3>
            <div className="w-full max-w-md mx-auto">
              <Pie data={pieData} />
            </div>
          </div>

          
          <div className="bg-white p-6 rounded shadow mt-8">
            <h3 className="text-lg font-semibold mb-4">Orders Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-100 p-4 rounded shadow">
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="text-xl font-bold text-blue-600">500</p>
              </div>

              <div className="bg-green-100 p-4 rounded shadow">
                <p className="text-sm text-gray-500">Pending Orders</p>
                <p className="text-xl font-bold text-green-600">50</p>
              </div>

              <div className="bg-orange-100 p-4 rounded shadow">
                <p className="text-sm text-gray-500">Completed Orders</p>
                <p className="text-xl font-bold text-orange-600">450</p>
              </div>

              <div className="bg-red-100 p-4 rounded shadow">
                <p className="text-sm text-gray-500">Cancelled Orders</p>
                <p className="text-xl font-bold text-red-600">5</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
import {Loader,Navbar,Welcome,Footer,Tansactions,Services} from './components'
const App =() => {
  return (
    <div className="min -h-screen">
    <div className='gradient-bg-welcome'>
      <Navbar/>
      <Welcome/>
    </div>
    <Tansactions/>
    <Services/>
    <Footer/>
    </div>
  )
}
export default  App;
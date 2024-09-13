import Card from './Card';
import datas from './Datas';
import Login from './Login';
import Registration from './Registration';

let isLogedin=false;
let isRegister=false;

function renderConditionally() {
    let k=1;
   return (
    isRegister ? 
            (isLogedin ? 
                <div className='row justify-content-center'>
                {datas.map(data=> 
                    <Card 
                        key={k++}
                        name={data.name}
                        img={data.img}
                        waranty={data.waranty}
                        price={data.price}
                    />
                    )}
                </div>
                    : 
                <Login />
            ) 
            :
        <Registration/>
   );
}

function App() {
   
    return (
        renderConditionally()  
    );
}
export default App;
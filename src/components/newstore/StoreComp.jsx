import '../../App.css';
import '../../css/store.css';
import '../../css/dropdown.css';
import StoreProduct from './StoreProduct';
function StoreComp(props) {
  



  return (
    <div className="">

    <StoreProduct  ServWayState={props.ServWayState} SaladsState={props.SaladsState} ProductState= {props.ProductState}/>



    </div>
  );
}

export default StoreComp;

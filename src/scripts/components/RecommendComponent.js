import HeaderComponent from "./HeaderComponent"
import BannerComponent from "./BannerComponent"
import ListComponent from './ListComponent'
class RecommendComponent extends React.Component {   
    render(){
        return (
            <div>
               <HeaderComponent active='/recommend'/>
               <BannerComponent/>
               <ListComponent/>
            </div>
        )
    }
}
//定义默认属性
RecommendComponent.defaultProps={
    // active:'/recommend'
}
export default RecommendComponent
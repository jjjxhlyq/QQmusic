import HeaderComponent from "./HeaderComponent"
class SearchComponent extends React.Component {   
    render(){
        return (
            <div>
               <HeaderComponent active='/search'/>
               serch
            </div>
        )
    }
}
//定义默认属性
SearchComponent.defaultProps={
}
export default SearchComponent
import HeaderComponent from "./HeaderComponent"
class RankingComponent extends React.Component {
    render(){
        return (
            <div>
               <HeaderComponent active='/ranking'/>
               ranking
            </div>
        )
    }
}
RankingComponent.defaultProps={
    active:'/ranking'
}
export default RankingComponent
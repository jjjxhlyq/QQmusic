import {Link} from 'react-router'
class HeaderComponent extends React.Component{
    render(){
        let {active}=this.props;
        return(
            <header>
            <hgroup>
                <p><img src='./img/logo.png'/></p>
                <Link>下载APP</Link>
            </hgroup>
             <nav>   
            <Link to='/recommend' className={active=='/recommend'?'active':''}>推荐</Link>
            <Link to='/ranking' className={active=='/ranking'?'active':''}>排行榜</Link>
            <Link to='/search' className={active=='/search'?'active':''}>搜索</Link>
            </nav>
            </header>
        )
    }
}
HeaderComponent.defaultProps={
    active:'/recommend'
}
export default HeaderComponent 
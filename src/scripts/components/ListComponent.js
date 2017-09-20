import Fetch from '../modules/fetch'
class ListComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            joinVideo:[]
        }
    }
    getMessage(){
        let that=this;
        Fetch.Get('http://localhost:9000/QQ/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',{}).then(res=>{return res.json()}).then(json=>{
            that.setState({
                joinVideo:json.data.radioList
            })
        })
    }
    componentWillMount(){
        this.getMessage();
    }
    showMessage(){
        let that=this
        let arr=[]
        this.state.joinVideo.forEach((item,i)=>{
            arr.push(<li>
                <div><img src={item.picUrl}/><span>1</span></div>
                <p>{item.Ftitle}</p>
                
                </li>)
        })
        return arr;
    }
    render(){
        return(
            <div className='video'>
                <p>电台</p>
                <ul>
                    {this.showMessage()}
                </ul>
                <p>热门歌单</p>
                <p className='p1'>去客户端发现更多好声音></p>
                <a href='http://y.qq.com/?ADTAG=myqq&nomobile=1#type=index'>查看电脑版网页</a>
                <h5><img src='./img/logo_footer.png'/></h5>
                <p className='p2'>Copyright © 1998 - 2017 Tencent.All Rights Reserved</p>
                <p className='p2'>联系电话：0755-86013388 QQ群：55209235</p>
                
            </div>
        )
    }
}
export default ListComponent
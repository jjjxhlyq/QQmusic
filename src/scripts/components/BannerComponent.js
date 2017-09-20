class BannerComponent extends React.Component {   
    render(){
        return (
            <div className="swiper-container swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src='./img/banner1.jpg'/></div>
                    <div className="swiper-slide"><img src='./img/banner2.jpg'/></div>
                    <div className="swiper-slide"><img src='./img/banner3.jpg'/></div>
                    <div className="swiper-slide"><img src='./img/banner4.jpg'/></div>
                    <div className="swiper-slide"><img src='./img/banner5.jpg'/></div>
                </div>
                    <div className="swiper-pagination"></div>
            </div>

        )
    }
    componentDidMount(){
       new Swiper('.swiper', {
           direction: 'horizontal',
           initialSlide:1,
           autoplay:3000,
           loop: true,   
        //    paginationType: 'progress',
           pagination: '.swiper-pagination'
        })
    }
}
export default BannerComponent
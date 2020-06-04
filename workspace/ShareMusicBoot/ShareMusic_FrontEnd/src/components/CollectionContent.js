import React, { Component } from 'react';
import '../css/modal.css';
import defaultImg from '../images/defaultImg.PNG';
class CollectionContent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            likeColor:'',
            imgURL:defaultImg,
            tracks:'',
            songs:[],
            collectionInfo:{
                collection:{
                },
                songs:[],
                likes:[],
                tags:[],
                replys:[]
            }
        }
    }

    componentDidMount() {
        const {match} = this.props;
        if(true) {
            fetch("/ShareMusic/collections/cno/" + match.params.cno, {
                method :"GET"
            })
            .then(res=>res.json())
            .then(data=> {
                this.setState({
                    collectionInfo:data,
                    imgURL:"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
                    + data.collection.userId + "/"
                    + data.collection.cno + "-"
                    + data.collection.collectionName + ".png",
                    // songs:data.collection.songs
                    // tracks:data.collection.songs.length
                });
                
                if(data.likes)
          });
        }
    }
    render() {
        console.log(this.state.imgURL);
        const {match} = this.props;
        const {imgURL, tracks, collectionInfo} = this.state;
        return (
            <section>
            <div className="main">
                <div className="container-fluid" id="top">
                <div className="profile">
                    <div id="image-box">
                    <img
                        src={imgURL}
                        className="collection-image"
                        alt="image"
                    />
                    </div>

                    <div className="container collection-information">
                        <div className="row">
                            <div id="collection-title" style={{fontSize:"4vh"}}>
                            {collectionInfo.collection.collectionName}
                            </div>
                        </div>
                        <div className="row">
                            <strong>{collectionInfo.collection.userId}</strong>
                        </div>
                        <div className="row"> {/* {collectionInfo.collection.songs.length} */}
                            <strong>{collectionInfo.songs.length}&nbsp;</strong><small>Tracks</small>
                        </div>
                        <div className="row">
                            <strong>{collectionInfo.likes.length}&nbsp;</strong><small>Likes</small> 
                        </div>

                        <div className="row">

                        {collectionInfo.tags.map((tag, i) => {
                            return (
                                <span id="tag" key={i}>
                                    #{tag.tag}&nbsp;
                                </span>
                            );
                        })}
                        </div>

                        <div className="row" style={{width:"80%", marginTop:"0.5vh"}}>
                            <div style={{display:"inline-block"}}>
                            <span> {/*#ED4956*/}
                            <i className="fas fa-heart fa-lg" style={{color:"#ED4956"}} 
                                onClick={onClickLike}
                            ></i>
                            </span>
                            </div>

                            <div style={{display:"inline-block", marginLeft:"2vh"}}>
                            <span> 
                            <i className="far fa-comment fa-lg"
                                datatoggle="modal"
                                datatarget="#myModal"
                            ></i>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* <!-- container --> */}

                <div className="container-fluid" id="bottom">
                <div id="track">
                    <ul className="list-group mb-3">
                    <li className="list-group-item d-flex">
                        <div className="col-md-2" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>1</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>창모</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>아름다워</b></h6>
                        </div>
                    </li>

                    <li className="list-group-item d-flex align-items-center justify-content-between">
                        <div className="col-md-2" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>2</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>창모</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>마에스트로</b></h6>
                        </div>
                    </li>

                    <li className="list-group-item d-flex align-items-center justify-content-between" >
                        <div className="col-md-2" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>3</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>원더걸스</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>Tell me</b></h6>
                        </div>
                    </li>

                    <li className="list-group-item d-flex align-items-center justify-content-between" >
                        <div className="col-md-2" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>4</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>방탄소년단</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>불타오르네</b></h6>
                        </div>
                    </li>

                    <li className="list-group-item d-flex align-items-center justify-content-between" >
                        <div className="col-md-2" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>6</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>황인욱</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>취했나봐</b></h6>
                        </div>
                    </li>

                    <li className="list-group-item d-flex align-items-center justify-content-between" >
                        <div className="col-md-2" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>7</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>창모</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>COUNTIN MY GUAP</b></h6>
                        </div>
                    </li>

                    <li className="list-group-item d-flex align-items-center justify-content-between" >
                        <div className="col-md-2" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>8</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>GRAY (그레이)</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>Moon Blue</b></h6>
                        </div>
                    </li>

                    <li className="list-group-item d-flex align-items-center justify-content-between" >
                        <div className="col-md-2" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>9</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>볼빨간 사춘기</b></h6>
                        </div>

                        <div className="col-md-5" style={{textAlign:"left"}}>
                        <h6 className="my-0"><b>품</b></h6>
                        </div>
                    </li>

                    {/* <li
                        class="list-group-item d-flex align-items-center justify-content-between"
                    >
                        <div class="col-md-2" style="text-align: left;">
                        <h6 class="my-0"><b>10</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>길구봉구</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>은하수</b></h6>
                        </div>
                    </li>

                    <li
                        class="list-group-item d-flex align-items-center justify-content-between"
                    >
                        <div class="col-md-2" style="text-align: left;">
                        <h6 class="my-0"><b>11</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>폴킴</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>Not Over Yet</b></h6>
                        </div>
                    </li>

                    <li
                        class="list-group-item d-flex align-items-center justify-content-between"
                    >
                        <div class="col-md-2" style="text-align: left;">
                        <h6 class="my-0"><b>12</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>폴킴</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>카톡</b></h6>
                        </div>
                    </li>

                    <li
                        class="list-group-item d-flex align-items-center justify-content-between"
                    >
                        <div class="col-md-2" style="text-align: left;">
                        <h6 class="my-0"><b>12</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>폴킴</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>카톡</b></h6>
                        </div>
                    </li>

                    <li
                        class="list-group-item d-flex align-items-center justify-content-between"
                    >
                        <div class="col-md-2" style="text-align: left;">
                        <h6 class="my-0"><b>12</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>폴킴</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>카톡</b></h6>
                        </div>
                    </li>

                    <li
                        class="list-group-item d-flex align-items-center justify-content-between"
                    >
                        <div class="col-md-2" style="text-align: left;">
                        <h6 class="my-0"><b>12</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>폴킴</b></h6>
                        </div>

                        <div class="col-md-5" style="text-align: left;">
                        <h6 class="my-0"><b>카톡</b></h6>
                        </div>
                    </li> */}
                    </ul>
                </div>

                <div id="youtube">
                    <iframe
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/lOrU0MH0bMk?autoplay=1&origin=http://example.com"
                    frameBorder="0"
                    //   -webkit-border-radius:30px;
                    //   float:right;
                    >
                    </iframe>
                </div>
                </div>
                {/* <!-- container --> */}
            </div>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog" style={{marginTop:"15vh", width:"600px"}}>
                        {/* <!-- Modal content--> */}
                        <div className="modal-content" style={{borderRadius:"30px"}}>
                        <div className="modal-body">
                            <div className="container-fluid modal-container">
                            <div className="row reply-item">
                                <div className="reply-image">
                                <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                                    className="collection-image"
                                    alt="image"
                                />
                                </div>
            
                                <div className="reply-user">
                                <strong>parkmingon</strong>
                                </div>
            
                                <div id="reply-message">
                                <span className="msg">
                                    hellokasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasd
                                    kasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasd
                                    Some text in the modal2
                                </span>
                                </div>
                            </div>
            
                            <div className="row reply-item">
                                <div className="reply-image">
                                <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image3.png"
                                    className="collection-image"
                                    alt="image"
                                />
                                </div>
            
                                <div className="reply-user">
                                <strong>hyongsoo</strong>
                                </div>
            
                                <div id="reply-message">
                                <span className="msg">
                                    Some text in the modal3
                                </span>
                                </div>
                            </div>
            
                            <div className="row reply-item">
                                <div className="reply-image">
                                <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image4.png"
                                    className="collection-image"
                                    alt="image"
                                />
                                </div>
            
                                <div className="reply-user">
                                <strong>yhjun1000</strong>
                                </div>
            
                                <div id="reply-message">
                                <span className="msg">
                                    Some text in the modal4
                                </span>
                                </div>
                            </div>
            
                            <div className="row reply-item">
                                <div className="reply-image">
                                    <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                                    className="collection-image"
                                    alt="image"
                                    />
                                </div>
                
                                <div className="reply-user">
                                    <strong>parkmingon</strong>
                                </div>
                
                                <div id="reply-message">
                                    <span className="msg">
                                    hellokasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasd
                                    kasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasd
                                    Some text in the modal2
                                    </span>
                                </div>
                                </div>
                
                                <div className="row reply-item">
                                <div className="reply-image">
                                    <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image3.png"
                                    className="collection-image"
                                    alt="image"
                                    />
                                </div>
                
                                <div className="reply-user">
                                    <strong>hyongsoo</strong>
                                </div>
                
                                <div id="reply-message">
                                    <span className="msg">
                                    Some text in the modal3
                                    </span>
                                </div>
                                </div>
                
                                <div className="row reply-item">
                                <div className="reply-image">
                                    <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image4.png"
                                    className="collection-image"
                                    alt="image"
                                    />
                                </div>
                
                                <div className="reply-user">
                                    <strong>yhjun1000</strong>
                                </div>
                
                                <div id="reply-message">
                                    <span className="msg">
                                    Some text in the modal4
                                    </span>
                                </div>
                                </div>
            
                                <div className="row reply-item">
                                <div className="reply-image">
                                    <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                                    className="collection-image"
                                    alt="image"
                                    />
                                </div>
                
                                <div className="reply-user">
                                    <strong>parkmingon</strong>
                                </div>
                
                                <div id="reply-message">
                                    <span className="msg">
                                    hellokasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasdkasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasd
                                    kasdjfkl;ajsdljfklakjs;djfklajsdlfjla;sfjdisplay:kl;asdjfkl;asjdl;fjklasjdkl;fajdkl;fjasd
                                    Some text in the modal2
                                    </span>
                                </div>
                                </div>
                
                                <div className="row reply-item">
                                <div className="reply-image">
                                    <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image3.png"
                                    className="collection-image"
                                    alt="image"
                                    />
                                </div>
                
                                <div className="reply-user">
                                    <strong>hyongsoo</strong>
                                </div>
                
                                <div id="reply-message">
                                    <span className="msg">
                                    Some text in the modal3
                                    </span>
                                </div>
                                </div>
                
                                <div className="row reply-item">
                                <div className="reply-image">
                                    <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image4.png"
                                    className="collection-image"
                                    alt="image"
                                    />
                                </div>
                
                                <div className="reply-user">
                                    <strong>yhjun1000</strong>
                                </div>
                
                                <div id="reply-message">
                                    <span className="msg">
                                    Some text in the modal4
                                    </span>
                                </div>
                                </div>
                                {/* <!-- reply-item --> */}
                            </div>
                        </div>
            
                        <div className="modal-footer">
                            <div className="container-fluid modal-container">
                            <div className="row reply-item">
                                <div className="reply-image">
                                <img
                                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                                    className="collection-image"
                                    alt="image"
                                />
                                </div>
            
                                <div className="reply-user">
                                <strong>mingon</strong>
                                </div>
            
                                <div id="reply-input">
                                    <div style={{width:"75%"}}>
                                    <textarea style={{overflow:"hidden", width:"100%"}} className="form-control" rows="1" placeholder="replay..."></textarea>
                                    </div>
                                    <div style={{width:"25%"}}>
                                    <button id="reply-btn" style={{marginLeft:"2vh", marginRight:"1vh"}} type="button" className="btn btn-light">게시</button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 여기까지 row  --> */}
                            </div>
                            {/* <!-- modal-container --> */}
                            </div>
                            {/* <!-- modal-footer --> */}
                        </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default CollectionContent;
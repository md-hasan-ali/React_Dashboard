import React from 'react';
import './post.css'
import frame43 from '../../images/Frame 43.png'
import frame44 from '../../images/Frame 44.png'
import frame45 from '../../images/Frame 45.png'
import frame46 from '../../images/Frame 46.png'
import frame47 from '../../images/Frame 47.png'
import postman from '../../images/postman-img.png'
import threeDots from '../../images/three_dots.png'
import arrowBottom from '../../images/arrow-bottom.png'
import lock from '../../images/lock.png'
import pin from '../../images/pin.png'
import blog_image from '../../images/blog1.png'
import blog_image2 from '../../images/blog2.png'
import heart from '../../images/heart.png'
import comment from '../../images/comment.png'
import share from '../../images/share.png'
import Upcomingevent from '../UpcomingEvent/Upcomingevent';
import { Link } from 'react-router-dom';


const Post = () => {
    return (
        <div className='row'>
            <div className="col-lg-8 ">
                <div className='post'>
                    <div className="comment-info">
                        <img src={postman} alt="" />
                        <input type="text" placeholder='Compose new post...' />
                    </div>
                    <div className="share-options">
                        <div className='share-options_sub'>
                            <li><button>Go Live</button></li>
                            <li><Link to="#"><img src={frame43} alt="photos" /></Link></li>
                            <li><Link to="#"><img src={frame44} alt="photos" /></Link></li>
                            <li><Link to="#"><img src={frame45} alt="photos" /></Link></li>
                            <li><Link to="#"><img src={frame46} alt="photos" /></Link></li>
                            <li><Link to="#"><img src={frame47} alt="photos" /></Link></li>
                        </div>
                        <div className="post-btn">
                            <button>Post</button>
                        </div>
                    </div>
                </div>
                <div className="feed">
                    <div className="col-lg-3 feed-title">
                        <h3>Feed</h3>
                    </div>
                    <div className="col-lg-9 feed-info">
                        <span>Most recent</span>
                        <li><Link href="#"><img src={arrowBottom} alt="" /></Link></li>
                        <li><Link href="#"><img src={threeDots} alt="" /></Link></li>
                    </div>
                </div>
                <div className='post'>

                    <div className="post1">
                        <div className="blog-info">
                            <img src={postman} alt="" />
                            <div>
                                <span>Micheel E. Gerace <img src={lock} alt="" /></span>
                                <p>20 hours ago <span>room name one</span></p>
                            </div>
                        </div>
                        <div className="blog-info-right">
                            <Link href="#"><img src={pin} alt="" /></Link>
                            <Link href="#"><img src={threeDots} alt="" /></Link>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="blog-title">
                            <h3>About “ExperienceFest” 🎉</h3>
                        </div>
                        <div className="blog-discription">
                            <p>The conference was a vibrant and exciting event that brought together UX designers from different parts of the world. The conference kicked off with an inspiring keynote address by a prominent UX designer who spoke about the importance of designing with empathy and understanding the user's needs. <br />🎤</p>
                        </div>
                        <div className="blog-image">
                            <img src={blog_image} alt="" />
                            <p className='mt-4'>Throughout the event, there were several informative sessions, workshops, and discussions that covered a wide range of topics related to UX design, such as user research, usability testing, design thinking, and more. The presenters were all experts in their respective fields, and their presentations were well-prepared and engaging.</p>

                            <p>One of the most memorable sessions was a hands-on workshop that focused on designing for accessibility. The presenter guided the attendees through various exercises and activities that helped them understand the challenges faced by users with disabilities and how to design products that are inclusive and accessible to all.</p>

                            <p>Another highlight of the conference was the networking opportunities. Attendees had the chance to connect and share ideas with fellow designers from different companies and industries. The atmosphere was friendly and collaborative, and everyone was eager to learn from one another. ✏️✏️✏️
                            </p>
                            <img src={blog_image2} alt="#" />
                            <p className='mt-4'>Overall, the "Experience Fest" conference was an incredible event that provided valuable insights and practical tips for UX designers. It was a great opportunity to learn from industry leaders, connect with peers, and gain inspiration for future projects. I left the conference feeling energized and motivated to apply the new knowledge and skills I had acquired in my own work.</p>
                        </div>
                        <div className="comment-section">
                            <div className="comment-left">
                                <Link href="#"><img src={heart} alt="" /></Link>
                                <Link href="#"><img src={comment} alt="" /></Link>
                                <Link href="#"><img src={share} alt="" /></Link>
                            </div>
                            <div className="comment-right">
                                <li>38 Likes</li>
                                <li>21 Comments</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 custom">
                <Upcomingevent />
            </div>
        </div>
    );
};

export default Post;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeToEnglish, changeToChinese } from '../actions/action';
import { generatorHTML } from '../util/makedownGenerotor';
import school from '../images/school.jpg';

class Introduce extends Component {
    constructor() {
        super();
        console.log(generatorHTML("#1231231"))
    }

    readAll() {
        document.getElementsByClassName('sosconf-home__news--container')[0].style.height = 'auto';
        document.getElementsByClassName('sosconf-home__readAll')[0].style.display = 'none';
    }

    render() {
        let news;
        if (this.props.language == 'en') {
            news = <div className="sosconf-home__news--container">
                    <div className="sosconf-home__news--head">Recent news</div>
                    <div className="sosconf-home__news--more">More news-></div>
                    <div className="sosconf-home__news--block"></div>
                    <h1 className="sosconf-home__news--title">sosconf 2019</h1>
                    <div className="sosconf-home__news--span"></div>
                    <div className="sosconf-home__news--summary">2019年3月14日讯，美国洛杉矶</div>

                    <div className="sosconf-home__news--image">
                        <img src={school}></img>
                    </div>
                    <div className="sosconf-home__news--hr"></div>
                    <div className="sosconf-home__news--content">
                        <h3> 2019年3月14日讯，美国洛杉矶</h3>
                        <p>学生开源年会组委会今天正式宣布，第1届全球学生开源年会 sosconf 2019 将于今年8月在美国南加州大学举办，这是继去年第0届学生开源年会成功召开后，该会议第一次在美国举办。</p>
                        <p>学生开源年会（sosconf ）是首个由学生组织面向学生的非盈利社区全球性开源技术峰会，峰会基于开放源代码的理念，鼓励学生享受开源、了解开源、参与开源、贡献开源，并能从开源中得到实践和乐趣。峰会每年在不同国家不同城市举办，从演讲者、组织者、志愿者到听众，绝大多数为在校学生，包括中学生、大学生硕士研究生和博士研究生，其中演讲者和志愿者仅限学生身份报名，听众不做任何限制。</p>
                        {/* <h3>Promoting Student Open-Source Community</h3> */}
                        <p>南加州大学（University of Southern California ），简称南加大，位于加州洛杉矶市中心，由监理会于1880年创立，是加州最古老的私立研究型大学，亦是全球顶尖的重要学府，人类史上首位登上月球的宇航员阿姆斯特朗、导演斯皮尔伯格、日本首相安倍晋三、诺贝尔奖获得者盖尔曼等大一批知名人士均从该校毕业，本次在南加州大学举办的 sosconf 2019 也是该校首次举办开源盛会，预计将有超过1500名来自世界各地的与会者亲临现场参加。</p>
                        <p>学生开源年会（sosconf）致力于纯粹的技术交流和多元的思想碰撞，为学生群体建立活跃、多元、纯粹、关注学习和未来的技术社区，让不同国家学生积极交流，站上国际舞台，展示在实验室里的创想。该会议旨在积极推动学生参与开放源代码运动的历史进程，2018年成功地在重庆举办第0届学生开源年会，计划未来在不同国家举办当地语言版本的学生开源年会。</p>
                        {/* <h3>A Diverse Learning Experience</h3> */}
                        <p>本次峰会 sosconf 2019 将围绕着“开源”主题，囊括开源项目、网络安全、云计算、大数据、编程语言、人工智能、艺术设计、机器学习、区块链、社区治理等领域，并特设《全球学生开源项目博览会》板块，针对全球各国学生身份创办和发起的优秀开源项目设立现场展示区域和线上展示区域，以便让更多人了解学生开源项目，以及促进不同区域不同学生项目的可持续发展、交流和孵育。</p>
                        {/* <h3>An Experiment</h3> */}
                        <p>随着活动正式宣布启动，大会即将开放志愿者报名（限学生）、演讲投稿（限学生）、征集赞助商等工作、欢迎关注开源领域的学生联系主办方报名参加，请访问学生开源年会官方网站https://sosconf.org 获得更多资讯，以下通信方式为学生开源年会的官方联络方式，敬请关注：</p>
                        <ul>
                            <li><a href="https://fb.com/sosconf">Facebook：https://fb.com/sosconf</a></li>
                            <li><a href="https://twitter.com/sosconf">Twitter：https://twitter.com/sosconf</a></li>
                            <li><a href="https://t.me/sosconf">Telegram：https://t.me/sosconf</a></li>
                            <li><a href="https://weibo.com/sosconf">官方微博：https://weibo.com/sosconf</a></li>
                            <li><a href="https://t.me/soscon">电报中文群组：https://t.me/soscon</a></li>
                            <li><a href="./">中文交流QQ群：932119765</a></li>
                        </ul>
                        <p>全球学生开源年会提供一个绝佳的、多元友好的国际学生交流平台，帮助学生获取顶尖企业的关注，同时有利于企业发掘开源领域的种子学生。世界各地不同国家的学生讲者和各个领域的专业人士的协作交流将会进一步促进开源的发展和对学生、青年人的吸引力，我们鼓励学生亲临现场，交流在开源项目和社区中积累的想法与经验，分享蕴含在编码中的激情，同时畅聊属于开源理念的未来。</p>
                    </div>
                    <div className="sosconf-home__readAll">
                        <div className="sosconf-home__readAll--button" onClick={this.readAll}>READ ALL</div>
                    </div>
                </div>
        } else {
            news = <div className="sosconf-home__news--container">
                    <div className="sosconf-home__news--head">Recent news</div>
                    <div className="sosconf-home__news--more">More news-></div>
                    <div className="sosconf-home__news--block"></div>
                    <h1 className="sosconf-home__news--title">sosconf 2019</h1>
                    <div className="sosconf-home__news--span"></div>
                    <div className="sosconf-home__news--summary">2019年3月14日讯，美国洛杉矶</div>

                    <div className="sosconf-home__news--image">
                        <img src={school}></img>
                    </div>
                    <div className="sosconf-home__news--hr"></div>
                    <div className="sosconf-home__news--content">
                        <h3> 2019年3月14日讯，美国洛杉矶</h3>
                        <p>学生开源年会组委会今天正式宣布，第1届全球学生开源年会 sosconf 2019 将于今年8月在美国南加州大学举办，这是继去年第0届学生开源年会成功召开后，该会议第一次在美国举办。</p>
                        <p>学生开源年会（sosconf ）是首个由学生组织面向学生的非盈利社区全球性开源技术峰会，峰会基于开放源代码的理念，鼓励学生享受开源、了解开源、参与开源、贡献开源，并能从开源中得到实践和乐趣。峰会每年在不同国家不同城市举办，从演讲者、组织者、志愿者到听众，绝大多数为在校学生，包括中学生、大学生硕士研究生和博士研究生，其中演讲者和志愿者仅限学生身份报名，听众不做任何限制。</p>
                        {/* <h3>Promoting Student Open-Source Community</h3> */}
                        <p>南加州大学（University of Southern California ），简称南加大，位于加州洛杉矶市中心，由监理会于1880年创立，是加州最古老的私立研究型大学，亦是全球顶尖的重要学府，人类史上首位登上月球的宇航员阿姆斯特朗、导演斯皮尔伯格、日本首相安倍晋三、诺贝尔奖获得者盖尔曼等大一批知名人士均从该校毕业，本次在南加州大学举办的 sosconf 2019 也是该校首次举办开源盛会，预计将有超过1500名来自世界各地的与会者亲临现场参加。</p>
                        <p>学生开源年会（sosconf）致力于纯粹的技术交流和多元的思想碰撞，为学生群体建立活跃、多元、纯粹、关注学习和未来的技术社区，让不同国家学生积极交流，站上国际舞台，展示在实验室里的创想。该会议旨在积极推动学生参与开放源代码运动的历史进程，2018年成功地在重庆举办第0届学生开源年会，计划未来在不同国家举办当地语言版本的学生开源年会。</p>
                        {/* <h3>A Diverse Learning Experience</h3> */}
                        <p>本次峰会 sosconf 2019 将围绕着“开源”主题，囊括开源项目、网络安全、云计算、大数据、编程语言、人工智能、艺术设计、机器学习、区块链、社区治理等领域，并特设《全球学生开源项目博览会》板块，针对全球各国学生身份创办和发起的优秀开源项目设立现场展示区域和线上展示区域，以便让更多人了解学生开源项目，以及促进不同区域不同学生项目的可持续发展、交流和孵育。</p>
                        {/* <h3>An Experiment</h3> */}
                        <p>随着活动正式宣布启动，大会即将开放志愿者报名（限学生）、演讲投稿（限学生）、征集赞助商等工作、欢迎关注开源领域的学生联系主办方报名参加，请访问学生开源年会官方网站https://sosconf.org 获得更多资讯，以下通信方式为学生开源年会的官方联络方式，敬请关注：</p>
                        <ul>
                            <li><a href="https://fb.com/sosconf">Facebook：https://fb.com/sosconf</a></li>
                            <li><a href="https://twitter.com/sosconf">Twitter：https://twitter.com/sosconf</a></li>
                            <li><a href="https://t.me/sosconf">Telegram：https://t.me/sosconf</a></li>
                            <li><a href="https://weibo.com/sosconf">官方微博：https://weibo.com/sosconf</a></li>
                            <li><a href="https://t.me/soscon">电报中文群组：https://t.me/soscon</a></li>
                            <li><a href="./">中文交流QQ群：932119765</a></li>
                        </ul>
                        <p>全球学生开源年会提供一个绝佳的、多元友好的国际学生交流平台，帮助学生获取顶尖企业的关注，同时有利于企业发掘开源领域的种子学生。世界各地不同国家的学生讲者和各个领域的专业人士的协作交流将会进一步促进开源的发展和对学生、青年人的吸引力，我们鼓励学生亲临现场，交流在开源项目和社区中积累的想法与经验，分享蕴含在编码中的激情，同时畅聊属于开源理念的未来。</p>
                    </div>
                    <div className="sosconf-home__readAll">
                        <div className="sosconf-home__readAll--button" onClick={this.readAll}>READ ALL</div>
                    </div>
                </div>
        }
        return (
            <div className="sosconf-home__news">
                {news}
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            language: state.language
        }
    },
    null
)(Introduce);

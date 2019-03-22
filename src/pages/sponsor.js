import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../themes/sponsor.css';

class Introduce extends Component {

    readAll(){
        document.getElementsByClassName('sosconf-sponsor__wrapper')[0].style.height = 'auto';
        document.getElementsByClassName('sosconf-sponsor__readAll')[0].style.display = 'none';
    }

    render() {
        return (
            <div className="sosconf-sponsor__wrapper">
                <a className="sosconf-sponsor__back" onClick={() => {this.props.history.push("/");}}>Back</a>
                <a className="sosconf-sponsor__more">More</a>
                <h1 className="sosconf-sponsor__title">Sponsorship contact</h1>
                <div className="sosconf-sponsor__span"></div>
                <h3 className="sosconf-sponsor__sub">Welcome to contact sponsors@sosconf.org</h3>
                <div className="sosconf-sponsor__content">
                    <h3>与会人员</h3>
                    <p>全球学生开源年会( sosconf )汇集了来自世界各地的高等院校的学术精英，核心开源项目的开发者和国际知名演讲者。在过去的2018年的活动中，与会人数近 1000 人，通过观看在线直播、录播等方式影响数万人，其中以高校计算机、软件工程专业学生占大多数，也有部分中学生和小学生。对赞助商而言，可以帮助学生获取顶尖企业的关注，同时有利于企业发掘开源领域的种子学生。在2019年，sosconf 全球学生开源年会将会吸引全球超过 1500 名与会者亲临现场一起共襄盛举，带来的影响预计将超过数十万人。</p>
                    <h3>赞助计划</h3>
                    <p>全球学生开源年会邀请了来自世界各所顶级的学校、不同院系的开源技术爱好者参与，从讲者到工作人员到听众绝大部分都是学生，享受开源乐趣，参与开源贡献，关于畅想未来这件事，我们学生更有感觉。</p>
                    <p>我们寻求为世界各地不同国家的学生讲者提供经济援助。此外，我们希望丰富相关活动和宴会的内容，给参会人员留下深刻的印象。会议致力于鼓励学生了解、参与、贡献开源，同时也为认同开源理念和长期参与开源项目的学生创造交流技术和分享经验的机会。因此，我们欢迎相关企业和组织提供必要的赞助，以确保这次影响深远的的全球学生开源年会能够取得成功。</p>
                    <p>赞助商将获得以下好处和机会：</p>
                    <ul>
                        <li>用行动支持开源</li>
                        <li>与来自世界各地顶级的教育机构和学生精英交流意见<br/>
可将贵公司、团体拥有的有关开源运动的经验和技能，在从事开源项目的核心开发者和全球一线的学生精英面前直接展示，交流意见。
</li>
                        <li>帮助企业挖掘有潜力的学生，提前卡位招聘优质的学生<br/>
全球学生开源年会的绝大部分参与者都是学生群体，其中有很多是来自世界顶级高校的学术精英和技术人才。年会一定能够帮助企业挖掘有潜力的学生，提前卡位招聘优质的人才。
</li>
                        <li>扩大商机<br/>
可得知计算机的前沿领域、新趋势和最新消息，寻找扩大商机和业务领域的契机。
</li>
                        <li>提高品牌力<br/>
作为致力于纯粹的全球学生开源运动的贵公司、团体，可扩大提高海外的知名度，并进一步提高其在海外市场及举办地的价值和魅力。
</li>
                    </ul>

                    <h3>赞助方案——钛金级</h3>
                    <ul>
                        <li>sosconf 2019 年会入场票 ×8</li>
                        <li>年会晚宴VIP邀请票 ×4</li>
                        <li>钛金级展位及定制胸牌</li>
                        <li>赞助商宣传资料入袋 ×3</li>
                        <li>活动手册跨页广告</li>
                        <li>议程表显示公司名称及 Logo ：整页及单页</li>
                        <li>官方社群媒体网站发表钛金级赞助商专属推文两篇</li>
                        <li>会议前后的群发电子邮件 ×2</li>
                        <li>会前宣传视频时长 120s</li>
                        <li>钛金级手册跨页广告</li>
                        <li>闪电演讲保留1个名额</li>
                        <li>宣传资料入袋 ×3</li>
                        <li>赞助商 Logo 于官网露出及公司介绍</li>
                        <li>活动会场签到区及主会场背板 Logo 联名露出 </li>
                        <li>赞助金：20,000 USD</li>
                    </ul>

                    <h3>赞助方案——钻石级</h3>
                    <ul>
                        <li>sosconf 2019 年会入场票 ×6</li>
                        <li>年会晚宴VIP邀请票 ×2</li>
                        <li>钻石级展位及定制胸牌</li>
                        <li>赞助商宣传资料入袋 ×2</li>
                        <li>活动手册整页广告</li>
                        <li>议程表显示公司名称及 Logo ：封底及半页</li>
                        <li>官方社群媒体网站发表钻石级赞助商专属推文一篇</li>
                        <li>会议前后的群发电子邮件 ×2</li>
                        <li>会前宣传视频时长 90s</li>
                        <li>钻石级手册整页广告</li>
                        <li>赞助商 Logo 于官网露出及公司介绍</li>
                        <li>活动会场签到区及主会场背板上 Logo 联名露出</li>
                        <li>赞助金：10,000 USD </li>
                    </ul>

                    <h3>赞助方案——黄金级</h3>
                    <ul>
                        <li>sosconf 2019 年会入场票 ×4</li>
                        <li>年会晚宴VIP邀请票 ×1</li>
                        <li>黄金级展位及定制胸牌</li>
                        <li>赞助商宣传资料入袋 ×1</li>
                        <li>活动手册侧栏广告</li>
                        <li>议程表显示公司名称及 Logo ：1/4页</li>
                        <li>官方社群媒体网站发表黄金级赞助商专属推文一篇</li>
                        <li>会议后的群发电子邮件 ×1</li>
                        <li>会前宣传视频时长 60s</li>
                        <li>黄金级手册侧栏广告</li>
                        <li>赞助商 Logo 于官网露出及公司介绍</li>
                        <li>活动会场签到区及分会场背板上 Logo 联名露出</li>
                        <li>赞助金：7,000 USD</li>
                    </ul>

                    <h3>赞助方案——白银级</h3>
                    <ul>
                        <li>sosconf 2019 年会入场票 ×2</li>
                        <li>白银级展位及定制胸牌</li>
                        <li>活动手册 Logo 露出</li>
                        <li>议程表显示公司名称及 Logo ：1/8页</li>
                        <li>赞助商 Logo 于官网露出及公司介绍</li>
                        <li>活动会场签到区背板上 Logo 联名露出</li>
                        <li>赞助金：4,000 USD </li>
                    </ul>

                    <h3>赞助方案——青铜级</h3>
                    <ul>
                        <li>sosconf 2019 年会入场票 ×1</li>
                        <li>青铜级展位及定制胸牌</li>
                        <li>活动手册 Logo 露出</li>
                        <li>赞助商 Logo 于官网露出及公司介绍</li>
                        <li>活动会场签到区背板上 Logo 联名露出</li>
                        <li>赞助金：2,000 USD</li>
                    </ul>

                    <p><small style={{fontWeight:800}}>注：赞助商的闪电演讲内容和社交媒体推文内容需经过 sosconf 2019 组委会的批准。会前宣传片需由赞      助商提供，总时长可以分次累计使用，如90s时长可以分成60s和30s分时段播放。</small></p>

                    <div className="sosconf-sponsor__readAll">
                        <div className="sosconf-sponsor__readAll--button" onClick={this.readAll}>READ ALL</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Introduce;
